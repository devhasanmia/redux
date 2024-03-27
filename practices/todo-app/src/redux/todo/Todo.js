const initialState = {
    todoList: [],
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        case "DELETE_TODO":
            const filteredList = state.todoList.filter(todo => todo.id !== action.payload);
            return {
                ...state,
                todoList: filteredList
            }
        default:
            return state
    }
}

export default todoReducer