const express = require('express')
const app = express()
const PORT = 8000

const path = require('path')
let p = path.join(__dirname.replace('server', ''), 'client', 'build')
console.log(p)

app.use(express.static(p), () => console.log(p))

app.listen(PORT, () => {
  console.log('server listening on port ' + PORT)
})
