const portfolioReducer = (state = { list: []}, action) => {
    switch (action.type) {
        case "LOAD_PORTFOLIO_PENDING":
            state = {
                ...state
    };
    break;
        case "LOAD_PORTFOLIO_FULFILLED":
        state = {
            ...state,
            list: [ action.payload ]
        };
    break;
    default:
        return state
    }
        return state
};

export default portfolioReducer;