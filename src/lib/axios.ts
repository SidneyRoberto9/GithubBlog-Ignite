import axios from "axios";

export const gitHubUserApi = axios.create({
  baseURL: 'https://api.github.com/users/',
})
