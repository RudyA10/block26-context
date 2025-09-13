import { useGame } from "./gameContext";

export default function Intro() {
  const { start } = useGame();
  return (
    <section className="Intro">
      <p>Welcome to Whack a Mole!</p>
      <p>Whack a mole to earn points.</p>
      <p>How many can you get?</p>
      <button onClick={start}>Play</button>
    </section>
  );
}
