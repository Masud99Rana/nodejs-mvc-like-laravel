const express = require('express')
const Router = require('../router')
const hbs = require('express-handlebars')
const Scheduler = require('../app/scheduler')

class Server {
    constructor(port) {
        this.port = port
        this.app = express()
        this.router = Router
    }

    start() {
        this._setViewEngine()
        this._setupRoutes()
        this._startScheduler()
        this._listen()
    }

    _startScheduler() {
        Scheduler.runTasks()
    }

    _setViewEngine() {
        this.app.engine('hbs', hbs.engine({
            extname: '.hbs'
        }))

        this.app.set('view engine', 'hbs')
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