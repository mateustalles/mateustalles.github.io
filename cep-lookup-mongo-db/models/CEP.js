const connection = require("./connection");

const axios = require('axios');

const parseAddress = (address) => {

    const { cep, uf, cidade, bairro, logradouro } = address;

    return {
      message: "CEP encontrado",
      status: 200,
      CEP: cep,
      UF: uf,
      cidade: cidade,
      bairro: bairro,
      logradouro: logradouro,
    }
  };


const fetchAddressData = async (zipCode) => {
  if (zipCode === undefined) return null;

  const address = await axios({
    method: "GET",
    baseURL: `http://cep.la/${zipCode}`,
    headers: { "Accept": "application/json" }
  })
  .then(({ data }) => data);

  return address;
}



const getAddress = async (zipCode) =>
{
  if(!isValid(zipCode)) return { message: "Este CEP não é válido", status: 400 }

  const cep = isValid(zipCode);

  const addressData = await fetchAddressData(cep);

  if(addressData.length === 0) return { message: "Este CEP não foi encontrado.", status: 404}

  const { uf, cidade, bairro, logradouro } = addressData;


  const addressArray = await connection()
    .then((db) =>
      db
        .collection('ceps').find({ "cep": cep })
        .toArray());

  if(addressArray.length > 0) return parseAddress(addressData)

  await connection().then((db) => db
    .collection('ceps').insertOne({ cep, uf, cidade, bairro, logradouro }));

  return parseAddress(addressData);
};



const isValid = (cep) => {
  if (cep.match(/^[0-9]{5}\-[0-9]{3}$/g)) return cep.replace('-', '');
  if (cep.match(/^[0-9]{8}$/g)) return cep;
  return false;
};


module.exports = {
  getAddress,
};
