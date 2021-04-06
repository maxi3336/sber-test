import "../../styles/Navigation.scss";

import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";

export const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink
        className="nav__item"
        to="/main"
        activeClassName="nav__item--active"
      >
        <div className="nav__item-icon">
          <HomeIcon />
        </div>
        <span className="nav__item-title">Main</span>
      </NavLink>
      <NavLink
        className="nav__item"
        to="/edit"
        activeClassName="nav__item--active"
      >
        <div className="nav__item-icon">
          <EditIcon />
        </div>
        <span className="nav__item-title">Edit</span>
      </NavLink>
    </nav>
  );
};
