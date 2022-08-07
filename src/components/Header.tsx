import { Link } from "react-router-dom";
import { getRandomColor } from "../helpers";

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};
function Header({ setSearch }: Props) {
  const randomColor = getRandomColor();

  return (
    <header
      className="header"
      style={{
        // @ts-ignore
        ["--random-colour"]: `var(--${randomColor})`,
      }}
    >
      <div className="header__logo" style={{ color: randomColor }}>
        Hoxbay
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/basket"> Basket</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
