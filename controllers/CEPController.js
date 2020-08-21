const services = require('../services')

const getAddress = async (req, res, next) => {
  if (req.query.cep) {
    const getAddress = await services.consultaCEP.consultaCEP(req.query.cep);
    const { message, status, ...address } = getAddress;

    return res.status(status).send({ message, address });
  }
  next();
}

const getStats = async (req, res, next) => {
  if(req.query) {
    const getStats = await services.consultaCEP.consultaEstatistica(req.query)

    const { message, status, ...data } = getStats;

    return res.status(status).send({ message, ...data });
  }
}

module.exports = {
  getAddress,
  getStats,
}
