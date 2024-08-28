const validarHora = (req, res, next) => {
    res.locals.isTheHour = true
    if (res.locals.hour > 12 && res.locals.hour < 24){
        res.locals.isTheHour = true
        next()
    }
    else{
        res.locals.isTheHour = false
        res.redirect('/')
    }
}

module.exports = validarHora