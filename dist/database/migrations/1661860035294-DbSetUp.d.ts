import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class DbSetUp1661860035294 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
