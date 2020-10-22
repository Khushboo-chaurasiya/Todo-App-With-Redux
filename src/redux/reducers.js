import {FILTER_ALL} from "./actionTypes";
import {ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER, EDIT_TODO} from "./actionTypes";

const initialTodoState = {
    nextId: 2,
    data: {
        1: {
            content: "Content 1",
            completed: false
        }
    }
};

export const todos = (state = initialTodoState, action) => {
    switch (action.type) {
    case ADD_TODO: {
        let alreadyContains = false;
        for (let i = 0; i < Object.values(state.data).length; i++) {
            if (
                Object.values(state.data)[i].content.toUpperCase() ===
                action.payload.content.toUpperCase()
            ) {
                alreadyContains = true;
                break;
            }
        }
        if (alreadyContains) {
            return state;
        } else {
            return {
                ...state,
                data: {
                    ...state.data,
                    [state.nextId]: {
                        completed: false,
                        content: action.payload.content
                    }
                },

                nextId: state.nextId + 1
            };
        }
    }
    case TOGGLE_TODO: {
        return {
            ...state,
            data: {
                ...state.data,
                [action.payload.id]: {
                    ...state.data[action.payload.id],
                    completed: !state.data[action.payload.id].completed
                }
            }
        };
    }
    case DELETE_TODO: {
        let newState = {
            ...state.data
        };

        delete newState[action.payload.id];

        return {...state, data:{...newState}};
    }

    case EDIT_TODO: {
        return {
            ...state,
            data: {
                ...state.data,
                [action.payload.id]: {
                    ...state.data[action.payload.id],
                    content: action.payload.content
                }
            }
        };
    }

    default: {
        return state;
    }
    }
};

export const visibilityFilter = (state = {activeFilter: FILTER_ALL}, action) => {
    switch (action.type) {
    case SET_FILTER: {
        return {
            activeFilter: action.payload.filter
        };
    }

    default: {
        return state;
    }
    }
};

export default todos;
