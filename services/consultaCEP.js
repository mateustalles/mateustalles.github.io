const models = require('../models');


const consultaCEP = async (cep) => {
  const getAddress = await models.CEP.getAddress(cep);
  const { message, status, ...address } = getAddress;
  if(status === 200) {
    models.CEPStats.setStats(address);
  }

  return getAddress;
};

module.exports = consultaCEP;
