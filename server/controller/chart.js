export function handleChartData(params, res) {
  const obj = {}
  let result = []
  params = params.split(0, 4) + '-' + params.split(5, 7)
  res = res.filter((item) => { return item.date === params })
  for (const i in res) {
    if (!obj[res[i].type]) {
      obj[res[i].type] = 1
      result.push(res[i])
    } else {
      result = result.map((item) => {
        if (item.type === res[i].type) {
          item.price += res[i].price
        }
        return item
      })
    }
  }
  return result
}