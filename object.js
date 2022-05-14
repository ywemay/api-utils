exports.keyFilter = (raw, allowed) => {
  allowed = (typeof allowed === 'string') ? allowed.split(' ') : allowed;
  return Object.keys(raw)
  .filter(key => allowed.includes(key))
  .reduce((obj, key) => {
    obj[key] = raw[key];
    return obj;
  }, {})
}
