import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePostTable1602257007838 implements MigrationInterface {
  private table = new Table({
    name: 'posts',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'description',
        type: 'varchar',
        isNullable: false,
      },
      {
        name: 'image',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'hashtags',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
