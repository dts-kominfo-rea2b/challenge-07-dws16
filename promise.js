const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (expression) => {
  const result = await Promise.all([promiseTheaterIXX(), promiseTheaterVGC()]).then(res => res[0].concat(res[1]));
  return result.filter(item => item.hasil === expression).length;
}

module.exports = {
  promiseOutput,
};
