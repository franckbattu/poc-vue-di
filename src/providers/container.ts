import { Container } from "inversify";
import { ConverterService } from "../dtos";
import { ApiService } from "./services/api.service";
import { UserConverterService } from "./services/user-converter.service";
import { TYPES } from "./types";
import { UserFacade } from "./facades/user.facade";
import { UserService } from "./services/user.service";

const container = new Container();
container.bind<UserFacade>(TYPES.UserFacade).to(UserService);
container.bind<ApiService>(TYPES.ApiService).to(ApiService);
container.bind<ConverterService>(TYPES.ConverterService).to(ConverterService);
container.bind<UserConverterService>(TYPES.UserConverterService).to(UserConverterService);

export { container };