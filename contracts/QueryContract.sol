// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract QueryContract {
    struct Result {
        address _address;
        bytes _balance;
    }

    function getEtherBalances(address[] calldata _address)
        public
        view
        returns (Result[] memory results)
    {
        uint256 length = _address.length;
        results = new Result[](length);
        for (uint256 i = 0; i < length; i++) {
            results[i] = Result(_address[i], abi.encode(_address[i].balance));
        }
    }
}
