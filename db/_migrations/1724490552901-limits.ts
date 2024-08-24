import { MigrationInterface, QueryRunner } from "typeorm";

export class Limits1724490552901 implements MigrationInterface {
    name = 'Limits1724490552901'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."limit_type_enum" AS ENUM('weather')`);
        await queryRunner.query(`CREATE TABLE "limit" ("id" SERIAL NOT NULL, "type" "public"."limit_type_enum" NOT NULL DEFAULT 'weather', "limit" integer NOT NULL, CONSTRAINT "PK_6e82b66197d877e780e19c0aadc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_limit" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "limitId" integer NOT NULL, "count" integer NOT NULL, CONSTRAINT "PK_ce413e985a5ff36a5a859c9895b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_limit" ADD CONSTRAINT "FK_f9cb680df993088f4b1eb1a630a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_limit" DROP CONSTRAINT "FK_f9cb680df993088f4b1eb1a630a"`);
        await queryRunner.query(`DROP TABLE "user_limit"`);
        await queryRunner.query(`DROP TABLE "limit"`);
        await queryRunner.query(`DROP TYPE "public"."limit_type_enum"`);
    }

}
