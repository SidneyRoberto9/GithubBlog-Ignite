import axios from 'axios';

export const gitHubUserApi = axios.create({
  baseURL: 'https://api.github.com/users/',
})

export const issuesApi = axios.create({
  baseURL: 'https://api.github.com/search/issues',
})
