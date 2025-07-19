import "./index.scss";

interface HamburgersAsideProps {
  navItems: {
    path: string;
    label: string;
  }[];
}

const HamburgersAside = ({ navItems }: HamburgersAsideProps) => {
  return (
    <aside id="hamburgers-aside">
      <nav>
        {navItems.map((navItem, index) => (
          <a key={`header-nav-item-${index}`} href={navItem.path}>
            {navItem.label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default HamburgersAside;
