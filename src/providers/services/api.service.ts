import axios, { AxiosInstance } from 'axios';
import { injectable } from "inversify";

@injectable()
export class ApiService {

  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create();
  }

  public async get<T>(url: string) {
    const response = await this.client.get<T>(url);
    return response.data;
  }
}