import { get, post } from "../../service/request";
export function getFlightDetail(params) {
    let url = '/admin/calculate/addLifeData'
    return new Promise((resolve, reject) => {
        post(url, params).then((res) => {
          resolve(res)
        }).catch((data) => {
            reject(data)
        })
    })
}


export function getEnumType(params) {
    let url = '/admin/calculate/getEnumType'
    return new Promise((resolve, reject) => {
        get(url).then((res) => {
          resolve(res)
        }).catch((data) => {
            reject(data)
        })
    })
}