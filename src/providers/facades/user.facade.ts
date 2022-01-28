import { User } from "../../models";

export interface UserFacade {
  getUser(userId: number): Promise<User>;
}