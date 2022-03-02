const models = require('../models');

module.exports = {
  items: {
    post: (req, res) => {
      const { id, name, description, price, inventory, image } = req.body;

      if (!id || !name || !description || !price || !inventory || !image) {
        return res.status(400).send('Bad Request!');
      } else {
        models.items.post(
          Number(id),
          name,
          description,
          price,
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
          if (result.length === 0) {
            res.status(404).send('No Item Exists!');
          } else {
            res.status(200).json(result);
          }
        }
      });
    },
    get_all: (req, res) => {
      models.items.get_all((err, result) => {
        if (err) {
          res.status(500).send('Internal Server Error');
        } else {
          if (result.length === 0) {
            res.status(404).send('No Item Exists!');
          } else {
            res.status(200).json(result);
          }
        }
      });
    },
    patch: (req, res) => {
      const id = req.params.id;
      const { name, description, price, inventory, image } = req.body;

      if (name) {
        models.items.patch_name(id, name, (err, result) => {
          if (err) {
            res.status(500).send('Internal Server Error');
          } else {
            res.status(201).send('Succesfully Modified!');
          }
        });
      }
      if (description) {
        models.items.patch_description(id, description, (err, result) => {
          if (err) {
            res.status(500).send('Internal Server Error');
          } else {
            res.status(201).send('Succesfully Modified!');
          }
        });
      }
      if (price) {
        models.items.patch_price(id, price, (err, result) => {
          if (err) {
            res.status(500).send('Internal Server Error');
          } else {
            res.status(201).send('Succesfully Modified!');
          }
        });
      }
      if (inventory) {
        models.items.patch(inventory, (err, result) => {
          if (err) {
            res.status(500).send('Internal Server Error');
          } else {
            res.status(201).send('Succesfully Modified!');
          }
        });
      }
      if (image) {
        models.items.patch(image, (err, result) => {
          if (err) {
            res.status(500).send('Internal Server Error');
          } else {
            res.status(201).send('Succesfully Modified!');
          }
        });
      }
    },
    delete: (req, res) => {
      const id = req.params.id;

      models.items.delete(id, (err, result) => {
        if (err) {
          res.status(500).send('Internal Server Error');
        } else {
          res.status(410).send('Succesfully Deleted! Content has gone!');
        }
      });
    },
  },
};
