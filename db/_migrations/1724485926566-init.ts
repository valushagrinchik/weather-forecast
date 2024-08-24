import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1724485926566 implements MigrationInterface {
    name = 'Init1724485926566'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "weather" ("id" SERIAL NOT NULL, "city" character varying NOT NULL, "temperature" character varying NOT NULL, CONSTRAINT "PK_af9937471586e6798a5e4865f2d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "weather"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
