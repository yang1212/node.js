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
