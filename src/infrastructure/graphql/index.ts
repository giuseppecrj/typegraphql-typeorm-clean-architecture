import { buildSchema, registerEnumType } from "type-graphql";
import { Container } from "typeorm-typedi-extensions";
import path from "path";
import { UserResolver } from "../../controllers/user/user.resolver";
import { InvitationStatus } from "../../entities/user/invitation-status.enum";

export default async function createSchema() {
  registerEnumType(InvitationStatus, {
    name: "InvitationStatus",
  });

  const schema = await buildSchema({
    resolvers: [UserResolver],
    container: Container,
    emitSchemaFile: path.resolve(
      __dirname,
      "..",
      "..",
      "__typedefs",
      "schema.gql"
    ),
  });
  return schema;
}
