import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './ormconfig';
import { createProduct, getProducts } from './controller/productController';
import { createStock, increaseStock, decreaseStock, getStocks } from './controller/stockController';

const app = express();
app.use(express.json());

AppDataSource.initialize().then(() => {
  console.log('Database connected');

  app.post('/products', createProduct);
  app.get('/products', getProducts);

  app.post('/stocks', createStock);
  app.put('/stocks/:id/increase', increaseStock);
  app.put('/stocks/:id/decrease', decreaseStock);
  app.get('/stocks', getStocks);

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});