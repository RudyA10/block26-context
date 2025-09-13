import { createContext, useContext, useState } from "react";

const GameContext = createContext();
const holes = 9;

export function GameProvider({ children }) {
  const [field, setField] = useState(makeField());
  const [score, setScore] = useState(0);
  const [game, setGame] = useState(false);

  const whack = () => {
    setField(makeField(field));
    setScore(score + 1);
  };

  const start = () => {
    setScore(0);
    setField(makeField());
    setGame(true);
  };

  const stop = () => {
    setGame(false);
    setScore(0);
  };

  const value = {
    field,
    score,
    game,
    whack,
    start,
    stop,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("Game context must be used within GameProvider.");
  return context;
}

function makeField(field = []) {
  const newField = Array(holes).fill(false);
  let mole = Math.floor(Math.random() * holes);
  while (field[mole]) {
    mole = Math.floor(Math.random() * holes);
  }
  newField[mole] = true;
  return newField;
}
