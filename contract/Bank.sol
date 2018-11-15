pragma solidity ^0.4.23;

contract Bank {
    // 此合約的擁有者
    address private owner;

    // 儲存所有會員的餘額
    mapping (address => uint256) private balance;
    
    // 儲存所有會員的定存及利息
    mapping (address => uint256) private dingChunAmount;
    mapping (address => uint256) private period;
    mapping (address => uint256) private intrest;

    // 事件們，用於通知前端 web3.js
    event DepositEvent(address indexed from, uint256 value, uint256 timestamp);
    event WithdrawEvent(address indexed from, uint256 value, uint256 timestamp);
    event TransferEvent(address indexed from, address indexed to, uint256 value, uint256 timestamp);
    
    // 事件們，用於通知前端 web3.js
    event DingChunEvent(address indexed from, uint256 value, uint256 period, uint256 timestamp);
    event DingChunFinalEvent(address indexed from, uint256 timestamp);
    event DingChunCancelEvent(address indexed from, uint256 period, uint256 timestamp);

    modifier isOwner() {
        require(owner == msg.sender, "you are not owner");
        _;
    }
    
    // 建構子
    constructor() public payable {
        owner = msg.sender;
    }

    // 存錢
    function deposit() public payable {
        balance[msg.sender] += msg.value;

        emit DepositEvent(msg.sender, msg.value, now);
    }

    // 提錢
    function withdraw(uint256 etherValue) public {
        uint256 weiValue = etherValue * 1 ether;

        require(balance[msg.sender] >= weiValue, "your balances are not enough");

        msg.sender.transfer(weiValue);

        balance[msg.sender] -= weiValue;

        emit WithdrawEvent(msg.sender, etherValue, now);
    }

    // 轉帳
    function transfer(address to, uint256 etherValue) public {
        uint256 weiValue = etherValue * 1 ether;

        require(balance[msg.sender] >= weiValue, "your balances are not enough");

        balance[msg.sender] -= weiValue;
        balance[to] += weiValue;

        emit TransferEvent(msg.sender, to, etherValue, now);
    }

    // 檢查銀行帳戶餘額
    function getBankBalance() public view returns (uint256) {
        return balance[msg.sender];
    }

    function kill() public isOwner {
        selfdestruct(owner);
    }
    
    // 購買定存
    function dingChun(uint256 etherValue, uint256 periodValue) public {
        uint256 weiValue = etherValue * 1 ether;

        require(balance[msg.sender] >= weiValue, "your balances are not enough");
        require(dingChunAmount[msg.sender] == 0, "your already have dingchun");
        require(period[msg.sender] == 0, "your already have dingchun");


        balance[msg.sender] -= weiValue;
        dingChunAmount[msg.sender] += weiValue;
        period[msg.sender] += periodValue;

        emit DingChunEvent(msg.sender, etherValue, periodValue, now);
    }
    
    // 定存期滿
    function dingChunFinal() public {
        require(dingChunAmount[msg.sender] > 0, "your don't have dingchun");
        require(period[msg.sender] > 0, "your don't have dingchun");
        
        intrest[msg.sender] += dingChunAmount[msg.sender]/100*period[msg.sender];
        balance[msg.sender] += dingChunAmount[msg.sender];
        dingChunAmount[msg.sender] = 0;
        period[msg.sender] = 0;

        emit DingChunFinalEvent(msg.sender, now);
    }
    
    // 提前解約
    function dingChunCancel(uint256 periodValue) public {
        require(dingChunAmount[msg.sender] > 0, "your don't have dingchun");
        require(period[msg.sender] > 0, "your don't have dingchun");
        require(period[msg.sender] > periodValue, "dingchun period less than input period");
        
        intrest[msg.sender] += dingChunAmount[msg.sender]/100*periodValue;
        balance[msg.sender] += dingChunAmount[msg.sender];
        dingChunAmount[msg.sender] = 0;
        period[msg.sender] = 0;

        emit DingChunCancelEvent(msg.sender, periodValue, now);
    }
    
    // 檢查定存相關資訊
    function getBankDingChunAmount() public view returns (uint256) {
        return dingChunAmount[msg.sender];
    }
    function getBankPeriod() public view returns (uint256) {
        return period[msg.sender];
    }
    function getBankIntrest() public view returns (uint256) {
        return intrest[msg.sender];
    }
}