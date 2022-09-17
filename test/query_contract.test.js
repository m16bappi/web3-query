const Web3 = require("web3");
const QueryContract = artifacts.require("QueryContract");
const address = require("./mock/mock_address");
const web3 = new Web3();

contract("QueryContract", () => {
  it("simple test", async () => {
    const token = await QueryContract.deployed();
    const res = await token.getEtherBalances.call(address);
    const { _address, _balance } = res[1];
    console.log(_address, web3.utils.fromWei(_balance, "ether"));
  });
});
