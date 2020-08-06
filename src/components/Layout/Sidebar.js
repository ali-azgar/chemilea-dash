import logoSVG from "../../assets/WhiteLogo.svg";
import SourceLink from "../../components/SourceLink";
import React from "react";
import {
  MdAccountBox,
  MdApps,
  MdNotificationsActive,
  MdPersonAdd,
  MdNoteAdd,
  MdPeople
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from "reactstrap";
import bn from "../../utils/bemnames";


const navItems = [
  { to: "/", name: "dashboard", exact: true, Icon: MdApps },
  { to: "/users", name: "Users", exact: false, Icon: MdPeople },
  { to: "/request", name: "Requests", exact: false, Icon: MdNoteAdd },
  { to: "/notify", name: "Notify to users", exact: false, Icon: MdNotificationsActive },
  { to: "/refer", name: "Referrals", exact: false, Icon: MdPersonAdd },
  { to: "/login", name: "login / signup", exact: false, Icon: MdAccountBox },
];

const bem = bn.create("sidebar");

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };

  handleClick = (name) => () => {
    this.setState((prevState) => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()}>
        <div className={bem.e("background")} />
        <div className={bem.e("content")}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <img
                src={logoSVG}
                width="110%"
                height="50"
                className="pr-2"
                alt=""
              />
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e("nav-item")}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e("nav-item-icon")} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
