import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { AuthenticatedUser, RegisterInput } from "../../dto/user.dto";
import { User } from "../../entities/user/user.entity";
import { UserService } from "../../services/user/user.service";

@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async user() {
    return this.userService.read();
  }

  @Mutation(() => AuthenticatedUser)
  async register(@Arg("input") input: RegisterInput) {
    return this.userService.create(input);
  }
}
