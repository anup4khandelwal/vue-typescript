import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/anup4khandelwal/technology',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTechnologys() {
    return apiClient.get('/technology')
  },
  getTechnology(id: any) {
    return apiClient.get('/technology/' + id)
  }
}
