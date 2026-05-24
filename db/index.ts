import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

/**
 * Singleton Postgres client.
 *
 * Set `DATABASE_URL` to the Supabase connection string (pooler URL, port 6543, mode=transaction).
 * Code that calls `db` must handle the case where the URL is not set yet —
 * use `isDbConfigured()` before any query.
 */

declare global {
  var __ahmadDb: ReturnType<typeof drizzle<typeof schema>> | undefined;
  var __ahmadSql: ReturnType<typeof postgres> | undefined;
}

export function isDbConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

function makeClient() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. The database isn't configured yet.",
    );
  }
  const client = postgres(url, { prepare: false });
  return { client, db: drizzle(client, { schema }) };
}

function getDb() {
  if (!global.__ahmadDb) {
    const { client, db } = makeClient();
    global.__ahmadSql = client;
    global.__ahmadDb = db;
  }
  return global.__ahmadDb;
}

export const db = new Proxy({} as ReturnType<typeof drizzle<typeof schema>>, {
  get(_target, prop) {
    const instance = getDb();
    const value = Reflect.get(instance, prop);
    return typeof value === "function" ? value.bind(instance) : value;
  },
});

export * from "./schema";
