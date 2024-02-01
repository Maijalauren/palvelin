const express = require('express')
const app = express()
const cors = require('cors')
const vaatteet = require('./vaatteet.json')
const path = require('path')
const fs = require (`fs`).promises

app.use(cors())


app.get(`/api/login`, async (req, res) => {
    try  {

        const savedPin = await fs.readFile('./pin.txt', 'utf-8')

        res.send(savedPin)

    } catch {
    
        res.status(500).send('Internal Server Error')
    }

})





//tehdään polkumääritys frontend kansioon
const fronttipolku = path.join(__dirname, './frontend')

//sanotaan, että em. polussa on tiedostosisältö
//jota palvelin käyttää, kun se saa http requestin
app.use(express.static(fronttipolku))


//Hello world
app.get('/api', (req, res) => {
    console.log("Pyyntö tuli")
    res.send("Hello World! I am Express web server!")
    }
)


//vaatedatan lähettäminen
    app.get('/api/vaatteet', (req, res) => {
        res.json(vaatteet)
        // res.status(200).json(vaatteet)
        }
    )


// Palvelin kuuntelee portissa 3000
app.listen('3000', () =>
console.log("Server is up on port 3000")
)
