const mysqlx = require('@mysql/xdevapi');

const connection = () => {
  return mysqlx.getSession({
    user: 'root',
    password: '',
    host: 'localhost',
    port: 33060,
    schema: 'cep_lookup',
  })
  .then((session) => {
    return session.getSchema('cep_lookup');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
};

module.exports = connection;
