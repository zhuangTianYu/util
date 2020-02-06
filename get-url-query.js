const getUrlQuery = (url = window.location.href) => {
  if (url.indexOf('?') === -1) return {}
  const search = url.split('?')[1]
  return search.split('&').reduce((accumulator, item) => {
    const [key, value] = item.split('=')
    return { ...accumulator, ...{ [key]: value } }
  }, {})
}



