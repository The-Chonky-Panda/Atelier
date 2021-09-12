const path = require('path');
const express = require('express'); // npm installed

const { getProduct, getStyles } = require('./products'); // Atelier api call to get product/product styles data
const { getReviews, getReviewMeta } = require('./reviews');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

// middleware that helps the client pass CORS policy and request resources from server
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// other configuration...

// --Product Overview Widget-- GET handler that builds a response object from product and styles api data to send to client
app.get('/products', (req, res) => {
  let id = req.query.product_id || 47426; // --Product_id-- Unsure on route handling atm, so just using a single product for testing (id=47425)
  let response = {};
  getProduct(id, (data) => {
    response.product = data;
    getStyles(id, (data) => {
      response.styles = data;
      res.send(JSON.stringify(response))
    })
  })
})

app.get('/reviews', (req, res) => {
  const id = req.query.product_id || 47421;
  const response = {};
  getReviews(id)
    .then((data) => { response.reviews = data.data.results; })
    .then(() => getReviewMeta(id))
    .then((data) => { response.reviewMeta = data.data.results; })
    .then(() => {
      res.status(200).send(response);
    });
});

app.listen(3000);
