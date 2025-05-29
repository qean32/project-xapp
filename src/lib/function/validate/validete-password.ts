export const validatePassword = (password: string) => {
    if (password.trim().length > 6 && password.match(/[0-9]/) && password.match(/[a-z]/))
        return true
    return false
}