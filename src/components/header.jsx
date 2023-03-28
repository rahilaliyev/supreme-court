import Logo from "@/assets/images/logo.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={Logo} alt="logo" />
      </div>
      <nav className="header-right">
        <ul>
          <li>
            <NavLink>Istifadə qaydaları</NavLink>
          </li>
          <li>
            <NavLink>Növbəti addımlar</NavLink>
          </li>
          <li>
            <NavLink>Vahid Məhkəmə</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
