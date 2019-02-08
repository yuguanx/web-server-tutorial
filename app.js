let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')
let app = express()

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.post('/', function (req, res) {
  console.log(req.body)
  res.status(200).send('Thank you!')
})
app.listen(3000)
