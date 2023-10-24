const express = require('express')
const Router = require('../router')

class Server {
    constructor(port) {
        this.port = port
        this.app = express()
        this.router = Router
    }

    start() {
        this._setupRoutes()
        this._listen()
    }

    _setupRoutes() {
        this.router.create(this.app)

        // this.app.get('/', (req, res) => {
        //     res.send('Home page. For real?')
        // })

        // this.app.get('/products', (req, res) => {
        //     res.send('Products page')
        // })
    }

    _listen() {
        this.app.listen(this.port, () => {
            console.log(`App is running on port ${this.port}`);
        })
    }
}

module.exports = Server