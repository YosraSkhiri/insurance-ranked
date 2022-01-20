import styles from "./Stars.module.css"

const stars = {
  empty: <svg className={styles.star} focusable="false" viewBox="0 0 24 24" fill="#d1d1d1" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>,
  full: <svg className={styles.star} focusable="false" height="18" fill="#ffb400" width="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
};

const Stars = ({ ratingScore }) => {
  const generateStars = () => {
    let generatedStars = [];
    for (let i = 0; i < Math.ceil(ratingScore); i++) {
      generatedStars.push(stars.full);
    }

    for (let i = 0; i < 5 - Math.ceil(ratingScore); i++) {
      generatedStars.push(stars.empty);
    }

    return generatedStars;
  };

  return (
    <div className={styles.starsContainer}>
      {generateStars()}
    </div>
  );
}

export default Stars;