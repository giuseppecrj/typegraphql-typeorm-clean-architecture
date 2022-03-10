import { User } from "../domain/user/user.domain";

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

export type PublicUser = Omit<User, "password">;

export interface AuthenticatedUser extends PublicUser {}
