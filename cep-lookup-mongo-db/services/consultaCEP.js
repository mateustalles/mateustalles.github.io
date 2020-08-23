const models = require('../models');


const consultaCEP = async (cep) => {
  const getAddress = await models.CEP.getAddress(cep);
  const { message, status, ...address } = getAddress;
  if(status === 200) {
    models.CEPStats.setStats(address);
  }

  return getAddress;
};

const consultaEstatistica = async (stats) => {
  console.log(stats)
  if(stats) {
    const getStats = await models.CEPStats.getStats(stats);
    return getStats;
  }

  return { message: 'Query inválida', status: 400 };
}

module.exports = {
  consultaCEP,
  consultaEstatistica,
};
