const connection = require("./connection");
const { ObjectId } = require('mongodb');
const axios = require('axios');

const parseAddress = (address) => {
    const { cep, uf, cidade, bairro, logradouro } = address[0];

    return ({ message: `CEP: ${cep}
    UF: ${uf}
    Cidade: ${cidade}
    Bairro: ${bairro}
    Logradouro: ${logradouro}` })
  };


const addNewAddress = async (zipCode) => {
  console.log('passei aqui')
  if (zipCode === undefined) return null;

  const address = await axios({
    method: "GET",
    baseURL: `http://cep.la/${zipCode}`,
    headers: { "Accept": "application/json" }
  })
  .then(({ data }) => data);

  if(address.length === 0) return { message: "Este CEP não foi encontrado."}

  const { cep, uf, cidade, bairro, logradouro } = address;

  await connection().then((db) =>
    db
      .collection('ceps').insertOne({ cep, uf, cidade, bairro, logradouro }))

  return parseAddress([{ cep, uf, cidade, bairro, logradouro }]);
}



const getAddress = async (zipCode) =>
{
  if(!isValid(zipCode)) return { message: "Este CEP não é válido" }

  const cep = isValid(zipCode);

  const addressArray = await connection()
    .then((db) =>
      db
        .collection('ceps').find({ "cep": cep })
        .toArray());

  console.log(addressArray)

  if(addressArray.length > 0) return parseAddress(addressArray)
  return addNewAddress(cep)

};

const isValid = (cep) => {
  if (cep.match(/[0-9]{5}\-[0-9]{3}/g)) return cep.replace('-', '');
  if (cep.match(/[0-9]{8}/g)) return cep;
  return false;
};


module.exports = {
  getAddress,
  addNewAddress
};
