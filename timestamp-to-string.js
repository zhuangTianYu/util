const timestampToString = ({ timestamp, format = 'yyyy-MM-dd' }) => {
  const complete = num => num < 10 ? `0${num}` : num
  const date = new Date(timestamp)
  const yyyy = date.getFullYear()
  const MM = complete(date.getMonth() + 1)
  const dd = complete(date.getDate())
  const hh = complete(date.getHours())
  const mm = complete(date.getMinutes())
  const ss = complete(date.getSeconds())
  return format
    .replace(/yyyy/g, yyyy)
    .replace(/MM/g, MM)
    .replace(/dd/g, dd)
    .replace(/hh/g, hh)
    .replace(/mm/g, mm)
    .replace(/ss/g, ss)
}

console.log(timestampToString({ timestamp: 100000 }))
console.log(timestampToString({ timestamp: 100000, format: 'yyyy年MM月dd日 hh时mm分ss秒' }))
