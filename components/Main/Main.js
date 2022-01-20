import {
  useState,
  useEffect,
} from "react";
import CompanyItem from "./CompanyItem";
import styles from "./Main.module.css";
import companyData from "../../pet-insurance-companies.json";
import sortCompanies from "../../helpers/sortCompanies";

const Main = () => {
  const [sortedCompanies, setSortedCompanies] = useState([]);

  useEffect(() => {
    let result = sortCompanies(companyData["insurance-companies"]);
    setSortedCompanies(result);
  }, []);

  return (
    <div className="container">
      <div className={styles.mainWrapper}>
        {
          sortedCompanies[0] ? (
            <div className={styles.featuredCompanyContainer}>
              <div className={styles.featuredCompanyLabel}>Our #1 Pet Insurance Choice for 2022</div>
              <div className={styles.featuredCompanyWrapper}>
                <CompanyItem company={sortedCompanies[0]} />
              </div>
            </div>
          ) : null
        }
        <ul className={styles.companyList}>
          <li className={styles.companyListHeadContainer}>
            <ul className={styles.companyListHead}>
              <li>Provider</li>
              <li>Pet Age Range</li>
              <li>Multi-Pet Discount</li>
              <li>Vet Exam Required?</li>
              <li>Key Features</li>
            </ul>
          </li>
          {
            sortedCompanies ?
            sortedCompanies.map((company, index) => <CompanyItem company={company} key={`IC_${index}`} />) : null
          }
        </ul>
      </div>
    </div>
  );
}
 
export default Main;