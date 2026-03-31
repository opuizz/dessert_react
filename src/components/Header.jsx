import React from "react";
import { headerData } from "../data/headerData";

const Header = () => {
  return (
    <header id="header">
      <div className="header_inner">
        <div className="header_logo">
          <a href="/">
            Dessert<em>site</em>
          </a>
        </div>
        <div className="header_menu">
          <ul>
            {headerData.menu.map((menu, index) => (
              <li key={index}>
                <a href="#">{menu}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="header_member">
          {headerData.member.map((member, index) => (
            <a href="/" key={index}>
              {member}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
