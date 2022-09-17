const QueryContract = artifacts.require("QueryContract");

module.exports = async function (deployer) {
  await deployer.deploy(QueryContract);
};
