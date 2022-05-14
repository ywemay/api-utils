exports.reqPage = (req, docs_count = 0) => {
  const size = req.query.page_size ? parseInt(req.query.page_size) : 50;
  const nr = (req.query.pg ? parseInt(req.query.pg) : 1) - 1;
  return {
    size, nr: nr,
    skip: size * nr,
    limit: size,
    docs_count
  }
}

exports.reqPageBack = function (req) {
  return {
    size: req.query.page_size ? parseInt(req.query.page_size) : 50,
    nr: (req.query.pg ? parseInt(req.query.pg) : 1) - 1
  }
}
