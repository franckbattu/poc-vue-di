import { Container } from "inversify";
import { ApiService } from "./services/api.service";
import { TYPES } from "./types";
import { UserFacade } from "./facades/user.facade";
import { UserService } from "./services/user.service";

const container = new Container();
container.bind<UserFacade>(TYPES.UserFacade).to(UserService);
container.bind<ApiService>(TYPES.ApiService).to(ApiService);

export { container };