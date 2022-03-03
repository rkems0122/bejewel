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
    patch_name: (id, name, callback) => {
      const queryString = `UPDATE items SET name = ? WHERE id = ?`;
      const params = [name, id];
      db.query(queryString, params, (err, result) => {
        callback(err, result);
      });
    },
    patch_description: (id, description, callback) => {
      const queryString = `UPDATE items SET description = ? WHERE id = ?`;
      const params = [description, id];
      db.query(queryString, params, (err, result) => {
        callback(err, result);
      });
    },
    patch_price: (id, price, callback) => {
      const queryString = `UPDATE items SET price = ? WHERE id = ?`;
      const params = [price, id];
      db.query(queryString, params, (err, result) => {
        callback(err, result);
      });
    },
    patch_inventory: (id, inventory, callback) => {
      const queryString = `UPDATE items SET inventory = ? WHERE id = ?`;
      const params = [inventory, id];
      db.query(queryString, params, (err, result) => {
        callback(err, result);
      });
    },
    patch_image: (id, image, callback) => {
      const queryString = `UPDATE items SET image = ? WHERE id = ?`;
      const params = [image, id];
      db.query(queryString, params, (err, result) => {
        callback(err, result);
      });
    },
    patch_category: (id, category, callback) => {
      const queryString = `UPDATE items SET category = ? WHERE id = ?`;
      const params = [category, id];
      db.query(queryString, params, (err, result) => {
        callback(err, result);
      });
    },
    patch_material_base: (id, material_base, callback) => {
      const queryString = `UPDATE items SET material_base = ? WHERE id = ?`;
      const params = [material_base, id];
      db.query(queryString, params, (err, result) => {
        callback(err, result);
      });
    },
    patch_material_etc: (id, material_etc, callback) => {
      const queryString = `UPDATE items SET material_etc = ? WHERE id = ?`;
      const params = [material_etc, id];
      db.query(queryString, params, (err, result) => {
        callback(err, result);
      });
    },
    patch_material_plated: (id, material_plated, callback) => {
      const queryString = `UPDATE items SET material_plated = ? WHERE id = ?`;
      const params = [material_plated, id];
      db.query(queryString, params, (err, result) => {
        callback(err, result);
      });
    },
    patch_material_stone: (id, material_stone, callback) => {
      const queryString = `UPDATE items SET material_stone = ? WHERE id = ?`;
      const params = [material_stone, id];
      db.query(queryString, params, (err, result) => {
        callback(err, result);
      });
    },
    patch_shape: (id, shape, callback) => {
      const queryString = `UPDATE items SET shape = ? WHERE id = ?`;
      const params = [shape, id];
      db.query(queryString, params, (err, result) => {
        callback(err, result);
      });
    },
    patch_size: (id, size, callback) => {
      const queryString = `UPDATE items SET size = ? WHERE id = ?`;
      const params = [size, id];
      db.query(queryString, params, (err, result) => {
        callback(err, result);
      });
    },
    patch_weight: (id, weight, callback) => {
      const queryString = `UPDATE items SET weight = ? WHERE id = ?`;
      const params = [weight, id];
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
