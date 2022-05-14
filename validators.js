exports.isEmail = (email, { empty } = {}) => {
  if ( empty === true ) return email === '' || email === undefined;
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

exports.isLangKey = (key) => {
  const languages = ['en', 'zh'];
  return languages.includes(key);
}

exports.isPassword = (password, { empty } = {}) => {
  if ( empty === true && (password === '' || password === undefined)) return true;
  var re =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  // var re =  /^[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  return re.test(String(password));
}

exports.isUserName = (name) => {
  return (
    typeof name === 'string'
    && name.match(/^(\w+){3,25}$/)
  );
}

exports.isObjectId = (id) => {
  return id.toString().match(/^[A-z0-9]+$/);
}
