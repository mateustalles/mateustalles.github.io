const connection = require("./connection");
const axios = require('axios');

const parseAddress = (
  address) => {
    // console.log(`endereço chegando em parseAddress: ${address}`)
    const [[ cep, uf, cidade, bairro, logradouro ]] = address;
    // console.log(`resultado da desconstrução de array: ${cep}${uf}${cidade}${bairro}${logradouro}`)
    return { message: `CEP: ${cep}
    UF: ${uf}
    Cidade: ${cidade}
    Bairro: ${bairro}
    Logradouro: ${logradouro}` }
  };

const addNewAddress = async (zipCode) => {
  if (zipCode === undefined) return null;

  const address = await axios({
    method: "GET",
    baseURL: `http://cep.la/${zipCode}`,
    headers: { "Accept": "application/json" }
  })
  .then(({ data }) => data);
  console.log(`ao criar novo endereço ${typeof address}`)
  if(address.length === 0) return { message: "Este CEP não foi encontrado."}

  const { cep, uf, cidade, bairro, logradouro } = address;
  await connection().then((db) =>
    db
      .getTable('cep')
      .insert(["cep", "uf", "cidade", "bairro", "logradouro"])
      .values(cep, uf, cidade, bairro, logradouro)
      .execute());

  return parseAddress([[cep, uf, cidade, bairro, logradouro]])
}


const getAddress = async (cep) =>
{
  if(!isValid(cep)) return { message: "Este CEP não é válido" }
  return connection()
    .then((db) =>
      db
        .getTable("cep")
        .select(["cep", "uf", "cidade", "bairro", "logradouro"])
        .where('cep = :cep')
        .bind('cep', cep)
        .execute()
    )
    .then((results) => results.fetchAll())
    .then((address) => {
      console.log(`registro do banco: ${address}, tamanho ${address.length}`)
      return address.length !== 0
      ? parseAddress(address)
      : addNewAddress(cep)
    }
)};

const isValid = (cep) => {
  if (cep.match(/[0-9]{5}\-[0-9]{3}/g)) return cep.replace('-', '');
  if (cep.match(/[0-9]{8}/g)) return cep;
  return false;
};


module.exports = {
  getAddress,
  addNewAddress
};
