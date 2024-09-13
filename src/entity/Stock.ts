import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './Product';

@Entity()
export class Stock {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantityOnShelf: number;

    @Column()
    quantityInOrder: number;

    @Column()
    shopId: number;

    @ManyToOne(() => Product)
    @JoinColumn({ name: "PLU" })
    product: Product;
}