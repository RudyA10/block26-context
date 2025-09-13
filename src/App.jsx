import { useGame } from "./gameContext";

import Field from "./field";
import Scoreboard from "./score";
import Intro from "./intro";

export default function App() {
  const { game } = useGame();
  return (
    <>
      <h1>Whack a Mole</h1>
      {game ? (
        <>
          <Scoreboard />
          <Field />
        </>
      ) : (
        <Intro />
      )}
    </>
  );
}
