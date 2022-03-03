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
    put: (req, res) => {
      const id = req.params.id;
      const { name, description, price, inventory, image } = req.body;
      console.log('id값', id, '입력값', req.body);
      if (!name && !description && !price && !inventory && !image) {
        console.log('No Input!');
        return res.status(400).send('Bad Request!');
      }
      models.items.put(
        id,
        name,
        description,
        price,
        inventory,
        image,
        (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
          } else {
            console.log('Category is Modified!');
            res.status(201).send('Succesfully Modified!');
          }
        }
      );
    },
    put_detailed: (req, res) => {
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
      models.items.put_detailed(
        id,
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
            res.status(500).send('Internal Server Error');
          } else {
            console.log('Details are Modified!');
            res.status(201).send('Succesfully Modified!');
          }
        }
      );
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
