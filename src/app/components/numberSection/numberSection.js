import styles from "./numberSection.module.css";

const NumberSection = () => {
  return (
    <div className={styles.numberWrapper}>
      <div className={styles.numberDiv}>
        <p className={styles.number}>100+</p>
        <h3 className={styles.title}>Organizations on board</h3>
      </div>
      <div className={styles.numberDiv}>
        <p className={styles.number}>2k+</p>
        <h3 className={styles.title}>Startups listed</h3>
      </div>
      <div className={styles.numberDiv}>
        <p className={styles.number}>1k+</p>
        <h3 className={styles.title}>Users</h3>
      </div>
      <div className={styles.numberDiv}>
        <p className={styles.number}>4.5</p>
        <h3 className={styles.title}>Review rate</h3>
      </div>
    </div>
  );
};

export default NumberSection;
