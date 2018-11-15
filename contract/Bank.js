let bankBytecode = "608060405260008054600160a060020a031916331790556109ba806100256000396000f3006080604052600436106100ae5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632e1a7d4d81146100b357806341c0e1b5146100cd5780637b83b50b146100e25780638fbd5e931461010957806397188bbf1461011e578063988da2bc14610139578063a20907681461014e578063a69e2ed614610163578063a9059cbb1461017b578063aaa114aa146101ac578063d0e30db0146101c1575b600080fd5b3480156100bf57600080fd5b506100cb6004356101c9565b005b3480156100d957600080fd5b506100cb6102c2565b3480156100ee57600080fd5b506100f761034c565b60408051918252519081900360200190f35b34801561011557600080fd5b506100f761035f565b34801561012a57600080fd5b506100cb600435602435610372565b34801561014557600080fd5b506100f7610524565b34801561015a57600080fd5b506100cb610537565b34801561016f57600080fd5b506100cb60043561065c565b34801561018757600080fd5b506100cb73ffffffffffffffffffffffffffffffffffffffff60043516602435610812565b3480156101b857600080fd5b506100f7610903565b6100cb610916565b33600090815260016020526040902054670de0b6b3a764000082029081111561023c576040805160e560020a62461bcd02815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b604051339082156108fc029083906000818181858888f19350505050158015610269573d6000803e3d6000fd5b5033600081815260016020908152604091829020805485900390558151858152429181019190915281517f5bb95829671915ece371da722f91d5371159095dcabf2f75cd6c53facb7e1bab929181900390910190a25050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610331576040805160e560020a62461bcd02815260206004820152601160248201527f796f7520617265206e6f74206f776e6572000000000000000000000000000000604482015290519081900360640190fd5b60005473ffffffffffffffffffffffffffffffffffffffff16ff5b3360009081526001602052604090205490565b3360009081526002602052604090205490565b33600090815260016020526040902054670de0b6b3a76400008302908111156103e5576040805160e560020a62461bcd02815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b336000908152600260205260409020541561044a576040805160e560020a62461bcd02815260206004820152601a60248201527f796f757220616c726561647920686176652064696e676368756e000000000000604482015290519081900360640190fd5b33600090815260036020526040902054156104af576040805160e560020a62461bcd02815260206004820152601a60248201527f796f757220616c726561647920686176652064696e676368756e000000000000604482015290519081900360640190fd5b336000818152600160209081526040808320805486900390556002825280832080548601905560038252918290208054860190558151868152908101859052428183015290517f65b52bf5a3df84cb322b46bfde60f88a8c57e4ab965b3d1d8d83d1ab520a4d7f9181900360600190a2505050565b3360009081526004602052604090205490565b336000908152600260205260408120541161058a576040805160e560020a62461bcd028152602060048201526018602482015260008051602061096f833981519152604482015290519081900360640190fd5b33600090815260036020526040812054116105dd576040805160e560020a62461bcd028152602060048201526018602482015260008051602061096f833981519152604482015290519081900360640190fd5b33600081815260036020818152604080842080546002845282862080546004865284882080546064909204909302019091558054600185528387208054909101905585905592825292909155815142815291517f6c99a67f1e4d00c64483744d777202743b7c39eb92c13a4cd05fdd943f6790fe9281900390910190a2565b33600090815260026020526040812054116106af576040805160e560020a62461bcd028152602060048201526018602482015260008051602061096f833981519152604482015290519081900360640190fd5b3360009081526003602052604081205411610702576040805160e560020a62461bcd028152602060048201526018602482015260008051602061096f833981519152604482015290519081900360640190fd5b33600090815260036020526040902054811061078e576040805160e560020a62461bcd02815260206004820152602660248201527f64696e676368756e20706572696f64206c657373207468616e20696e7075742060448201527f706572696f640000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b33600081815260026020908152604080832080546004845282852080546064909204880290910190558054600184528285208054909101905583905560038252808320929092558151848152429181019190915281517f398df451a6ab1ead6f01cd543c603cfe092b7ad0fb6a003b2649727b9b4aeb1c929181900390910190a250565b33600090815260016020526040902054670de0b6b3a7640000820290811115610885576040805160e560020a62461bcd02815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b3360008181526001602090815260408083208054869003905573ffffffffffffffffffffffffffffffffffffffff8716808452928190208054860190558051868152429281019290925280519293927fbabc8cd3bd6701ee99131f374fd2ab4ea66f48dc4e4182ed78fecb0502e44dd69281900390910190a3505050565b3360009081526003602052604090205490565b336000818152600160209081526040918290208054349081019091558251908152429181019190915281517fad40ae5dc69974ba932d08b0a608e89109412d41d04850f5196f144875ae2660929181900390910190a25600796f757220646f6e277420686176652064696e676368756e0000000000000000a165627a7a72305820ec53d60724f8ea1200ee0193f4eb3a9218890279151cd5ccabb78c4105d2567a0029"

let bankAbi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "etherValue",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "kill",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getBankBalance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getBankDingChunAmount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "etherValue",
        "type": "uint256"
      },
      {
        "name": "periodValue",
        "type": "uint256"
      }
    ],
    "name": "dingChun",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getBankInterest",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "dingChunFinal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "periodValue",
        "type": "uint256"
      }
    ],
    "name": "dingChunCancel",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "etherValue",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getBankPeriod",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "deposit",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "DepositEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "WithdrawEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "TransferEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "period",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "DingChunEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "DingChunFinalEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "period",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "DingChunCancelEvent",
    "type": "event"
  }
];
