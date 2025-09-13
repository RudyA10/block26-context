import { useGame } from "./gameContext";

export default function Field() {
  const { field } = useGame();

  return (
    <ul className="field">
      {field.map((mole, i) => (
        <Hole key={i} mole={mole} />
      ))}
    </ul>
  );
}

function Hole({ mole }) {
  const { whack } = useGame();
  if (mole) return <li onClick={whack} className="mole hole"></li>;
  return <li className="hole"></li>;
}
