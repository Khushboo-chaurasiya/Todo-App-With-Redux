import React from "react";
import {connect} from "react-redux";
import {_} from "../../node_modules/underscore/underscore";
import {FILTER_ALL, FILTER_COMPLETED} from "../redux/actionTypes";
import {toggleTodo} from "../redux/actions";
import {deleteTodo} from "../redux/actions";
import {editTodo} from "../redux/actions";
import "./Assets/Todo.css";
import {Link} from "react-router-dom";

import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";

const Todo = ({todo, id, toggleTodo, deleteTodo, editTodo}) => (
    <p className="listItem">
        {todo.content}
        <span>
            {todo.completed === false ? (
                <button className="sendButton" onClick={() => toggleTodo(id)}>
                    <DoneIcon color="primary" />
                </button>
            ) : (
                <button className="sendButton" onClick={() => toggleTodo(id)}>
                    <CloseIcon color="primary" />
                </button>
            )}{" "}
            &nbsp; &nbsp;
            <Link
                className="aEdit"
                to={{
                    pathname: "/edit",
                    dataId: id,
                    currentValue: todo.content,
                    editTodo: editTodo
                }}
            >
                {" "}
                <button className="sendButton">
                    {" "}
                    <EditIcon color="action" />{" "}
                </button>
            </Link>
            &nbsp; &nbsp;
            <button className="sendButton" onClick={() => deleteTodo(id)}>
                {" "}
                <DeleteIcon color="secondary" />{" "}
            </button>
        </span>
    </p>
);

function TodoList({todos, toggleTodo, deleteTodo, editTodo}) {
    return Object.keys(todos).length === 0 ? (
        <p className="NoDataFound">No data found.</p>
    ) : (
        <React.Fragment>
            {" "}
            {_.keys(todos).map((id) => (
                <Todo
                    key={id}
                    id={id}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    todo={todos[id]}
                    editTodo={editTodo}
                />
            ))}
        </React.Fragment>
    );
}

const mapState = (state) => {
    if (state.visibilityFilter.activeFilter === FILTER_ALL) {
        return {
            todos: state.todos.data
        };
    } else if (state.visibilityFilter.activeFilter === FILTER_COMPLETED) {
        return {
            todos: _.pick(state.todos.data, (todo) => todo.completed)
        };
    } else {
        return {
            todos: _.pick(state.todos.data, (todo) => !todo.completed)
        };
    }
};

export default connect(mapState, {toggleTodo, deleteTodo, editTodo})(TodoList);
