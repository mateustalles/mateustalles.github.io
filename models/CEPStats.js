const connection = require('./connection');

const setStats = async (data) => {
  const { UF, cidade } = data;

  const stateExists = await connection().then((db) => db
    .collection('cepStats').find({ UF }).toArray());

  // console.log(stateExists)

  if (stateExists.length > 0) {
    const cityExists = await connection().then((db) => db.collection('cepStats').find({ UF, 'cidades': { $elemMatch: { cidade, 'quantidade': { $gte: 1 } } } }).toArray());

    if (cityExists.length > 0) {
      console.log(cidade)
      return connection().then((db) => db.collection('cepStats').updateOne(
        { 'cidades.cidade': { $eq: `${cidade}` } },
        { $inc: { 'quantidade': 1, 'cidades.$.quantidade': 1 } }
      ));
    }

    return connection().then((db) => db.collection('cepStats').findOneAndUpdate(
      { UF },
      { $inc: { 'quantidade': 1 }, $push: { 'cidades': { cidade, 'quantidade': 1 } } }));
  }

  return connection().then((db) => db.collection('cepStats').insertOne({ UF, 'quantidade': 1, 'cidades': [{ cidade, 'quantidade': 1 }]}));
}

const getStats = async (stats) => {
  const { UF, cidade } = stats;

  const statesArray = async () => {
    if(UF) return connection().then((db) => db.collection('cepStats').find({ UF }).toArray());
    return connection().then((db) => db.collection('cepStats').aggregate([
      { $unwind: '$cidades'},
      { $match: { 'cidades.cidade': cidade}},
    ]).toArray());
  }

  console.log(await statesArray());

  return {
    data: await statesArray(),
    message: 'Query bem sucedida',
    status: 200,
  }
}

module.exports = {
  setStats,
  getStats,
}
