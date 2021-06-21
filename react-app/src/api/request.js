import axios from 'axios'
let config = {
  baseURL: '/api',
  transformRequest: [
    function (data) {
      let ret = '';
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }
  ],
  transformResponse: [
    function (data) {
      return data
    }
  ],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  timeout: 10000,
  responseType: 'json'
};

export function get(url) {
  return new Promise((resolve, reject) => {
    axios.get(url, config).then((res) => {
      resolve(res.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params, config).then((res) => {
      resolve(res.data)
    }).catch((error) => {
      reject(error)
    })
  })
}