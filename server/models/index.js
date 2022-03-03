const db = require('../database');

module.exports = {
  items: {
    post: (
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
      callback
    ) => {
      // 상품 등록
      if (
        id &&
        name &&
        description &&
        price &&
        inventory &&
        image &&
        category &&
        material_base &&
        material_etc &&
        material_plated &&
        material_stone &&
        shape &&
        size &&
        weight
      ) {
        const queryString = `INSERT INTO items (id, name, description, price, inventory, image, 
          category, material_base, material_etc, material_plated, material_stone, shape, size, weight) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const params = [
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
        ];

        return db.query(queryString, params, (err, result) => {
          callback(err, result);
        });
      } else {
        console.log('All data is required!');
      }
    },
    get: (id, callback) => {
      const queryString = `SELECT id, name, description, price, inventory, image FROM items WHERE id = ?`;
      const params = [id];
      db.query(queryString, params, (err, result) => {
        callback(err, result);
      });
    },
    get_all: (callback) => {
      const queryString = `SELECT * FROM items`;
      db.query(queryString, (err, result) => {
        callback(err, result);
      });
    },
    get_detailed: (id, callback) => {
      const queryString = `SELECT category, material_base, material_etc, material_plated, material_stone, shape, size, weight FROM items WHERE id = ?`;
      const params = [id];
      db.query(queryString, params, (err, result) => {
        callback(err, result);
      });
    },
    put: (id, name, description, price, inventory, image, callback) => {
      const queryString = `UPDATE items SET name = ?,description = ?,price = ?,inventory = ?,image = ? WHERE id = ?`;
      const params = [name, description, price, inventory, image, id];
      db.query(queryString, params, (err, result) => {
        callback(err, result);
      });
    },
    put_detailed: (
      id,
      category,
      material_base,
      material_etc,
      material_plated,
      material_stone,
      shape,
      size,
      weight,
      callback
    ) => {
      const queryString = `UPDATE items SET category = ?, material_base= ?, material_etc = ?, material_plated = ?, material_stone = ?, shape = ?, size = ?, weight = ? WHERE id = ?`;
      const params = [
        category,
        material_base,
        material_etc,
        material_plated,
        material_stone,
        shape,
        size,
        weight,
        id,
      ];
      db.query(queryString, params, (err, result) => {
        callback(err, result);
      });
    },
    delete: (id, callback) => {
      const queryString = `DELETE FROM items WHERE id = ${id}`;
      db.query(queryString, (err, result) => {
        callback(err, result);
      });
    },
  },
};
