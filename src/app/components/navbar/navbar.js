import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <header className={styles.header}>
        <div className={styles.iconDiv}>
            <img
              className={styles.iconImage}
              loading="lazy"
              alt=""
              src="/images/36fff4c5090f46b3b6d947eb3b500869removebgpreview-1-1@2x.png"
            />
              <h1 className={styles.growthKar}>Growth Kar</h1>
        </div>
          <div className={styles.buttonBorder}>
            <button className={styles.btn}>
              Download Now
            </button>
          </div>

    </header>
  )
}

export default Navbar