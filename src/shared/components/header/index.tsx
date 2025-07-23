import "./index.scss";
import HamburgersAside from "./components/hamburgers-aside";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const MotionHamburgersAside = motion.create(HamburgersAside);

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

      <AnimatePresence initial={false}>
        {isMenuOpen && isMobile && (
          <MotionHamburgersAside
            navItems={navItems}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Header;
