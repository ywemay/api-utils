exports.reqPage = function(req, defaultPerPage = 25) {
  let { page, perPage } = req.query || { page: 1, perPage: defaultPerPage };
  perPage = parseInt(perPage || defaultPerPage);
  pageNr = parseInt(page || 1) -1;
  return {
    perPage,
    page,
    skip: perPage * pageNr,
    limit: perPage
  }
}

exports.reqSort = function(req, defaultSort = false) {
  let { sort } = req.query || { sort: false }
  if (!sort) return defaultSort;
  const rez = {};
  if (typeof sort === 'string' && sort.match(/[\w\.\_]+/)) { 
    rez[sort] = 1;
  }
  if (typeof sort === 'object') {
    return Object.keys(sort).reduce((acc, key) => {
      const dir = parseInt(sort[key])
      if (dir * dir === 1) acc[key] = dir;
      return acc;
    }, {});
  }
  return defaultSort;
}