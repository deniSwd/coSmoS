export const required = (value) => {
    if (value) return undefined
    return 'This is required field'
}
export const maxLengthCreator = (maxLength) => {
    return (value) => {
        if (value.length > maxLength) return `Max length string ${maxLength} !`
        return undefined
    }
}