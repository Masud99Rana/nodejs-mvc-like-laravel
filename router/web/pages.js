module.exports = {
  group: {
      prefix: '/pages'
  },
  routes: [
      {
          method: 'get',
          path: '/',
          handler: (req, res) => {
              res.send('Home page. Test.')
          }
      },
      {
          method: 'get',
          path: '/about',
          handler: (req, res) => {
              res.send('About page.')
          }
      },
      {
          method: 'get',
          path: '/contact',
          handler: (req, res) => {
              res.send('Contact page.')
          }
      },
  ]
}