import {
  useState,
} from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const [showDropdown, setShowDropDown] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropDown((state) => !state);
  };

  const closeDropdown = () => {
    setShowDropDown(false);
  }

  return (
    <section role="complementary" className={styles.hero}>
      <div className="container">
        <div className={styles.heroSection}>
          <div>
            <h1 className={styles.heroTitle}>5 Best Pet Insurance Companies (2022)</h1>
            <p className={styles.heroTxt}>
              We&apos;ve reviewed and ranked the 5 best pet 
              insurance providers of 2022 based on available 
              multi-pet discounts, past customer reviews, 
              policy benefits offered for pets, and ease of 
              the online quote process.
            </p>
          </div>
          <p className={styles.heroLastUpdated}>
            Last Updated: January 10, 2022
          </p>
          <div className={styles.heroDropdown}>
            <button
              className={styles.heroDropdownToggle}
              data-toggle="dropdown"
              data-display="static"
              aria-haspopup="true"
              aria-expanded={showDropdown}
              onClick={handleToggleDropdown}
            >
              Advertiser Disclosure
            </button>
            <div
              className={`${styles.heroDropdownMenu} ${showDropdown ? styles.show : null}`}
            >
              <h4 className={styles.heroDropdownMenuHeading4}>InsuranceRanked values your trust!</h4>
              <button onClick={closeDropdown} className={styles.heroDropdownCloseBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="9.94" height="9.938" viewBox="0 0 9.94 9.938">
                  <path d="M1435.43,711.159a0.221,0.221,0,0,1,0-.318l3.41-3.41a0.432,0.432,0,0,0,0-.637l-0.63-.636a0.517,0.517,0,0,0-.32-0.137,0.41,0.41,0,0,0-.32.137l-3.41,3.41a0.222,0.222,0,0,1-.32,0l-3.41-3.41a0.5,0.5,0,0,0-.32-0.137,0.517,0.517,0,0,0-.32.137l-0.63.636a0.432,0.432,0,0,0,0,.637l3.41,3.41a0.221,0.221,0,0,1,0,.318l-3.41,3.41a0.432,0.432,0,0,0,0,.637l0.63,0.636a0.517,0.517,0,0,0,.32.137,0.5,0.5,0,0,0,.32-0.137l3.41-3.41a0.222,0.222,0,0,1,.32,0l3.41,3.41a0.5,0.5,0,0,0,.32.137,0.517,0.517,0,0,0,.32-0.137l0.63-.636a0.432,0.432,0,0,0,0-.637Z" transform="translate(-1429.03 -706.031)"></path>
                </svg>
              </button>
              <p className={styles.heroDropdownTxt}>
                InsuranceRanked.com is a free online resource that provides valuable content and comparison features to visitors.
                To keep our resources 100% free for consumers, InsuranceRanked.com attempts to partner with some of the companies listed on this page, and may receive marketing compensation in exchange for clicks and calls from our site.
                Such compensation can impact the location and order in which such companies appear on this page.
                All such location, order and company ratings are subject to change based on editorial decisions.
              </p>
              <h5 className={styles.heroDropdownMenuHeading5}>Our Pet Insurance Partners</h5>
              <p className={styles.heroDropdownTxt}>              
                ASPCA, Embrace, Healthy Paws, Lemonade Pet, ManyPets, Pawp, Prudent Pet, Pumpkin, Spot 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Hero;