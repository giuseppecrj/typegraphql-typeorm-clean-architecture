import { InputType, Field, ObjectType, ID } from "type-graphql";
import { User } from "../entities/user/user.entity";

@InputType()
export class RegisterInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

export type PublicUser = Omit<User, "password">;

@ObjectType()
export class AuthenticatedUser {
  @Field(() => User)
  user: PublicUser;

  @Field()
  token: string;
}
