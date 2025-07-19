import "./index.scss";

const Header = () => {
  const navItems = [
    { label: "Início", path: "init" },
    { label: "Sobre mim", path: "about-me" },
    { label: "Meus serviços", path: "my-services" },
    { label: "Portfólio", path: "portfolio" },
    { label: "Contato", path: "contact" },
  ];

  return (
    <header id="header-container">
      <nav>
        {navItems.map((navItem, index) => (
          <a key={`header-nav-item-${index}`} href={navItem.path}>
            {navItem.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
