# CryptoLudo
A game of Ludo played on the Ethereum Blockchain, which supports multiple players.

## Note
> You need to have Metamask installed on the browser.
> It should be connected to the Rinkeby Test Network with minimal Ether on your account for the contract to be deployed.

## Demo
![Cryptoludo Demo](templates/demo.gif)

## Description
This is a game of Ludo with two options, whether to play it locally or on the Ethereum Blockchain network. Part of the logic is written in a smart [contract](https://github.com/amurto/cryptoludo/blob/master/contract/ludo.sol) using Solidity. This contract is currently deployed on the Rinkeby test Network. The contract is non-payable and the move transitions don't make any transactions on the chain. This is done as transaction for each move would take a lot of time, making the players wait which would be a bad feature. So the state of the game is not stored on chain after every move but rather passed on to the next player, as in state-channels.

## Instructions
### Prerequisites
Install Node.js and npm using the link above. Follow instructions on their respective websites. Npm is included with Node.js

### Installation
```bash
git clone https://github.com/amurto/cryptoludo.git
npm install
```

### Start
Run the app
```bash
npm start
```

### Usage
Open a web browser and go to
```bash
http://localhost:3000
```

## Credits

The Ludo Board HTML5 template was forked from this Medium [article](https://medium.com/@alphakoder/how-i-created-a-ludo-board-layout-cbd0e9f49ef3). 

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[MIT License Link](https://github.com/amurto/cryptoludo/blob/master/LICENSE)