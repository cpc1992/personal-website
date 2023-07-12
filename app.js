const express = require('express')
const app = express()
const port = 3000


app.use((req, res, next) => {
    console.log(`${req.hostname}${req.path}`);
    next()
})


app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
    res.send('test')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})