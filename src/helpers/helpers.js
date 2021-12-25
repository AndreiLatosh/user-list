export const convertDate = (dateString) => {
    const date = new Date(Date.parse(dateString));
    return date.toLocaleString('ru', {year: 'numeric', month: 'numeric', day:'numeric'})
}

export const getDate = (dateString) => {
    return new Date(Date.parse(dateString));
}