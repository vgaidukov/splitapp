import "./Header.css";
import logo from "../../images/logo.png"
function Header() {

  return (
    <header className="header">
      <img src={logo} alt="" className="logo" />
      <p className="title">SPLITAPP</p>
    </header>
  );
}

export default Header;
