// require("@openzeppelin/test-helpers/configure")({
//   provider: web3.currentProvider,
//   environment: "truffle",
// });

const QueryContract = artifacts.require("QueryContract");

module.exports = async function (deployer) {
  await deployer.deploy(QueryContract);
};
