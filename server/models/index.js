const db = require('../database');

module.exports = {
  items: {
    post: (id, name, description, price, inventory, image, callback) => {
      // 상품 등록
      if (id && name && description && price && inventory && image) {
        const queryString = `INSERT INTO items (id, name, description, price, inventory, image) VALUES (?, ?, ?, ?, ?, ?)`;
        const params = [id, name, description, price, inventory, image];

        return db.query(queryString, params, (err, result) => {
          callback(err, result);
        });
      } else {
        console.log('All data is required!');
      }
    },
    get: (id, callback) => {
      const queryString = `SELECT * FROM items WHERE id = ?`;
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
    delete: (id, callback) => {
      const queryString = `DELETE FROM items WHERE id = ${id}`;
      db.query(queryString, (err, result) => {
        callback(err, result);
      });
    },
  },
};
