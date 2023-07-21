const express = require('express')
const path = require('path')

const app = express()

const port = 3000





// console.log all incoming requests
app.use((req, res, next) => {
    console.log(`${req.hostname}${req.path}`);
    next()
})


app.get('/api', (req, res) => {
  res.send('Hello World!')
})


// send static files 
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

//send homepage front end on rootpath 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})