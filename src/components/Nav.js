import { Link } from "react-router-dom";
import logo from "../assets/images/A.Roni.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Learn with Roni Logo" />
            <h3>Learn with Roni</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
