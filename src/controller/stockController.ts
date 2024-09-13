import { Request, Response } from 'express';
import { StockService } from '../service/stockService';

const stockService = new StockService();

export const createStock = async (req: Request, res: Response) => {
  const { productPLU, shopId, quantityOnShelf, quantityInOrder } = req.body;
  const stock = await stockService.createStock(productPLU, shopId, quantityOnShelf, quantityInOrder);
  res.json(stock);
};

export const increaseStock = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { amount } = req.body;

    if (!isNaN(Number(id)) && typeof amount === 'number') {
        const stock = await stockService.increaseStock(Number(id), Number(amount));
        res.json(stock);
    } else {
        res.statusCode = 422
    }
};

export const decreaseStock = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { amount } = req.body;
    const stock = await stockService.decreaseStock(Number(id), amount);
    res.json(stock);
};

export const getStocks = async (req: Request, res: Response) => {
    const filters = req.query;
    const stocks = await stockService.getStocks(filters);
    res.json(stocks);
};