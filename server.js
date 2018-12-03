const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())

const PORT = 3001

app.use('/static', express.static(path.join(__dirname, 'public'), {'maxage': '2h'}))

app.get('/hi', (req, res) => {
	res.header('Cache-Control', 'public, max-age=86400')
	res.header('Content-Type', 'text/html')
	res.send(new Buffer('<h2>Hello from Buffer!</h2>'))
})

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`))