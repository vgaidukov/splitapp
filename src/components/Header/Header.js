import "./Header.css";
import logo from "../../images/logo.png";

function Header({ trackMouseOnTitle }) {

  return (
    <header className="header">
      <img src={logo} alt="лого" className="header__logo" />
      <p
        className="header__title"
        onMouseEnter={trackMouseOnTitle}
        onMouseLeave={trackMouseOnTitle}
      >
        SPLITAPP
      </p>
    </header >
  );
}

export default Header;
