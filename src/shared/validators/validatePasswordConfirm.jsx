export const validatePasswordConfirm = (password, confirmPass) => {
    return password === confirmPass;
}

export const passwordConfirmMessage = 'Las contraseñas no coinciden'