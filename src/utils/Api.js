import { API_CONFIG } from "./utils";

class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  getCats(page) {
    return fetch(`${this._url}/v1/images/search?limit=15&page=${page}`, {
      method: "GET",
      headers: { ...this._headers },
    }).then((res) => this._getResponse(res));
  }

  _getResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }
}

const api = new Api({
  baseUrl: API_CONFIG.URL_API,
  headers: {
    "x-api-key": API_CONFIG.TOKEN,
  },
});

export default api;
