const db = require('../database');

module.exports = {
  items: {
    post: (
      id,
      name,
      description,
      price,
      discount,
      inventory,
      image,
      callback
    ) => {
      // 상품 등록
      if (
        id &&
        name &&
        description &&
        price &&
        discount &&
        inventory &&
        image
      ) {
        const queryString = `INSERT INTO items (id, name, description, price, discount, inventory, image) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const params = [
          id,
          name,
          description,
          price,
          discount,
          inventory,
          image,
        ];

        return db.query(queryString, params, (err, result) => {
          callback(err, result);
        });
      } else {
        console.log('All data is required!');
      }
    },
    get: (id, callback) => {
      if (!id) {
        // 아이디값을 지정해주지 않았다면 모든 상품 불러오기
        const queryString = `SELECT * FROM items`;

        db.query(queryString, (err, result) => {
          callback(err, result);
        });
      } else {
        // 아이디값을 지정해 두었다면 특정 상품만 불러오기
        const queryString = `SELECT * FROM items WHERE id = ${id}`;
        db.query(queryString, (err, result) => {
          callback(err, result);
        });
      }
    },
    patch: (
      id,
      name,
      description,
      price,
      discount,
      inventory,
      image,
      callback
    ) => {
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
      if (discount) {
        const queryString = `UPDATE items SET discount = ${discount} WHERE id = ${id}`;
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
