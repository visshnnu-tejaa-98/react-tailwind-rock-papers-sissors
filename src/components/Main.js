import React, { useState } from "react";

const Main = () => {
  const [isInGame, setIsInGame] = useState(false);
  const [btnLabel, setBtnLabel] = useState("Play Game");
  const [result, setResult] = useState(null);

  const namings = {
    rock: "ROCK",
    paper: "PAPER",
    sissor: "SISSOR",
    draw: "Draw",
    userWonText: "🎉You Won!!!🎉",
    computerWonText: "Computer Won!!!",
  };
  const [computerSelectionArray, setComputerSelectionArray] = useState([
    namings.rock,
    namings.paper,
    namings.sissor,
  ]);
  const [userSelection, setUserSelection] = useState(null);
  const [computerSelection, setComputerSelection] = useState(null);
  setComputerSelectionArray([namings.rock, namings.paper, namings.sissor]);
  const handleStartGame = () => {
    isInGame ? setBtnLabel("End Game") : setBtnLabel("Play Game");
    setIsInGame((prev) => !prev);
  };
  const handleUserSelect = (item) => {
    setUserSelection(item);
    console.log(item);
    setTimeout(() => {
      let computerPick = handleComputerSelect();
      setComputerSelection(computerPick);
      console.log(computerPick);
      if (item === namings.rock && computerPick === namings.rock) {
        setResult(namings.draw);
      } else if (item === namings.rock && computerPick === namings.paper) {
        setResult(namings.computerWonText);
      } else if (item === namings.rock && computerPick === namings.sissor) {
        setResult(namings.userWonText);
      } else if (item === namings.paper && computerPick === namings.rock) {
        setResult(namings.userWonText);
      } else if (item === namings.paper && computerPick === namings.paper) {
        setResult(namings.draw);
      } else if (item === namings.paper && computerPick === namings.sissor) {
        setResult(namings.computerWonText);
      } else if (item === namings.sissor && computerPick === namings.rock) {
        setResult(namings.computerWonText);
      } else if (item === namings.sissor && computerPick === namings.paper) {
        setResult(namings.userWonText);
      } else if (item === namings.sissor && computerPick === namings.sissor) {
        setResult(namings.draw);
      }
    }, 500);
  };
  const handleComputerSelect = () => {
    let index = (Math.random() * 3).toString().split(".")[0];
    console.log(computerSelectionArray, index);
    console.log(computerSelectionArray[index]);
    return computerSelectionArray[index];
  };
  const handleResetGame = () => {
    setResult(null);
    setUserSelection(null);
    setComputerSelection(null);
  };
  return (
    <div>
      {isInGame && (
        <h3 className="text-xl mt-5">Select any one of the following</h3>
      )}
      <div className="flex justify-between text-[5rem] w-[30rem] mx-auto py-[2rem]">
        <span
          className="cursor-pointer"
          onClick={
            !result && isInGame && (() => handleUserSelect(namings.rock))
          }
        >
          🪨
        </span>
        <span
          className="cursor-pointer"
          onClick={
            !result && isInGame && (() => handleUserSelect(namings.paper))
          }
        >
          📜
        </span>
        <span
          className="cursor-pointer"
          onClick={
            !result && isInGame && (() => handleUserSelect(namings.sissor))
          }
        >
          ✂️
        </span>
      </div>

      <div className="flex">
        <div className="flex justify-center w-[50%]">
          {userSelection && (
            <div>
              <div className="text-2xl font-semibold underline underline-offset-2">
                User Selction
              </div>
              <div className="text-[5rem]">
                {userSelection === namings.rock
                  ? "🪨"
                  : userSelection === namings.paper
                  ? "📜"
                  : userSelection === namings.sissor
                  ? "✂️"
                  : ""}
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center w-[50%]">
          {computerSelection && (
            <div>
              <div className="text-2xl font-semibold underline underline-offset-2">
                Computer Selction
              </div>
              <div className="text-[5rem]">
                {computerSelection === namings.rock
                  ? "🪨"
                  : computerSelection === namings.paper
                  ? "📜"
                  : computerSelection === namings.sissor
                  ? "✂️"
                  : ""}
              </div>
            </div>
          )}
        </div>
      </div>
      {isInGame && result && (
        <h1 className="text-[4rem] font-semibold">{result}</h1>
      )}
      {!isInGame && !result && (
        <button
          className="text-3xl font-bold bg-red-500 p-4 rounded text-yellow-200 hover:bg-yellow-200 hover:text-red-500 shadow-xl"
          onClick={handleStartGame}
        >
          {btnLabel}
        </button>
      )}
      {result && (
        <button
          className="text-3xl font-bold bg-red-500 p-4 rounded text-yellow-200 hover:bg-yellow-200 hover:text-red-500 shadow-xl"
          onClick={handleResetGame}
        >
          Play Again
        </button>
      )}
    </div>
  );
};

export default Main;
