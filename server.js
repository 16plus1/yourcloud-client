const { resolveSoa } = require('dns')
const express = require('express')
const path = require('path')
const { ppid } = require('process')

const PORT = process.env.PORT || 8888

const app = express()
app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, "build")))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

ppid.listen(PORT)