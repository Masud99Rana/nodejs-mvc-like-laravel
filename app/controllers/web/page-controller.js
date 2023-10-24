const logger = require('../../modules/logger')

class PageController {

    async home(req, res) {
        // throw new Error('An error happened')

        logger.info('Info message')
        // res.send('Home page. Controller.')
        res.render('home')
    }

    async about(req, res) {
        res.render('about')
    }

    async contact(req, res) {
        res.render('contact')
    }

}

module.exports = new PageController()