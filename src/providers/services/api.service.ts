import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { injectable } from "inversify";

@injectable()
export class ApiService {

  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create();
    this.client.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  public async get<T>(url: string): Promise<AxiosResponse<T>> {
    return this.request(url, { method: 'GET' });
  }

  public async post<T>(url: string, config?: AxiosRequestConfig) {
    return this.request(url, {
      method: 'POST',
      ...config
    })
  }

  private request(url: string, config?: AxiosRequestConfig) {
    url = this.handleUrl(url);
    return this.client.request({
      url,
      ...config
    });
  }

  private handleSuccess(response: AxiosResponse): AxiosResponse {
    return response;
  }

  private handleError(error: AxiosError): AxiosError {
    return error;
  }

  private handleUrl(url: string): string {
    const pattern = /^((http|https):\/\/)/;
    if (pattern.test(url)) {
      return url;
    }
    if (!url.startsWith('/')) {
      url = `/${url}`;
    }
    return `${import.meta.env.VITE_API_BASE}${url}`;
  }
}
