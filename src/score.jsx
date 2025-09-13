import { useGame } from "./gameContext";

export default function scoreboard() {
  const { score, stop } = useGame();
  return (
    <div className="scoreboard">
      <p>Score: {score}</p>
      <button onClick={stop}>Restart</button>
    </div>
  );
}
