import { buildSchema } from "type-graphql";
import { UserResolver } from "./user/user.resolver";
import { Container } from "typeorm-typedi-extensions";

export default async function createSchema() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    container: Container,
  });
  return schema;
}
