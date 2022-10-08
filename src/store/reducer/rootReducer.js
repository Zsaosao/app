const init = {
    users: [
        { id: 1, name: 'dev' },
        { id: 2, name: 'frontend' },
    ],
};

function rootReducer(state = init, action) {
    switch (action.type) {
        case `DELETE_USER_REDUX`:
            const newUser = state.users;
            const users = newUser.filter((user) => user.id != action.payload.id);
            return { ...state, users };
        default:
            return state;
    }
}

export default rootReducer;
