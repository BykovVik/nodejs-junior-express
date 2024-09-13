import { AppDataSource } from '../ormconfig';
import { Stock } from '../entity/Stock';
import { Product } from '../entity/Product';

export class StockService {
    private stockRepo = AppDataSource.getRepository(Stock);
    private productRepository = AppDataSource.getRepository(Product)



    async createStock(productPLU: string, shopId: number, quantityOnShelf: number, quantityInOrder: number): Promise<Stock> {
        const product = await this.productRepository.findOne({ where: { PLU: productPLU } });

        if (product) {
            const stock = this.stockRepo.create({product, shopId, quantityOnShelf, quantityInOrder });
            return this.stockRepo.save(stock);
        } else {
            throw new Error('Stock not found')
        }
    }

    async increaseStock(id: number, amount: number): Promise<Stock> {
        const stock = await this.stockRepo.findOne({
            where: { id: id }
        });
        if (stock) {
            stock.quantityOnShelf += amount;
            return this.stockRepo.save(stock);
        }
        throw new Error('Stock not found');
    }

    async decreaseStock(id: number, amount: number): Promise<Stock> {
        const stock = await this.stockRepo.findOne({
            where: { id: id }
        });
        if (stock) {
            stock.quantityOnShelf -= amount;
            return this.stockRepo.save(stock);
        }
        throw new Error('Stock not found');
    }

    async getStocks(filters: any): Promise<Stock[]> {
        return this.stockRepo.find({ where: filters });
    }
}