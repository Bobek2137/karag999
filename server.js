const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

app.get("/data", function (req, res) {
    res.send("<h1>Imie: ALeksander, nazwisko: Karagiannakos , klasa 3i2, grupa 1</h1>")
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
app.get("/", function (req, res) {
    res.send(dane)
})

const dane = {
    imie: "Aleksander",
    nazwisko: "karagiannakos",
    klasa: "3i2",
    grupa: "1",

}