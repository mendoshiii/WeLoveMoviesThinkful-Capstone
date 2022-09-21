function notFound(req, res, next) {
  next({ staus: 404, message: `Not found: ${req.originalUrl}` });
}

module.exports = notFound;
