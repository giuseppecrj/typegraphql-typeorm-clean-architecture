import { Field, InputType } from "type-graphql";
import { RegisterInput as IRegisterInput } from "../../../dto/user.dto";

@InputType()
export class RegisterInput implements IRegisterInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
