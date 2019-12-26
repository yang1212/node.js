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
