import React, { useState, useEffect, useCallback } from "react";
import { Row, Col } from "react-simple-flex-grid";
import { GameContext } from "./components/context/game-context";
import Ludo from "./components/display/Ludo";
import Dice from "./components/display/Dice";
import Menu from "./components/display/Menu";
import Head from "./components/display/Head";
import Alert from "./components/display/Alert";
import { useAlert } from "react-alert";
import { chance } from "./components/hooks/utils";
import "react-simple-flex-grid/lib/main.css";
import End from "./components/display/End";

import { OptionsProps } from "./types";
import Chain from "./components/display/Chain";

const App = () => {
  const alert = useAlert();
  const [gameState, setGameState] = useState({});
  const setGameData = useCallback((game) => {
    setGameState(game);
  }, []);

  const [options, setOptions] = useState<OptionsProps>({
    isGame: false,
    playersLength: 0,
    throw: 0,
    chance: 0,
    thrown: false,
    winners: [],
    gameCondition: [],
    isChain: false,
    blockLoading: false
  });

  const setGameOptions = useCallback((newOption) => {
    setOptions((option) => {
      return {
        ...option,
        ...newOption,
      };
    });
  }, []);

  const [contract, setContract] = useState<any>();

  const setEthContract = useCallback((contract) => {
    setContract(contract);
  }, []);

  useEffect(() => {
    if (options.isGame) {
      if (options.winners.length === options.playersLength - 1) {
        alert.show(
          `The game has ended. Player ${
            chance[options.winners[0]]
          } is the winner`
        );
        setGameOptions({
          isGame: false,
        });
      }
    }
  }, [options, setGameOptions, alert]);

  return (
    <GameContext.Provider
      value={{
        gameState: gameState,
        setGameData: setGameData,
        options: options,
        setGameOptions: setGameOptions,
        contract: contract,
        setEthContract: setEthContract,
      }}
    >
      <Row gutter={0}>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <Head />
          <Chain />
          <Menu />
          <End />
          <Alert />
          <Dice />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <Ludo />
        </Col>
      </Row>
    </GameContext.Provider>
  );
};

export default App;
