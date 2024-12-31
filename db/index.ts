// import { sql } from "@vercel/postgres";
// import { drizzle } from "drizzle-orm/vercel-postgres";
// import { drizzle } from 'drizzle-orm/postgres-js'
// import postgres from 'postgres'
import * as schema from "./schema";

// export const db = drizzle(sql, { schema });

// export type DB = typeof db;


// const connectionString = process.env.DATABASE_URL!

// // Disable prefetch as it is not supported for "Transaction" pool mode
// const client = postgres(connectionString, { prepare: false })
// export const db = drizzle(client);
// export type DB = typeof db;


// import { sql } from '@vercel/postgres';
// import { drizzle } from 'drizzle-orm/vercel-postgres';
// const connectionString = process.env.DATABASE_URL!
// export const db = drizzle(sql);
// export type DB = typeof db;


// src/db.ts
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
// import { config } from "dotenv";

// config({ path: ".env" }); // or .env.local

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });