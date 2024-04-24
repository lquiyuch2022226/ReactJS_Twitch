export const validateTitle = (title) => {
    return title.length >= 3 && title.length <= 30
}

export const validateTitleMessage = 'EL titulo debe de entre 3 y 30 caracteres'