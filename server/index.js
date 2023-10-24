const express = require('express')
const Router = require('../router')
const hbs = require('express-handlebars')

class Server {
    constructor(port) {
        this.port = port
        this.app = express()
        this.router = Router
    }

    start() {
        this._setViewEngine()
        this._setupRoutes()
        this._listen()
    }

    _setViewEngine() {
        this.app.set('view engine', 'hbs')

        this.app.engine('hbs', hbs.engine({
            extname: '.hbs'
        }));

    }

    _setupRoutes() {
        this.router.create(this.app)
    }

    _listen() {
        this.app.listen(this.port, () => {
            console.log(`App is running on port ${this.port}`);
        })
    }
}

module.exports = Server