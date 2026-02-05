import axios from "axios";

class Api {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL || "/api";
  }

  async get(url) {
    return axios.get(`${this.baseUrl}${url}`);
  }

  async patch(url, params) {
    return axios.patch(`${this.baseUrl}${url}`, params);
  }

  async post(url, params) {
    return axios.get(`${this.baseUrl}${url}`, params);
  }

  async delete(url) {
    return axios.delete(`${this.baseUrl}${url}`);
  }
}

export default new Api();
