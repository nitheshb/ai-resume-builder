import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema/index.ts",
  // out: "./drizzle",
      // schema: './db/drizzle/schema.ts',
    out: './db/drizzle',
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
    ssl: true,

      //  database: process.env.POSTGRES_DATABASE,


      // host: process.env.POSTGRES_HOST,
      // port: 5432,

      // user: process.env.POSTGRES_USER,
      // password: process.env.POSTGRES_PASSWORD
  },
  schemaFilter: ['public'],
  verbose: true,
  strict: true,
});


// import { Config, defineConfig } from 'drizzle-kit';
// export default defineConfig({

//   // schema: './src/db/drizzle/schema.ts',

//     // schema: './db/schema/index.ts',
//     // out: './src/db',

//     schema: './db/drizzle/schema.ts',
//     out: './db/drizzle',
//     dialect: 'postgresql', 
  
//     dbCredentials: {
//       url: process.env.DATABASE_URL,
//       database: 'postgres',
//       // url: './src/db/schema',
//       host: "aws-0-ap-south-1.pooler.supabase.com",
//       port: 5432,
//       user:'postgres.cpllpamnrttipdywricq',
//       password: 'admin@123',
//       // database: "postgres",
//     },
//     schemaFilter: ['public'],
//     verbose: true,
//     strict: true,
//   })satisfies Config;;