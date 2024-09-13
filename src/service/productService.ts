import { AppDataSource } from '../ormconfig';
import { Product } from '../entity/Product';

export class ProductService {
  private productRepo = AppDataSource.getRepository(Product);

  async createProduct(PLU: string, name: string): Promise<Product> {
    const product = this.productRepo.create({ PLU, name });
    return this.productRepo.save(product);
  }

  async getProducts(filters: any): Promise<Product[]> {
    return this.productRepo.find({ where: filters });
  }
}