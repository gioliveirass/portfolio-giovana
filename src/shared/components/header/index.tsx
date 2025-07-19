import "./index.scss";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import HamburgersAside from "./hamburgers-aside";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", path: "/" },
    { label: "Sobre mim", path: "about-me" },
    { label: "Meus serviços", path: "my-services" },
    { label: "Portfólio", path: "portfolio" },
    { label: "Contato", path: "contact" },
  ];

  return (
    <section>
      <header id="header-container">
        <nav id="computer-menu">
          {navItems.map((navItem, index) => (
            <a key={`header-nav-item-${index}`} href={navItem.path}>
              {navItem.label}
            </a>
          ))}
        </nav>

        <div id="hamburger-menu">
          <Hamburger
            color="var(--color-secondary-dark)"
            size={20}
            toggled={isMenuOpen}
            toggle={setMenuOpen}
          />
        </div>
      </header>

      {isMenuOpen && <HamburgersAside navItems={navItems} />}
    </section>
  );
};

export default Header;
