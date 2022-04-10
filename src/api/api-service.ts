import { appSettings } from "./app-settings";
import { urlService } from "./url-service";

class ApiService {
  private baseUrl: string;
  private headers: { [key: string]: string };

  constructor(baseUrl: string, headers: { [key: string]: string } = {}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  get(url: string, query: { [key: string]: any } = {}): Promise<any> {
    const fetchParams: RequestInit = { method: "GET" };
    const requestUrl = urlService.build(url, query);

    return this.fetchComplete(requestUrl, fetchParams);
  }

  private fetchComplete(url: string, params?: RequestInit) {
    const requestUrl = `${this.baseUrl}${url}`;

    const parameters: RequestInit = {
      ...params,
      headers: {
        ...params?.headers,
        ...this.headers,
      },
    };
    return this.fetch(requestUrl, parameters);
  }

  private fetch(url: string, params?: RequestInit) {
    return fetch(url, params)
      .then(async (response) => {
        if (!response.ok) {
          throw await response.json();
        }
        if (response.status === 204) {
          return;
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  }
}

export default new ApiService(appSettings.apiUrl, {
  "Content-Type": `application/json`,
});
