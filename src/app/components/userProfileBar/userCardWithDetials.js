import styles from "./userCards.module.css";

const UserCardWithDetials = ({cardInfo}) => {
  return (
    <div className={`${styles.userCard} ${styles.userCardWithDetials}`}>
     <div className={styles.top}>
        <div className={styles.profile}>
            <img src={cardInfo.image} alt="image" />
        </div>
        <div className={styles.content}>
            <h2 className={styles.title}>{cardInfo.title}</h2>
            <p>{cardInfo.description}</p>
        </div>
        <div className={styles.tag}>
            <img src={cardInfo.tag} alt="image" />
        </div>
    </div>
    <div className={styles.center}>
        <div className={styles.images}>
            <img src="/images/profile2.png" alt="images" />
            <img src="/images/profile2.png" alt="images" />
            <img src="/images/profile2.png" alt="images" />
        </div>
        <p className={styles.dot}>·</p>
        <p>500+ networks</p>
    </div>
    <div className={styles.bottom}>
        <h3>About</h3>
        <p>IT expert — a tech enthusiast, problem-solving pro. With cutting-edge skills and a passion for innovation, they navigate the dynamic world of IT, turning challenges into opportunities.</p>
    </div>
    </div>
  )
}

export default UserCardWithDetials