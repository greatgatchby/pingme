const timestamp = (result) => {
    const date = new Date()
    const day = (`0${date.getDate()}`).slice(-2).toString();
    const month = (`0${date.getMonth() + 1}`).slice(-2).toString();
    const year = date.getFullYear().toString();
    result = day+month+year
    return result
}

export default timestamp
