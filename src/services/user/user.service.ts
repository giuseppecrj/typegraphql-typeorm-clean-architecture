import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { User } from "../../domain/user/user.domain";
import { AuthenticatedUser, RegisterInput } from "../../dto/user.dto";
import { UserRepository } from "../../persistence/user.repository";

@Service()
export class UserService {
  constructor(
    @InjectRepository() private readonly userRepository: UserRepository
  ) {}

  public async read() {
    return this.userRepository.findOne();
  }

  public async create(input: RegisterInput): Promise<AuthenticatedUser> {
    console.log(input);
    return {
      id: "1",
      name: "Hello",
      email: "",
    };
  }
}
