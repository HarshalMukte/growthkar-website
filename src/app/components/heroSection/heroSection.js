"use client"
import { AnimatePresence, motion } from "framer-motion";
import HeroSectionLeft from "./heroSectionLeft";
import HeroSectionRight from "./heroSectionRight";
import styles from "./herosection.module.css";



const HeroSection = () => {

  return <div className={styles.heroWrapper}>
        <HeroSectionLeft />
        <HeroSectionRight />
    </div>;
};

export default HeroSection;
