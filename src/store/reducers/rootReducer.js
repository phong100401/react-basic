const initState = {
    users: [
        { id: 1, name: 'Phong' },
        { id: 2, name: 'Jay' },
        { id: 3, name: 'Bi' }
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('delete >>>>> ', action)
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            };
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10000)
            let user = { id: id, name: `random - ${id}` }

            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }
}

export default rootReducer;