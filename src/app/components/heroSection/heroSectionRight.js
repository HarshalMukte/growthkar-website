import { motion } from "framer-motion";
import UserCard from "../userProfileBar/userCard";
import UserCardWithDetials from "../userProfileBar/userCardWithDetials";
import styles from "./herosection.module.css";

//framer motion varients
const container = {
  show: {
    transition: {
      delayChildren: 0.35,
      staggerChildren: 0.35,
    },
  },
};

const mobileVarient = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

const cardVarient = {
  hidden: { opacity: 0, x: 200 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const HeroSectionRight = () => {
  const cards = [
    {
      id: 1,
      title: "John Kelp",
      image: "/images/profile.png",
      description: "UI Design Meeting",
      tag: "NEW",
    },
  ];
  const cardsWithDetailsSections = [
    {
      id: 2,
      title: "Sahir k.",
      image: "/images/profile.png",
      description: "IT industry · MVP stage",
      tag: "/images/iconbookmark.svg",
    },
  ];

  return (
    <motion.div
      className={styles.rightSection}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className={styles.iphoneDiv} variants={mobileVarient}>
        <div className={styles.ellipseBlur}></div>
        <div className={styles.frame}>
          <div className={styles.screen}></div>
        </div>
      </motion.div>
      <motion.div className={styles.userCard} variants={cardVarient}>
        <UserCard cardInfo={cards[0]} />
      </motion.div>
      <motion.div className={styles.UserCardWithDetials} variants={cardVarient}>
        <UserCardWithDetials cardInfo={cardsWithDetailsSections[0]} />
      </motion.div>
    </motion.div>
  );
};

export default HeroSectionRight;
