import { injectable } from "inversify";
import { Dto, Converter } from "../../dtos";
import { User } from "../../models";

@injectable()
export class UserConverterService implements Converter<Dto.User, User> {

  convert(source: Dto.User): User {
    const target = { ...source } as unknown as User;
    target.description = `My name is ${source.name} and I work at ${source.company?.name}`;
    return target;
  }
}