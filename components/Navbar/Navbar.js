import {
  useState,
} from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../../images/Logo.svg";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleMenu = () => {
    setExpanded((state) => !state);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navbar}>
          <Link href="/" passHref>
            <a rel="home" title="Insurance Ranked" className={styles.navbarBrand}>
              <Image
                className={styles.imgFluid}
                src={logo}
                alt="Insurance Ranked logo"
              />
            </a>
          </Link>
          <button
            onClick={handleMenu}
            className={styles.navbarToggler}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={expanded}
            aria-label="Toggle navigation"
          >
            <span className={styles.togglerIcon}></span>
          </button>
          <div
            className={`${styles.navCollapse} ${expanded ? styles.show : styles.collapse}`}
            id="navbarSupportedContent"
          >
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="/">
                  <a className={styles.navLink}>Top Companies</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
 
export default Navbar;