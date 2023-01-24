import "./Header.css";
import logo from "../../images/logo.png"
function Header() {

  return (
    <header className="header">
      <img src={logo} alt="лого" className="header__logo" />
      <p className="header__title">SPLITAPP</p>
    </header>
  );
}

export default Header;
