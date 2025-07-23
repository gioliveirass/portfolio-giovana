import "./index.scss";
import { forwardRef } from "react";

interface HamburgersAsideProps {
  navItems: {
    path: string;
    label: string;
  }[];
}

const HamburgersAside = forwardRef<HTMLDivElement, HamburgersAsideProps>(
  ({ navItems }, ref) => {
    return (
      <aside id="hamburgers-aside" ref={ref}>
        <nav>
          {navItems.map((navItem, index) => (
            <a key={`header-nav-item-${index}`} href={navItem.path}>
              {navItem.label}
            </a>
          ))}
        </nav>
      </aside>
    );
  }
);

export default HamburgersAside;
