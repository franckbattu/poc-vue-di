import { injectable } from "inversify";
import { container } from "../providers";

export interface Converter<S, T> {
  convert(source: S): T;
}

@injectable()
export class ConverterService {

  convertOne<S, T>(
    injectionToken: symbol,
    source: S
  ) {
    const service = container.get(injectionToken) as Converter<S, T>;
    return service.convert(source);
  }
}