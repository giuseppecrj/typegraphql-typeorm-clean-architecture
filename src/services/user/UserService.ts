import { Service } from "typedi";
import { UserRepository } from "../../persistence/UserRepository";

@Service()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async read() {
    return this.userRepository.findOne();
  }
}
