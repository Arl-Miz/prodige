export default (state, action) => {
    switch (action.type) {
        case "REMOVE_ITEM":
            return {
                ...state,
                tasks: state.tasks.filter((item) => item.id !== action.payload),
            };
        case "ADD_ITEM":
            // console.log(state);
            const newTitle = { title: action.payload };
            return {
                ...state,
                tasks: [...state.tasks, newTitle],
                // tasks: [...state.tasks, title:action.payload],
            };

        default:
            return state;
    }
};