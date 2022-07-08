const getCurrentDate = () => {
  const isoDate = new Date().toISOString()
  return isoDate.split('T')[0]
}

export default {
  getCurrentDate
}