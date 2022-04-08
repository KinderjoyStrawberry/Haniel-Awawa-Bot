const express = require("express")
const app = express()

app.all("/", (req, res) => {
    res.send("Hello, im running!")
})

function keepAlive() {
    app.listen(3000, () => {
        console.log("Server Ready!")
    })
}

module.exports = keepAlive