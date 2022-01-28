import { inject, injectable } from "inversify";
import { Dto } from "../../dtos";
import { ConverterService } from "../../dtos/converter.service";
import { User } from "../../models";
import { UserFacade } from "../facades/user.facade";
import { TYPES } from "../types";
import { ApiService } from "./api.service";

@injectable()
export class UserService implements UserFacade {

  constructor(
    @inject(TYPES.ApiService) private readonly api: ApiService,
    @inject(TYPES.ConverterService) private readonly converter: ConverterService,
  ) {}

  public async getUser(userId: number): Promise<User> {
    const { data } = await this.api.get<Dto.User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return this.converter.convertOne(TYPES.UserConverterService, data);
  }
}