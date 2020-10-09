import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  hashtags: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
