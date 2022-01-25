import { inject, injectable } from "inversify";
import { User, UserFacade } from "../facades/user.facade";
import { TYPES } from "../types";
import { ApiService } from "./api.service";

@injectable()
export class UserService implements UserFacade {

  constructor(
    @inject(TYPES.ApiService) private readonly api: ApiService,
  ) {}

  public getUser(): Promise<User> {
    return this.api.get<User>("https://jsonplaceholder.typicode.com/users/1");
  }
}