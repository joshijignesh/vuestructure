import User from './modules/user.js'
import axios from 'axios'

export const API_BASE = process.env.VUE_APP_API_BASE_URL

export default function Api (store) {
  return {
    baseUrl: API_BASE,
    token: null,
    $store: store,
    user: User(store),
  }
}


export const baseAxios = axios.create({
  // TODO: process.env.BASE_API_URL
  baseURL: API_BASE,
  timeout: 10000
});


export function config (store) {
  return {
    mode: 'no-cors',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Token ' + store.state.user.token
    }
  }
}
