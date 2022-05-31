const logRequest = (req, _res, next) => {
  const log = [
    req.path,
    req.method,
    JSON.stringify(req.body),
    //JSON.stringify(req.headers)
  ]
  console.log(log.filter(d => d).join('\t'))
  next()
}

export default {
  logRequest
}