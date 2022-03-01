const models = require('../models');

module.exports = {
  items: {
    post: (req, res) => {},
    get: (req, res) => {
      const id = req.parmas.id;

      models.items.get(id, (err, result) => {
        if (err) {
          res.status(500).send('Internal Server Error');
        } else {
          res.status(200).json(result);
        }
      });
    },
    patch: (req, res) => {},
    delete: (req, res) => {},
  },
};
