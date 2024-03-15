import styles from "./userCards.module.css";

const UserCard = ({cardInfo}) => {
    
  return (
    <div className={styles.userCard}>
      <div className={styles.profile}>
        <img src={cardInfo.image} alt="image" />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{cardInfo.title}</h2>
        <p>{cardInfo.description}</p>
      </div>
      <div className={styles.tag}>{cardInfo.tag}</div>
    </div>
  );
};

export default UserCard;
