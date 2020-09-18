const express = require('express')
const faker = require('faker')
const cors = require('cors')
const repeat = require('ramda/src/repeat');

const app = express()
const port = 3000

app.use(cors())

const products = () => {
  const data = [];

  for (let index = 0; index < 30; index++) {
    const id = faker.random.uuid();
    const name = faker.commerce.productName();
    const image = faker.image.image();
    const product = faker.commerce.product();
    const description = faker.commerce.productDescription();
    
    data.push({
      id,
      name,
      image,
      product,
      description,
    })
  }

  return data;
}

app.get('/api/products', (req, res) => {
  res.json({
    products: products(),
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})