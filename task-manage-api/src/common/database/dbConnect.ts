import { Pool, PoolConfig } from "pg";

//#region Types
type DBConfig = {
  user: string;
  password: string;
  address: string;
  port: string;
  dbName: string;
};
//#endregion

const dbConfig: DBConfig = {
  user: process.env.DB_USER ?? "",
  password: process.env.DB_PASSWORD ?? "",
  address: process.env.DB_HOST_NAME ?? "",
  port: process.env.DB_PORT ?? "",
  dbName: process.env.DB_NAME ?? "",
};

/**
 * DB接続先情報
 */
const poolConfig: PoolConfig = {
  connectionString: `postgres://${dbConfig.user}:${dbConfig.password}@${dbConfig.address}:${dbConfig.port}/${dbConfig.dbName}`,
  max: 5,
};

/**
 * DBに接続するためオブジェクト
 */
const pool = new Pool(poolConfig);

export default pool;
