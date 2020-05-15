import { useCallback, useContext } from "react";
import web3 from "../ethereum/web3";
import { useAlert } from "react-alert";
import { contractAddress, abi, bytecode } from "../ethereum/info";
import { GameContext } from "../context/game-context";
import {
  capColors,
  posReducer,
  BoardToPos,
  PosToBoard,
  markers,
  safePos,
  startState,
  coloredBlocks,
} from "./utils";

export const useGame = () => {
  const alert = useAlert();
  const {
    gameState,
    setGameData,
    options,
    setGameOptions,
    contract,
    setEthContract,
  } = useContext(GameContext);

  const startGame = useCallback(
    async (playersLength: number) => {
      if (options.isChain) {
        setGameOptions({ blockLoading: true })
        alert.show(
          "Deploying the contract and setting up operations. Please wait a few seconds."
        );
        try {
          const accounts = await web3.eth.getAccounts();
          setEthContract(
            await new web3.eth.Contract(abi, contractAddress)
              .deploy({
                data: "0x" + bytecode.object,
                arguments: [playersLength],
              })
              .send({
                from: accounts[0],
                gas: 3000000,
              })
          );
          alert.show(
            "The contract has been successfully deployed. Please enjoy the game."
          );
        } catch (err) {
          alert.show(
            "You need to have MetaMask installed and Rinkeby test network to play this game on chain."
          );
          setGameOptions({ isChain: false, blockLoading: false });
          setEthContract(null);
        }
      }
      let newGame: { [key: string]: string } = {};
      Object.entries(startState)
        .slice(0, playersLength * 4)
        .map((entry) => {
          newGame[entry[0]] = entry[1];
          return true;
        });
      setGameData(newGame);
      setGameOptions({
        isGame: true,
        playersLength: playersLength,
        gameCondition: new Array(16).fill(0),
        blockLoading: false
      });
    },
    [setGameData, options, setGameOptions, setEthContract, alert]
  );

  const incrementChance = useCallback(
    (isChance, isThrown, chance, playersLength, winners, win) => {
      let newChance: number;
      newChance = isChance ? chance : (chance + 1) % playersLength;
      while (options.winners.includes(newChance)) {
        newChance = (newChance + 1) % playersLength;
      }
      if (win) {
        winners.push(chance);
        setGameOptions({
          thrown: isThrown,
          chance: newChance,
          winners: winners,
        });
      } else {
        setGameOptions({
          thrown: isThrown,
          chance: newChance,
        });
      }
    },
    [options, setGameOptions]
  );

  const moveValidator = useCallback(
    (diceThrow) => {
      setGameOptions({ throw: diceThrow });
      let color = options.chance;
      const sp = Object.values(startState);
      const colorState = Object.values(gameState).slice(
        color * 4,
        color * 4 + 4
      );
      const check: (0 | 1)[] = colorState.map((c) => {
        if (sp.includes(c) && diceThrow !== 6) {
          return 0;
        } else if (coloredBlocks.includes(c)) {
          let x = parseInt(c.charAt(1));
          if (x === 6 || x + diceThrow > 6) return 0;
        }
        return 1;
      });
      const count = check.filter((v) => v === 0).length;
      if (count === 4) {
        let newChance = (options.chance + 1) % options.playersLength;
        while (options.winners.includes(newChance)) {
          newChance = (newChance + 1) % options.playersLength;
        }
        setGameOptions({
          chance: newChance,
          thrown: false,
        });
      }
    },
    [gameState, options, setGameOptions]
  );

  const moveDeducer = (val: number, diceThrow: number) => {
    let newVal: number;
    let isthrown = false;
    let ischance = false;
    if (val === 0 && diceThrow === 6) {
      newVal = 1;
    } else if (val === 0) {
      newVal = 0;
      ischance = true;
      isthrown = true;
    } else {
      let testVal = val + diceThrow;
      if (testVal > 57) {
        newVal = val;
        ischance = true;
      } else if (testVal === 57) {
        newVal = testVal;
        ischance = true;
      } else {
        newVal = testVal;
      }
    }
    return { newVal, ischance, isthrown };
  };

  const moveMarker = useCallback(
    async (pos, color) => {
      let diceThrow = options.throw;
      let j = markers.indexOf(pos);

      // Fetch Current Game Condition
      let gameCondition = options.gameCondition;

      let currentGame: number[] = new Array(16).fill(0);
      let isChance: boolean = false;
      let isThrown: boolean = false;

      if (options.isChain) {
        const accounts = await web3.eth.getAccounts();
        const response = await contract.methods
          .moveMarker(gameCondition, color, j, diceThrow)
          .call({ from: accounts[0] });
        currentGame = response[0].map((r: string) => parseInt(r));
        isChance = response[1];
        isThrown = response[2];
      } else {
        currentGame = BoardToPos(gameCondition);
        let val = currentGame[j];
        let { newVal, ischance, isthrown } = moveDeducer(val, diceThrow);
        isChance = ischance;
        isThrown = isthrown;
        currentGame[j] = newVal;
        currentGame = PosToBoard(currentGame);
        val = currentGame[j];

        if (!safePos.includes(val)) {
          for (let i = 0; i < options.playersLength * 4; i++) {
            // Unsafe Position
            if (color !== Math.floor(i / 4) && currentGame[i] === val) {
              isChance = true;
              currentGame[i] = 0;
            }
          }
        }

        if (diceThrow === 6) {
          isChance = true;
        }
      }

      // -- XX --
      setGameOptions({ gameCondition: currentGame });
      let newGameState = posReducer(currentGame, options.playersLength);
      const colorState = Object.values(newGameState).slice(
        color * 4,
        color * 4 + 4
      );

      let f = 0;
      colorState.map((c) => c === `${capColors[color]}6` && f++);

      setGameData(newGameState);
      incrementChance(
        isChance,
        isThrown,
        options.chance,
        options.playersLength,
        options.winners,
        f === 4 ? true : false
      );
    },
    [setGameData, options, setGameOptions, contract, incrementChance]
  );

  const endGame = useCallback(() => {
    setGameOptions({
      isGame: false,
      playersLength: 0,
      throw: 0,
      chance: 0,
      thrown: false,
      winners: [],
      gameCondition: null,
    });
    setGameData({});
  }, [setGameData, options, setGameOptions]);

  return { startGame, moveValidator, moveMarker, endGame };
};
