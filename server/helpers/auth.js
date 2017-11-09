const crypto = require('crypto')
const jwt = require('jsonwebtoken')

function randomKey() {
  var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var length = 8
  var result = '';

  for (var i = length; i > 0; --i)
    result += chars[Math.round(Math.random() * (chars.length - 1))];

  return result;
}

function hash(data, key) {
  const hash = crypto
    .createHmac('sha256', key)
    .update(data)
    .digest('hex');
  return hash;
}

function auth(req, res, next) {
  const token = req.headers.token;
  if (token) {
    next();
  } else {
    res.send('anda belum login');
  }
}

module.exports = {
  randomKey,
  hash,
  auth
};
