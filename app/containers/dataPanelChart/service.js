import { get, post } from "../../service/request";
export function getListData() {
    let url = '/admin/calculate/getLifeData'
    return new Promise((resolve, reject) => {
        get(url).then((res) => {
          resolve(res)
        }).catch((data) => {
            reject(data)
        })
    })
}

export function getTimeDataList(params) {
    console.log(params)
    let url = '/admin/calculate/getTimeDataList'
    return new Promise((resolve, reject) => {
        post(url, params).then((res) => {
          resolve(res)
        }).catch((data) => {
          reject(data)
        })
    })
}
