import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "http";
import { createConnection, useContainer } from "typeorm";
import ormconfig from "./ormconfig";
import apolloConfig from "./application";
import { Container } from "typeorm-typedi-extensions";

async function bootstrap() {
  useContainer(Container);

  await createConnection(ormconfig);

  const app = express();

  const apollo = new ApolloServer(await apolloConfig());
  await apollo.start();
  apollo.applyMiddleware({ app });

  const server = http.createServer(app);
  server.listen(3000);
  server.on("listening", () => {
    console.log("Server is listening on http://localhost:3000/graphql");
  });
}

bootstrap();
