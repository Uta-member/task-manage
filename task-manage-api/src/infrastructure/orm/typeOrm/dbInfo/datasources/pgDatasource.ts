import { DataSource } from "typeorm";
import { dbEntityList } from "../entity/entities";
import { logger } from "@/toolkit/logger/logging";
import { config } from "dotenv";

config();

const pgDatasource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number.parseInt(process.env.DB_PORT ?? "5432"),
  logging: true,
  database: process.env.DB_NAME,
  entities: dbEntityList,
});

pgDatasource
  .initialize()
  .then(async (_ds) => {
    console.log("datasource is initialized!!");
    logger.info("データベースに接続しました");
  })
  .catch((error) => {
    console.log(error);
    logger.error(`データベースの接続に失敗しました`, error);
  });

export { pgDatasource };
