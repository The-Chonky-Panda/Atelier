const axios = require('axios');
require('dotenv').config();

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products';

// http://example.com/page?parameter=value&also=another
// routes: /products /products/:product_id /products/:product_id/styles
const apiKey = process.env.API_KEY;

const getProduct = (id, callback) => {
  axios.get(`${url}/${id}?`, {
    headers: { Authorization: apiKey },
  })
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getStyles = (id, callback) => {
  axios.get(`${url}/${id}/styles`, {
    headers: { Authorization: apiKey },
  })
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getProduct,
  getStyles,
};
