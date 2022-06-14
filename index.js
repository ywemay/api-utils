const { keyFilter } = require('./object');
const { reqPage, reqSort } = require('./pagination');
const validators = require('./validators');

module.exports = {
    keyFilter,
    reqSort,
    reqPage,
    ...validators
}