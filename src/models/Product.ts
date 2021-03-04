import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('products')
export class Product {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  quantity: string;

  @Column()
  price: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}