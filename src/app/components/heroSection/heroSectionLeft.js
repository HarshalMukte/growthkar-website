import { delay, motion } from "framer-motion";
import styles from "./herosection.module.css";

//framer motion varients
const container = {
  show: {
    transition: {
      delayChildren: 1.35,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -200 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: .5,
    },
  },
};

const HeroSectionLeft = () => {
  return (
    <motion.div
      className={styles.leftSection}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className={styles.heroContent}>
        <motion.h1 className={styles.title} variants={item}>
          Empowering Innovation: Startups, Experts, Incubators, Together
        </motion.h1>
        <motion.p className={styles.para} variants={item}>
          Connect, learn, share, and hire, all in one place.
        </motion.p>
        <motion.div className={styles.downloadBtn} variants={item}>
          <a>
            <img src="/images/googlePlayBtn.png" alt="dwnBtn" />
          </a>
          <a>
            <img src="/images/AppStoreBtn.png" alt="dwnBtn" />
          </a>
        </motion.div>
        <motion.div className={styles.joinWaitlistBtn} variants={item}>
          <div className={styles.buttonBorder}>
            <button>Join Waitlist</button>
          </div>
        </motion.div>
      </div>
      <motion.div className={styles.textPara} variants={item}>
        <div className={styles.rode}></div>
        <p className={styles.para}>
          Introducing our revolutionary app, <span>the ultimate platform</span>{" "}
          for fostering collaboration and growth within the startup ecosystem.{" "}
          <span>
            Seamlessly connecting incubators, investors, startups, and experts
          </span>
          , our app facilitates meaningful interactions and opportunities for
          success.
        </p>
      </motion.div>
      <motion.div className={styles.element} variants={item}>
        <img src="/images/heroElement1.png" alt="image" />
      </motion.div>
    </motion.div>
  );
};

export default HeroSectionLeft;
