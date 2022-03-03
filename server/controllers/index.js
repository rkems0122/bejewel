const models = require('../models');

module.exports = {
  items: {
    post: (req, res) => {
      const {
        id,
        name,
        description,
        price,
        inventory,
        image,
        category,
        material_base,
        material_etc,
        material_plated,
        material_stone,
        shape,
        size,
        weight,
      } = req.body;
      if (
        !id &&
        !name &&
        !description &&
        !price &&
        !inventory &&
        !image &&
        !category &&
        !material_base &&
        !material_etc &&
        !material_plated &&
        !material_stone &&
        !shape &&
        !size &&
        !weight
      ) {
        return res.status(400).send('Bad Request!');
      } else {
        models.items.post(
          Number(id),
          name,
          description,
          price,
          inventory,
          image,
          category,
          material_base,
          material_etc,
          material_plated,
          material_stone,
          shape,
          size,
          weight,
          (err, result) => {
            if (err) {
              console.log(err);
              res.status(500).send('Internal Server Error!');
            } else {
              console.log('Successfully Added!');
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
          console.log('Internal Server Error');
          res.status(500).send('Internal Server Error');
        } else {
          if (result.length === 0) {
            console.log('No Item Exists!');
            res.status(404).send('No Item Exists!');
          } else {
            console.log('id num ${id} is displayed!');
            res.status(200).json(result);
          }
        }
      });
    },
    get_all: (req, res) => {
      models.items.get_all((err, result) => {
        if (err) {
          console.log('Internal Server Error');
          res.status(500).send('Internal Server Error');
        } else {
          if (result.length === 0) {
            console.log('No Item! Check your id!');
            res.status(404).send('No Item Exists!');
          } else {
            console.log(`All items is displayed!`);
            res.status(200).json(result);
          }
        }
      });
    },
    get_detailed: (req, res) => {
      const id = req.params.id;
      models.items.get_detailed(id, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        } else {
          if (result.length === 0) {
            console.log('No Item!');
            res.status(404).send('No Item Exists!');
          } else {
            console.log(`Details of Id Num ${id} is displayed!`);
            res.status(200).json(result);
          }
        }
      });
    },
    patch: (req, res) => {
      const id = req.params.id;
      const { name, description, price, inventory, image } = req.body;
      if (!name || !description || !price || !inventory || !image) {
        console.log('No Input!');
        return res.status(400).send('Bad Request!');
      }
      if (name) {
        models.items.patch_name(id, name, (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
          } else {
            console.log('Name is Modified!');
            res.status(201).send('Succesfully Modified!');
          }
        });
      }
      if (description) {
        models.items.patch_description(id, description, (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
          } else {
            console.log('Description is Modified!');
            res.status(201).send('Succesfully Modified!');
          }
        });
      }
      if (price) {
        models.items.patch_price(id, price, (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
          } else {
            console.log('Price is Modified!');
            res.status(201).send('Succesfully Modified!');
          }
        });
      }
      if (inventory) {
        models.items.patch(inventory, (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
          } else {
            console.log('Inventory is Modified!');
            res.status(201).send('Succesfully Modified!');
          }
        });
      }
      if (image) {
        models.items.patch(image, (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
          } else {
            console.log('Image is Modified!');
            res.status(201).send('Succesfully Modified!');
          }
        });
      }
    },
    patch_detailed: (req, res) => {
      const id = req.params.id;
      const {
        category,
        material_base,
        material_etc,
        material_plated,
        material_stone,
        shape,
        size,
        weight,
      } = req.body;

      if (
        !category &&
        !material_base &&
        !material_etc &&
        !material_plated &&
        !material_stone &&
        !shape &&
        !size &&
        !weight
      ) {
        console.log('No Input!');
        return res.status(400).send('Bad Request!');
      }
      if (category) {
        models.items.patch_category(id, category, (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
          } else {
            console.log('Category is Modified!');
            res.status(201).send('Succesfully Modified!');
          }
        });
      }
      if (material_base) {
        models.items.patch_material_base(id, material_base, (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
          } else {
            console.log('Material_base is Modified!');
            res.status(201).send('Succesfully Modified!');
          }
        });
      }
      if (material_etc) {
        models.items.patch_material_etc(id, material_etc, (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
          } else {
            console.log('Material_etc is Modified!');
            res.status(201).send('Succesfully Modified!');
          }
        });
      }
      if (material_plated) {
        models.items.patch_material_plated(
          id,
          material_plated,
          (err, result) => {
            if (err) {
              console.log(err);
              res.status(500).send('Internal Server Error');
            } else {
              console.log('Material_plated is Modified!');
              res.status(201).send('Succesfully Modified!');
            }
          }
        );
      }
      if (material_stone) {
        models.items.patch_material_stone(id, material_stone, (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
          } else {
            console.log('Material_stone is Modified!');
            res.status(201).send('Succesfully Modified!');
          }
        });
      }
      if (shape) {
        models.items.shape(id, shape, (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
          } else {
            console.log('Shape is Modified!');
            res.status(201).send('Succesfully Modified!');
          }
        });
      }
      if (size) {
        models.items.patch_size(id, size, (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
          } else {
            console.log('Size is Modified!');
            res.status(201).send('Succesfully Modified!');
          }
        });
      }
      if (weight) {
        models.items.patch_weight(id, weight, (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
          } else {
            console.log('Weight is Modified!');
            res.status(201).send('Succesfully Modified!');
          }
        });
      }
    },
    delete: (req, res) => {
      const id = req.params.id;

      models.items.delete(id, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        } else {
          console.log('Successfully Deleted!');
          res.status(410).send('Successfully Deleted! Content has gone!');
        }
      });
    },
  },
};
