

export const actionsTypesGeneral = {
    // SET_CURRENT_PATH: "SET_CURRENT_PATH",
    SET_CONTACT_FOOTER: "SET_CONTACT_FOOTER",
    SET_PAGE_VISITED: "SET_PAGE_VISITED",
    SET_USER: "SET_USER"
}

export const setContactFooter = (dispatch, contactFooter) => {
    const aux = {
        type: actionsTypesGeneral.SET_CONTACT_FOOTER,
        data: contactFooter
    }
    dispatch(aux)
}

export const setPageVisited = (dispatch, pageVisited) => {
    const aux = {
        type: actionsTypesGeneral.SET_PAGE_VISITED,
        data: pageVisited
    }
    dispatch(aux)
}

export const setUser = (dispatch, user) => {
    const aux = {
        type: actionsTypesGeneral.SET_USER,
        data: user
    }
    dispatch(aux)
}

// export const setCurrentPath = (dispatch, currentPath) => {
//     const aux = {
//         type: actionsTypesGeneral.SET_CURRENT_PATH,
//         data: currentPath
//     }
//     dispatch(aux)
// }

