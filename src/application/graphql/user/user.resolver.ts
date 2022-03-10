import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { AuthenticatedUser } from "../../../dto/user.dto";
import { UserService } from "../../../services/user/user.service";
import { RegisterInput } from "./register.input";
import { User } from "./user.entity";

@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async user() {
    return this.userService.read();
  }

  @Mutation(() => User)
  async register(
    @Arg("input") input: RegisterInput
  ): Promise<AuthenticatedUser> {
    return this.userService.create(input);
  }
}
