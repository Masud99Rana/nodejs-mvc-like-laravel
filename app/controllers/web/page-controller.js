class PageController {

    home(req, res) {
        res.send('Home page. Controller.')
    }

    about(req, res) {
        res.send('About page.')
    }

    contact(req, res) {
        res.send('Contact page.')
    }

}

module.exports = new PageController()