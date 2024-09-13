import { Request, Response } from 'express';
import { ProductService } from '../service/productService';

const productService = new ProductService();

export const createProduct = async (req: Request, res: Response) => {
    const { PLU, name } = req.body;
    const product = await productService.createProduct(PLU, name);
    res.json(product);
};

export const getProducts = async (req: Request, res: Response) => {
    const filters = req.query;
    const products = await productService.getProducts(filters);
    res.json(products);
};