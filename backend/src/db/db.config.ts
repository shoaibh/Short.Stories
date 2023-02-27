import { registerAs } from "@nestjs/config";
import { Entities } from "src/orm/entity/main";
import { Migrations } from "src/orm/migration/main";

export default registerAs("database", () => {
  return {
    type: "postgres",
    logging: true,
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    autoLoadEntities: true,
    synchronize: true,
    entities: Entities,
    migrations: Migrations,
    cli: {
      migrationsDir: "src/orm/migrations",
    },
  };
});
