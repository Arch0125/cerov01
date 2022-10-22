//SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;

contract StreamFactory{

    IERC20 public token;

    struct Stream{
        address sender;
        address receiver;
        uint256 amount;
        uint256 startTime;
        uint256 stopTime;
        uint256 interval;
        uint256 remainingBalance;
        bool isEntity;
    }

    struct LoanVault{
        address tokenAddress;
        uint256 totalBalance;
    }
    
    event StreamCreated(address indexed sender, address indexed receiver, uint256 amount, uint256 startTime, uint256 stopTime, uint256 interval);

    mapping(address => mapping(address => Stream)) public streams;
    mapping(address => LoanVault) public loanVaults;
    mapping(address => uint256) public shares;

    function createStream(address receiver, uint256 amount, uint256 startTime, uint256 stopTime, uint256 interval, address tokenAddress) public {
        require(startTime < stopTime, "Start time must be before stop time");
        require(interval > 0, "Interval must be greater than 0");
        require(amount > 0, "Amount must be greater than 0");
        require(receiver != msg.sender, "Sender and receiver must be different");
        require(streams[msg.sender][receiver].isEntity == false, "Stream already exists");

        token = IERC20(tokenAddress);

        streams[msg.sender][receiver] = Stream(msg.sender, receiver, amount, startTime, stopTime, interval, amount, true);
        token.transferFrom(msg.sender, address(this), amount);

        emit StreamCreated(msg.sender, receiver, amount, startTime, stopTime, interval);
    }

    function getStream(address sender, address receiver) public view returns (Stream memory){
        return streams[sender][receiver];
    }

    function withdrawFromStream(address sender, address receiver) public {
        Stream memory stream = streams[sender][receiver];
        require(stream.isEntity == true, "Stream does not exist");
        require(stream.remainingBalance > 0, "Stream is empty");
        require(stream.receiver == msg.sender, "Only receiver can withdraw from stream");

        uint256 elapsedTime = block.timestamp - stream.startTime;
        uint256 totalIntervalCount = (stream.stopTime - stream.startTime) / stream.interval;
        uint256 withdrawnIntervalCount = elapsedTime / stream.interval;

        uint256 amountPerInterval = stream.amount / totalIntervalCount;

        if(withdrawnIntervalCount > totalIntervalCount){
            uint256 amountToWithdraw = amountPerInterval * totalIntervalCount;
            stream.remainingBalance -= amountToWithdraw;
            streams[sender][receiver] = stream;
            token.transferFrom(address(this),msg.sender,amountToWithdraw);
        }else{
            uint256 amountToWithdraw = amountPerInterval * withdrawnIntervalCount;
            stream.remainingBalance -= amountToWithdraw;
            streams[sender][receiver] = stream;
            token.transfer(address(this), amountToWithdraw);
            token.transferFrom(address(this),msg.sender,amountToWithdraw);
        }

        //require(amountToWithdraw <= stream.remainingBalance, "Stream is empty");

    }

    function cancelStream(address sender, address receiver) public {
        Stream memory stream = streams[sender][receiver];
        require(stream.isEntity == true, "Stream does not exist");
        require(stream.sender == msg.sender, "Only sender can cancel stream");

        streams[sender][receiver].isEntity = false;
        payable(stream.sender).transfer(stream.remainingBalance);
    }


    function forwardFunds(address sender, address receiver, uint256 amount) public {
        require(streams[sender][receiver].isEntity == true, "Stream does not exist");
        require(streams[sender][receiver].remainingBalance >= amount, "Stream does not have enough funds");
        require(streams[sender][receiver].sender == msg.sender, "Only sender can forward funds");

        streams[sender][receiver].remainingBalance -= amount;
        payable(streams[sender][receiver].receiver).transfer(amount);
    }

    function supplyLoan(address tokenAddress, uint256 amount) public {
        require(amount > 0, "Amount must be greater than 0");
        require(tokenAddress != address(0), "Token address must be provided");
        loanVaults[tokenAddress].tokenAddress = tokenAddress;
        loanVaults[tokenAddress].totalBalance += amount;
    }



}

interface IERC20 {
    function totalSupply() external view returns (uint);

    function balanceOf(address account) external view returns (uint);

    function transfer(address recipient, uint amount) external returns (bool);

    function allowance(address owner, address spender) external view returns (uint);

    function approve(address spender, uint amount) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint amount
    ) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint amount);
    event Approval(address indexed owner, address indexed spender, uint amount);
}
