export const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}

export const emailValidationMessage = 'Este no es un email valido, ingresa uno valido por favor'