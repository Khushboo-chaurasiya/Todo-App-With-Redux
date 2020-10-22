import * as actions from '../actions';

describe('actions', () => {
    it('should create an action to add a todo', () => {
        const text = 'Finish docs'
        expect(actions.addTodo(text)).toBeDefined()
    })
})

describe('actions', () => {
    it('should Toggle todo', () => {
        const text = 'Finish docs'
        expect(actions.toggleTodo(text)).toBeDefined()
    })
})

describe('actions', () => {
    it('should Delete todo', () => {
        const text = 'Finish docs'
        expect(actions.deleteTodo(text)).toBeDefined()
    })
})

describe('actions', () => {
    it('Filter todo', () => {
        const text = 'Finish docs'
        expect(actions.setFilter(text)).toBeDefined()
    })
})

describe('actions', () => {
    it('should edit todo', () => {
        const text = 'Finish docs'
        expect(actions.editTodo(text)).toBeDefined()
    })
})
