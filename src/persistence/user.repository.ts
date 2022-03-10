import { EntityRepository, Repository } from "typeorm";
import { User } from "../application/graphql/user/user.entity";
@EntityRepository(User)
export class UserRepository extends Repository<User> {}
