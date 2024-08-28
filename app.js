const express = require("express")
const app = express()
const index = require("./routes/index.js")
const horaMiddleware = require("./middlewares/horaMiddleware.js")
const PORT = 3000


app.use("/", horaMiddleware, index)

app.listen(PORT, () => {
    console.log(`http:/localhost:${PORT}/`)
})