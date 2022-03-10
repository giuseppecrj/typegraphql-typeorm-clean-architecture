import { ConnectionOptions } from "typeorm";
import path from "path";

export default {
  type: "postgres",
  host: "localhost",
  post: 5432,
  username: "postgres",
  password: "postgres",
  database: "typeorm-graphql-typescript",
  synchronize: true,
  entities: [path.join(__dirname, "application", "graphql", "**", "*.*")],
} as ConnectionOptions;
