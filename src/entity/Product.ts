import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    PLU: string;

    @Column()
    name: string;
}