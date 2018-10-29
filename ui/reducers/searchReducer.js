export default function (state = {location: {}, cep: {}}, action) {
    console.log(action.payload)
    switch (action.type) {
        case 'SEARCH':
            return {...state, cep: action.payload}
        case 'SEARCH_MAP':
            return {...state, location: action.payload}
        default:
            return state
    }

}