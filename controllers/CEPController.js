const CEP = require('../models/CEP');

const getAddress = async (req, res, next) => {
  if (req.query.cep) {
    const address = await CEP.getAddress(req.query.cep);
    console.log(address)
    return res.render('index', { address })
  }
  res.render('index', { address: null });
  next();
}

module.exports = {
  getAddress
}
