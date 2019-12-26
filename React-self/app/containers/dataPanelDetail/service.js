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

export function delListData(params) {
    let url = '/admin/calculate/delLifeData'
    return new Promise((resolve, reject) => {
        post(url, params).then((res) => {
          resolve(res)
        }).catch((data) => {
            reject(data)
        })
    })
}
