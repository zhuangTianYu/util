const getUrlQuery = (url = window.location.href) => {
  if (url.indexOf('?') === -1) return {}
  const search = url.split('?')[1]
  return search.split('&').reduce((accumulator, item) => {
    const [key, value] = item.split('=')
    return { ...accumulator, ...{ [key]: value } }
  }, {})
}

// 引用了 getUrlQuery 方法
const jumpWithQuery = (targetOrigin, payloadQuery, replace = false) => {
  const query = { ...getUrlQuery(), ...payloadQuery }
  const queryString = Object.keys(query).map(key => `${key}=${query[key]}`).join('&')
  const targetUrl = `${targetOrigin}?${queryString}`
  replace === true
    ? window.location.replace(targetUrl)
    : window.location.href = targetUrl
}







