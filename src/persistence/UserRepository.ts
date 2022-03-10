import { Service } from "typedi";
import { getRepository, Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { User } from "../application/graphql/user/User";
import UserRepositoryInterface from "../services/user/UserRepository";

@Service()
export class UserRepository implements UserRepositoryInterface {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  async findOne() {
    return this.userRepository.findOne();
  }
}
