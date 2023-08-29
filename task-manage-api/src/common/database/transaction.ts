import { PoolClient, QueryResult, QueryResultRow } from "pg";
import pool from "./dbConnect";
import { DBParamsType } from "@/types/dbTypes/commonType";

/**
 * DBへの操作を実行する関数
 * @param params
 * @returns
 */
export const execQuery = async <T extends QueryResultRow>(params: {
  query: string;
  DBParams?: DBParamsType;
}): Promise<QueryResult<T>> => {
  const { query, DBParams } = params;
  let connection: null | PoolClient = null;
  try {
    connection = await pool.connect();
    await connection.query("BEGIN");
    const result = await connection.query(query, DBParams);
    await connection.query("COMMIT");
    return result;
  } catch (err) {
    if (connection) {
      connection.query("ROLLBACK");
    }
    throw err;
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

/**
 * DBのトランザクションを実行する関数
 * @param requests
 * @returns
 */
export const execTransaction = async (
  requests: { query: string; DBParams?: DBParamsType }[],
  afterFunctions?: { func: (params: any) => Promise<any>; params: any }[]
): Promise<QueryResult[]> => {
  let connection: null | PoolClient = null;
  try {
    connection = await pool.connect();
    await connection.query("BEGIN");

    const results: QueryResult[] = [];

    for (let index = 0; index < requests.length; index++) {
      const request = requests[index];
      const result = await connection.query(request.query, request.DBParams);
      results.push(result);
    }
    if (afterFunctions !== undefined) {
      for (const afterFunction of afterFunctions) {
        await afterFunction.func(afterFunction.params);
      }
    }

    await connection.query("COMMIT");
    return results;
  } catch (err) {
    if (connection) {
      await connection.query("ROLLBACK");
    }
    throw err;
  } finally {
    if (connection) {
      await connection.release();
    }
  }
};
