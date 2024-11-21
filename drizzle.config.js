/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:4YnKNmhtdG7R@ep-crimson-cherry-a5sitqie.us-east-2.aws.neon.tech/AI-Mocker?sslmode=require',
    }
  };