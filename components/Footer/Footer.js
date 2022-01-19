import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import footerLogo from "../../images/logo-footer.webp";

const Footer = () => {
  return (  
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <figure className={styles.logoFigure}>
            <Link href="/">
              <a className={styles.logoWrapper}>
                <Image src={footerLogo} alt="Insurance Ranked logo" />
              </a>
            </Link>
          </figure>
          <div className={styles.footerLinksWrapper}>
            <ul className={styles.footerLinksList}>
              <li className={styles.footerLinksListTitle}>
                Company
              </li>
              <li className={styles.footerLink}>
                <Link href="/">
                  <a>About/Contact</a>
                </Link>
              </li>
            </ul>
            <ul className={styles.footerLinksList}>
              <li className={styles.footerLinksListTitle}>
                Legal
              </li>
              <li className={styles.footerLink}>
                <Link href="/">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li className={styles.footerLink}>
                <Link href="/">
                  <a>Terms & Conditions</a>
                </Link>
              </li>
            </ul>
            <ul className={styles.footerLinksList}>
              <li className={styles.footerLinksListTitle}>
                Follow Us
              </li>
              <li className={`${styles.footerLink} ${styles.footerLinkFacebook}`}>
                <Link href="/">
                  <a>Facebook</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;