import { getRandomColor } from "../helpers";

function Header() {
  const randomColor = getRandomColor();
  return (
    <header
      className="header"
      style={{
        // @ts-ignore
        ["--random-colour"]: `var(--${randomColor})`
      }}
    >
      <div className="header__logo" style={{ color: randomColor }}>
        Hoxbay
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            {/* Create here a link to this page */}
            Home
          </li>
          <li>
            {/* Create here a link to this page */}
            Categories
          </li>
          <li>
            {/* Create here a link to this page */}
            Basket
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
