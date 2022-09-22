const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// Main function, GET request lists all theaters with movies added
async function list(req, res, next) {
  res.json({ data: await service.list() });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
};
