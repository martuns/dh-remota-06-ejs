module.exports = {
    home: function(req, res) {
        res.render('index', { title: 'Express' });
      },
      contact: function(req, res) {
        res.render('index', { title: 'Contact' });
      },
      about: function(req, res) {
        res.render('index', { title: 'About' });
      },
}