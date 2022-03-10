import User from "../../domain/models/User";

export default interface UserRepository {
  findOne(): Promise<User>;
}
