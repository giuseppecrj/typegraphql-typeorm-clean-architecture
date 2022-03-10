import { Query, Resolver } from "type-graphql";
import { UserService } from "../../../services/user/UserService";
import { User } from "./User";

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async user() {
    return this.userService.read();
  }
}
