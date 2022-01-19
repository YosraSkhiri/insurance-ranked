import styles from "./CompanyItem.module.css"
import Image from "next/image";
import Link from "next/link";
import Stars from "../Stars";
import pumpkinLogo from "../../../images/providers-logos/pumpkin-logo.png";
import manypetsLogo from "../../../images/providers-logos/manypets-logo.png";
import spotPetLogo from "../../../images/providers-logos/spot-pet-logo.png";
import prudentPetLogo from "../../../images/providers-logos/prudent-pet-logo.png";
import embraceLogo from "../../../images/providers-logos/embrace-logo.png";
import lemonadeLogo from "../../../images/providers-logos/lemonade-logo.png";
import healthyPawsLogo from "../../../images/providers-logos/healthy-paws-logo.png";
import aspcaPetLogo from "../../../images/providers-logos/aspca-pet-logo.png";
import pawpLogo from "../../../images/providers-logos/pawp-logo.png";

const insuranceCompaniesLogos = {
  pumpkinLogo,
  manypetsLogo,
  spotPetLogo,
  prudentPetLogo,
  embraceLogo,
  lemonadeLogo,
  healthyPawsLogo,
  aspcaPetLogo,
  pawpLogo,
};

const CompanyItem = ({company}) => {
  return (
    <div className={styles.companyItemContainer}>
      <div className={styles.firstPlaceLabelContainer}>
        {
          company.rank === 1 ? (
            <>
              <div className={styles.rankNumber}>1</div>
              <span className={styles.rank1stTxt}>#1 Best Overall Pet Health Care</span>
            </>

          ) : (
            <div className={styles.rankNumber}>{company.rank}</div>
          )
        }
      </div>
      <div className={styles.companyItemIntroWrapper}>
        <div className={styles.companyItemIntro}>
          <div>
            <Link href={company.link}>
              <a target="_blank" className={styles.companyLogoLink}>
                <Image className={styles.companyLogo} src={insuranceCompaniesLogos[company.logo]} alt={`${company.name} logo`} />
              </a>
            </Link>
          </div>
          <div>
            <div className={styles.ratingInfo}>
              <div className={styles.ratingValue}>{company.rating.score}</div>
              <Stars />
            </div>
            <div className={styles.ratingReviewsNumber}>{company.rating["reviews-number"]} Reviews</div>
          </div>
        </div>
      </div>
      <div className={styles.insuranceDetailsWrapper}>
        <div className={styles.insuranceDetails}>
          <div className={styles.insuranceDetail}>
            <div className={styles.insuranceDetailTitle}>Pet age range</div>
            <div className={styles.insuranceDetailTxt}>{company["pet-age-range"]}</div>
          </div>
          <div className={styles.insuranceDetail}>
            <div className={styles.insuranceDetailTitle}>Multi-Pet Discount</div>
            <div className={styles.insuranceDetailTxt}>{company["multi-pet-discount"] ? "Yes" : "No"}</div>
          </div>
          <div className={styles.insuranceDetail}>
            <div className={styles.insuranceDetailTitle}>Vet Exam Required?</div>
            <div className={styles.insuranceDetailTxt}>{company["vet-exam-required"] ? "Yes" : "No"}</div>
          </div>
        </div>
      </div>
      <ul className={styles.companyOverviewList}>
        {
          company["key-features"].map((keyItem, index) => <li key={`${index}_key-features`}>{keyItem}</li>)
        }
      </ul>
      <div className={styles.companyListItemCTAContainer}>
        <Link href={company.link}>
          <a target="_blank" className={styles.companyListItemCTA}>View Rates</a>
        </Link>
        <Link href={company.link}>
          <a target="_blank" className={styles.companyListItemLink}>100% Free Quote</a>
        </Link>
      </div>
    </div>
  );
}
 
export default CompanyItem;