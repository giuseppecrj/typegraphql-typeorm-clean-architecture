import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "http";
import { createConnection, useContainer } from "typeorm";
import ormconfig from "./ormconfig";
import apolloConfig from "./infrastructure";
import { Container } from "typeorm-typedi-extensions";
import { sampleWebhook } from "./controllers/sample/sample.webhook";
import { sampleMiddleware } from "./services/middleware/sample.middleware";

async function bootstrap() {
  useContainer(Container);

  await createConnection(ormconfig);

  const app = express();
  app.use("/webhooks/sample", sampleMiddleware, sampleWebhook);

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
