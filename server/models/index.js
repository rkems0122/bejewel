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
      const queryString = `SELECT * FROM items WHERE id = ${id}`;
      db.query(queryString, (err, result) => {
        callback(err, result);
      });
    },
    get_all: (callback) => {
      const queryString = `SELECT * FROM items`;
      db.query(queryString, (err, result) => {
        callback(err, result);
      });
    },
    patch: (id, name, description, price, inventory, image, callback) => {
      // 상품 수정
      if (name) {
        const queryString = `UPDATE items SET name = ${name} WHERE id = ${id}`;
        db.query(queryString, (err, result) => {
          callback(err, result);
        });
      }
      if (description) {
        const queryString = `UPDATE items SET description = ${description} WHERE id = ${id}`;
        db.query(queryString, (err, result) => {
          callback(err, result);
        });
      }
      if (price) {
        const queryString = `UPDATE items SET price = ${price} WHERE id = ${id}`;
        db.query(queryString, (err, result) => {
          callback(err, result);
        });
      }
      if (inventory) {
        const queryString = `UPDATE items SET inventory = ${inventory} WHERE id = ${id}`;
        db.query(queryString, (err, result) => {
          callback(err, result);
        });
      }
      if (image) {
        const queryString = `UPDATE items SET image = ${image} WHERE id = ${id}`;
        db.query(queryString, (err, result) => {
          callback(err, result);
        });
      }
    },
    delete: (id, callback) => {
      // 상품 삭제
      const queryString = `DELETE FROM items WHERE id = ${id}`;
      db.query(queryString, (err, result) => {
        callback(err, result);
      });
    },
  },
};
