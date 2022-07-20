export default (state, action) => {
    switch (action.type) {
        case "REMOVE_ITEM":
            return {
                ...state,
                menu: state.menu.filter((item) => item.id !== action.payload),
            };
        case "ADD_ITEM":
            return {
                ...state,
                menu: [action.payload, ...state.menu],
            };

        default:
            return state;
    }
};