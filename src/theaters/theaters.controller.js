// const service = require("./theaters.service");
// const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// async function list(req, res, next) {
//   res.json({ data: await service.list() });
// }

// module.exports = {
//   list: [asyncErrorBoundary(list)],
// };

async function list(req, res, next) {
  const { movieId } = req.params;
  res.json({ data: await service.list() });
}
