const timestamp = () => {
    const date = new Date()
    const day = (`0${date.getDay()}`).splice(-2)
    const month = date.getMonth().toString()
    const year = date.getFullYear().toString()
    console.log(day+month+year)
}

timestamp()
