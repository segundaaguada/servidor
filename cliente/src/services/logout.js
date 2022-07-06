
const logoutService = () => {
    window.localStorage.removeItem('loggedUser')
}

export default logoutService