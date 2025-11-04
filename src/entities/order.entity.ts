import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { Restaurant } from './restaurant.entity';
import { Staff } from './staff.entity';
import { Customer } from './customer.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  date_order: Date;

  @Column()
  status: 'pending' | 'completed' | 'cancelled';

  @Column()
  total_amount: number;

  @ManyToOne(() => Restaurant)
  @JoinColumn({ name: 'restaurantId' })
  restaurant: Restaurant;

  @ManyToOne(() => Staff)
  @JoinColumn({ name: 'staffId' })
  staff: Staff;

  @ManyToMany(() => Customer)
  @JoinColumn({ name: 'customerId' })
  customer: Customer[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
