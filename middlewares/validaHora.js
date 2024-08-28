const validarHora = (req, res, next) => {
    if (res.locals.hour > 12 && res.locals.hour < 24){
        res.locals.isTheHour = true
        next()
    }
    else{
        res.locals.isTheHour = false
        res.locals.monstarMensaje = true
        res.redirect('/')
    }
}

module.exports = validarHora