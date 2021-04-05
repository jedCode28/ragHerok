import React, { useContext } from "react";
import { Menu } from "semantic-ui-react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar1 = (props) => {
  let history = useHistory();
  let { pathname } = useLocation();
  const { user, handleLogout } = useContext(AuthContext);

  const rightNavItems = () => {
    if (user) {
      return (
        <Menu.Menu position="right">
          <Menu.Item name="logout" onClick={() => handleLogout(history)} />
        </Menu.Menu>
      );
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item id="login" name="login" active={pathname === "/login"} />
          </Link>
          <Link to="/register">
            <Menu.Item
              id="register"
              name="register"
              active={pathname === "/register"}
            />
          </Link>
        </Menu.Menu>
      );
    }
  };

  return (
    <div>
      <Menu pointing secondary>
        <Link to="/">
          <Menu.Item name="home" id="home" active={pathname === "/"} />
        </Link>
        <Link to="/dogs">
          <Menu.Item name="dogs" id="dog" active={pathname === "/dogs"} />
        </Link>
        <Link to="/breeds">
          <Menu.Item name="breeds" id="breed" active={pathname === "/breed"} />
        </Link>
        <Link to="/about">
          <Menu.Item name="about" id="about" active={pathname === "/about"} />
        </Link>
        {/* <Link to="/componentDemo">
          <Menu.Item
            name="componentDemo"
            id="componentDemo"
            active={pathname === "/componentDemo"}
          />
        </Link> */}
        {rightNavItems()}
      </Menu>
    </div>
  );
};

export default Navbar1;
