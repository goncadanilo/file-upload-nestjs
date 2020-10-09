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
  image_url: string;

  @Column()
  hashtags: JSON;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
