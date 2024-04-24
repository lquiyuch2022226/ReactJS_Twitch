export const validateUsername = (userName) =>{
    const regex = /^\S{3,8}$/

    return regex.test(userName)
}

export const validateUsernameMessage = 'El nombre usuario debe de tener entre 3 y 8 caracteres sin espacios'