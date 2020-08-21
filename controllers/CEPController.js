const services = require('../services')

const getAddress = async (req, res, next) => {
  if (req.query.cep) {
    const getAddress = await services.consultaCEP(req.query.cep);
    const { message, status, ...address } = getAddress;

    return res.status(status).send({ message, address });
  }
  next();
}

module.exports = {
  getAddress
}
