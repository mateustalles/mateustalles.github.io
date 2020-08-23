const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/list-products', (req, res, next) => {
  const products = new ProductModel().getAll();

  console.log(products);
  if(products.length === 0) return res.status(404).send({ message: "nenhum produto foi encontrado", products })

  res.status(200).send(products);
});

router.get('/get-by-id/:id', (req, res, next) => {
  const product = new ProductModel().getById(req.params.id);

  if(product === undefined) return res.status(404).send({ message: "nenhum produto foi encontrado", product })

  res.status(200).send(product);
});

router.post('/add-product', (req, res) => {
  const { name, brand } = req.body;

  if(name === undefined || brand === undefined) return res.status(400).send({ message: `${name === undefined ? 'nome' : 'marca'} ausente no json`})


  const newProduct = new ProductModel(name, brand);
  newProduct.add();

  res.status(201).send(newProduct);
});

router.delete('/delete-product/:id', (req, res) => {
  const products = new ProductModel().delete(req.params.id);

  res.status(200).send(products);
});

router.put('/update-product/:id', (req, res) => {
  const { name, brand } = req.body;

  const products = new ProductModel(name, brand).addOrUpdate(req.params.id);

  res.status(200).send(products);
});

module.exports = router;
