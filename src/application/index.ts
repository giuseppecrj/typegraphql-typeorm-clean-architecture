import { ApolloServerExpressConfig } from "apollo-server-express";
import createSchema from "./graphql";

export default async function apolloConfig(): Promise<ApolloServerExpressConfig> {
  return {
    schema: await createSchema(),
  };
}
