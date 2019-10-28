const getParam = key => {
  const params = window.location.href.split('?')[1]

  if (params === void 0) return void 0

  const paramList = params.split('&').map(param => param.split('='))
  const param = paramList.find(param => param[0] === key)

  if (param === void 0) return void 0

  return param[1]
}



