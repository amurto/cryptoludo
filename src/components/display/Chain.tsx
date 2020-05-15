import React, { useContext } from "react";
import { GameContext } from "../context/game-context";
import "../style/Chain.css";

const Chain: React.FC = () => {
  const { options, setGameOptions } = useContext(GameContext);

  const toggleSwitch = () => {
    setGameOptions({ isChain: !options.isChain });
  };
  return (
    <React.Fragment>
      {!options.isGame && !options.blockLoading && (
        <div className="toggle-center">
          <div className="toggle-container">
            <div
              className={`toggle ${options.isChain && "toggle-on"}`}
              id="switch"
              onClick={toggleSwitch}
            >
              <div className="toggle-text-off">OFF</div>
              <div className="glow-comp"></div>
              <div className="toggle-button"></div>
              <div className="toggle-text-on">ON</div>
            </div>
            <div className="chain-text">Use Blockchain?</div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Chain;
