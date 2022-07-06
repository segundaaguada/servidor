import { actionsTypesGeneral } from "./action"


const initialStateGeneral = {
    // currentPath: "/",
    contactFooter: false,
    pageVisited: false,
    user: undefined
}

// const setCurrentPath = (state, data) => {
//     const aux = {...state}
//     aux.currentPath = data
//     return aux
// }

const setContactFooter = (state, data) => {
    const aux = {...state}
    aux.contactFooter = data
    return aux
}

const setPageVisited = (state, data) => {
    const aux = {...state}
    aux.pageVisited = data
    return aux
}

const setUser = (state, data) => {
    const aux = {...state}
    aux.user = data
    return aux
}

export const reducerGeneral = (state = initialStateGeneral, action) => {
    // let newState = state
    switch (action.type) {
        // case actionsTypesGeneral.SET_CURRENT_PATH:
        //     newState = setCurrentPath(state, action.data)
        //     break;
        case actionsTypesGeneral.SET_CONTACT_FOOTER:
            return setContactFooter(state, action.data)
        case actionsTypesGeneral.SET_PAGE_VISITED:
            return setPageVisited(state, action.data)
        case actionsTypesGeneral.SET_USER:
            return setUser(state, action.data)
        default:
            return state
    }
    // return newState;
}