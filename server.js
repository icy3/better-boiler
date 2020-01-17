const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const { connection } = require('/mnt/c/Users/Mustang/Desktop/HRAXT46/better-boiler/db/db.js')
const axios = require('axios')
const API_KEY = require('./src/config.')



/// connection.connect upnhere
app.use(express.static(path.join(__dirname, './dist')))

app.get('/api/todayimage'), (req,res) => {
axios.get(`api here ${API_KEY}`)
.then(data => {
console.error(data))
connection.query(` INSERT INTO images (hdurl, date, title, explanation) VALUES {${data.data.hdurl}, ${data.data.date}....title, explanation,
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))