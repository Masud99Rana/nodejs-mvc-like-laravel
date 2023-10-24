const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Home page 1')
})

app.get('/products', (req, res) => {
    res.send('Products page')
})

const port = 8080
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})