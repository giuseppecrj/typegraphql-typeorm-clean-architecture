import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { AuthenticatedUser, RegisterInput } from "../../dto/user.dto";
import { InvitationStatus } from "../../entities/user/invitation-status.enum";
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
    return {
      user: {
        id: "1",
        name: "Hello",
        email: "",
        invitationStatus: InvitationStatus.NONE,
      },
      token: "lorem",
    };
  }
}
