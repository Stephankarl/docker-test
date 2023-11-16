const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./config/db')

db.connect()

app.use(cors())
app.use(express.json())

app.use('/api', require('./routes'))
app.use('/api/people', require('./routes/people'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server running on port ${port}`))
