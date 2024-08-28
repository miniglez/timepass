const express = require("express")
const router = express.Router()
const endRoute = require("./endRoute.js")
const validaHora = require("../middlewares/validaHora.js")


router.get("/", (req, res) => {
    res.send(
        `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Challenge Middlewares</title>
        </head>
        <body>
            <h1>Bienvenido</h1>
            <h2>La hora actual es de ${res.locals.hour}:${res.locals.minutes}</h2>
            <a href='/endroute'>Entrar</a>
            ${res.locals.monstarMensaje ? 
                `
                    <p>Aun no es la hora, solo se puede acceder de 12:00 a 24:00</p>
                `
                :""
            }
        </body>
        </html>
        `
    )
})

router.get("/endroute", validaHora, endRoute)

router.use((req, res) => {
    res.status(404).send("<h1>Page not found<h1>")
})


module.exports = router