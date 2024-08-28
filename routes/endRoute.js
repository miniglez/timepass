const express = require("express")
const router = express.Router()

console.log("Entra en endRoute")
router.get("/endroute", (req, res) => {
    res.send("<h1>Has llegado al final de la routa</h1>")
})

// router.use((req, res) => {
//     res.status(404).send("Page not found")
// })

module.exports = router