import { ApolloServerExpressConfig } from "apollo-server-express";
import { handleGraphQLContext } from "./auth";
import createSchema from "./graphql";

export default async function apolloConfig(): Promise<ApolloServerExpressConfig> {
  return {
    schema: await createSchema(),
    context: handleGraphQLContext,
  };
}
