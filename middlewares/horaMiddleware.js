const setHour = (number) => {
    if(number < 10){
        return `0${number}`
    }
    else{
        return number
    }
}

const horaMiddleware = (req, res, next) => {
    const now = new Date()
    const hour = now.getHours()
    const minutes = now.getMinutes()
    res.locals.hour = setHour(hour)
    res.locals.minutes = setHour(minutes)
    res.locals.isTheHour = true
    next()
}

module.exports = horaMiddleware