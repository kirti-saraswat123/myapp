import React from "react";
import "./App.css";
import { Nav, NavItem, NavLink } from "reactstrap";

export default function App() {
  return (
    <div>
      <div className="header">
      <Nav>
        <NavItem >
          <NavLink active href="#" >
            SHOP
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            NEW IN
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            BRANDS
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink disabled href="#">
            GIFT
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink disabled href="#">
            OFFER
          </NavLink>
        </NavItem>
      </Nav>
    </div>
    </div>
  );
}
