const models = require('../models');

module.exports = {
  items: {
    post: (req, res) => {
      const { id, name, description, price, discount, inventory, image } =
        req.body;

      if (!id || !name || !description || !price || !inventory || !image) {
        return res.status(400).send('Bad Request!');
      } else {
        models.items.post(
          Number(id),
          name,
          description,
          price,
          discount,
          inventory,
          image,
          (err, result) => {
            if (err) {
              res.status(500).send('Internal Server Error!');
            } else {
              res.status(201).send('Successfully Added!');
            }
          }
        );
      }
    },
    get: (req, res) => {
      const id = req.params.id;

      models.items.get(id, (err, result) => {
        if (err) {
          res.status(500).send('Internal Server Error');
        } else {
          res.status(200).json(result);
        }
      });
    },
    patch: (req, res) => {
      const { id, name, description, price, discount, inventory, image } =
        req.body;
      if (id) {
        models.items.patch(id, (err, result) => {
          if (err) {
            res.status(500).send('Internal Server Error');
          } else {
            res.status(201).send('Succesfully Modified!');
          }
        });
      }
    },
    delete: (req, res) => {},
  },
};
