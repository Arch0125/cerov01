//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract DaoFactory{
    struct DaoDetail{
        address owner;
        string name;
        string description;
        uint256 totalMembers;
        uint256 vaultBalance;
    }

    event DaoCreated(address indexed owner, string name, string description, uint256 totalMembers, uint256 vaultBalance);

    mapping(address => DaoDetail) public daos;

    function createDao(string memory name, string memory description, uint256 totalMembers, uint256 vaultBalance) public {
        require(bytes(name).length > 0, "Name must be provided");
        require(bytes(description).length > 0, "Description must be provided");
        require(totalMembers > 0, "Total members must be greater than 0");
        require(vaultBalance > 0, "Vault balance must be greater than 0");
        require(daos[msg.sender].owner == address(0), "Dao already exists");

        daos[msg.sender] = DaoDetail(msg.sender, name, description, totalMembers, vaultBalance);

        emit DaoCreated(msg.sender, name, description, totalMembers, vaultBalance);
    }

    function getDao(address owner) public view returns (DaoDetail memory){
        return daos[owner];
    }

    function updateDao(string memory name, string memory description, uint256 totalMembers, uint256 vaultBalance) public {
        require(bytes(name).length > 0, "Name must be provided");
        require(bytes(description).length > 0, "Description must be provided");
        require(totalMembers > 0, "Total members must be greater than 0");
        require(vaultBalance > 0, "Vault balance must be greater than 0");
        require(daos[msg.sender].owner != address(0), "Dao does not exist");

        daos[msg.sender].name = name;
        daos[msg.sender].description = description;
        daos[msg.sender].totalMembers = totalMembers;
        daos[msg.sender].vaultBalance = vaultBalance;
    }
}