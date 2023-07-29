import express from 'express'
import Web3 from 'web3'
import { newKitFromWeb3 ,newKit,CeloContract} from '@celo/contractkit'
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
import privateKeyToAddress from "@celo/utils/lib/address.js";
import { CeloWallet } from '@celo-tools/celo-ethers-wrapper'


// Connecting to Alfajores testnet
const MPContractAddress = "0x27f57CFc7A7CB3573151FEf92Fc71b3FBeb11fa2"
const app = express();
const PORT = 8080
let url = "https://forno.celo.org";
const provider = new ethers.providers.JsonRpcProvider(url);
const wallet = new CeloWallet( "Your PK", provider)
const sf = await Framework.create({
  chainId: 42220, //your chainId here
  provider,
});
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

const signer = sf.createSigner( wallet);
const celox = await sf.loadSuperToken("CELOx");
console.log(signer)
console.log(celox)

let contract
async function  superfluid(address){
  

  const createFlowOperation = celox.createFlow({
    sender: await signer.getAddress(),
    receiver: address,
    flowRate: 1
    // userData?: string
  });
  const deleteFlowOperation = celox.deleteFlow({
    sender: await signer.getAddress(),
    receiver: address
  
    // userData?: string
  });
  
  console.log(createFlowOperation);
  console.log("Creating your stream...");
  
  const result = await createFlowOperation.exec(signer);
  console.log(result);
  
  console.log(
    `Congrats - you've just created a money stream!
  `
  );
  sleep(20000);
  const resultdelete = await deleteFlowOperation.exec(signer);
  
  console.log(resultdelete);



}
async function getKit(addrssofmint, nft) {
  const web3 = new Web3("https://forno.celo.org")
const kit = newKitFromWeb3(web3);
var json = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_fromTokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_toTokenId",
				"type": "uint256"
			}
		],
		"name": "BatchMetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "MetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			}
		],
		"name": "safeMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
  contract = new kit.web3.eth.Contract(json, 42220 && MPContractAddress)
  kit.connection.addAccount('Your PK')
  const address = privateKeyToAddress.privateKeyToAddress('Your PK');
  console.log(address);
  let totalBalance = await kit.getTotalBalance(address)
  
  const map = new Map()
  map.set('art','https://ipfs.io/ipfs/QmQ6pkp4xcdbdabp5XCeJYuQBV5cnQnTf7CVpf34rpHUDN')
  map.set('cityilluminati','https://ipfs.io/ipfs/QmaJRr4onE83XLZAFSpP7o6eGeHWZ8yC43gK3FLFn3UH35')
  map.set('collectiable1','https://ipfs.io/ipfs/QmVNXV98TvYQx5v9WK1EZeBnEfrJyg6RMYCowA7r8ERYeK')
  map.set('collectiables','https://ipfs.io/ipfs/QmY68rpxsJ9X78pwNdBq7rZfPgv6r3P3GeViVioQHnSYze')
  map.set('location','https://ipfs.io/ipfs/Qmcdr22tpwBYQixVoW6BbpVpcXD1sQ31G1q4GbQ5niXZ5K')
  map.set('mcdonald','https://ipfs.io/ipfs/QmPcHjZY7qzye6RVu2FnPK7aHjz6c19s9VJWkcUVKhtF7Q')
  map.set('movietheatre','https://ipfs.io/ipfs/Qmc66EPoV2PnEASXLp5cUYuonq5vhp6CaDPAoHpEKZwfXX')
  map.set('voucher','https://ipfs.io/ipfs/QmRyqZP8QXzV1cymp1XFDkkQzqrJKk4GJM5SJSabyfYxRE')

  const urlofimage = map.get(nft)
  console.log(addrssofmint)
  console.log(urlofimage)
  let txObject = await contract.methods.safeMint(addrssofmint,urlofimage)
 const receipt = await txObject
 .send({

   from: address,
   gas: await txObject.estimateGas(),
 })

  superfluid(addrssofmint)
  console.log(receipt.blockHash)
  return receipt
}
 app.get('/mintnft/:address/:nft', async (req, res) => {

 const detailofnft= await  getKit(req.params.address,req.params.nft)
  console.log(detailofnft.blockHash)
  res.send(detailofnft.blockHash)
  })
  
  app.listen(process.env.PORT || PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))