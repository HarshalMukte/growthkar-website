"use client"
import useMousePosition from "@/app/utils/useMousePosition";
import styles from "./objectSection.module.css";
import { useEffect, useRef, useState } from "react";

const ObjectiveSection = () => {
    const [isHoverd, setIsHoverd] = useState(false)
    const { x, y } = useMousePosition();
    const [left, setLeft] = useState(x);
    const [top, setTop] = useState(y);
    const parent = useRef(null);
    const size = isHoverd ? 200 : 0;
  
    useEffect(() => {
        const rect = parent.current.getBoundingClientRect();
        const newLeft = x - rect.left;
        const newTop = y - rect.top;
        setLeft(newLeft);
        setTop(newTop);
    }, [x, y]);

    const mouseEnterFunction = (e) => {
        setIsHoverd(true)

  }
  const mouseLeaveFunction = (e) => {
    setIsHoverd(false)
  }

  return (
    <div className={styles.objectiveSectionWrapper} >
      <div className={`${styles.objSection} ${styles.frontContent}`} onMouseEnter={mouseEnterFunction} onMouseLeave={mouseLeaveFunction}>
        <div className={styles.heading}>
          <h2>
            <span>✴</span> Our Objective
          </h2>
        </div>
        <div className={styles.content}>
          <p className={styles.para}>
            Our app fosters
            <span>
              collaboration among startups, investors, experts, and freelancers.
            </span>
            We streamline networking, funding, and mentorship, empowering
            entrepreneurs to
            <span> navigate the startup journey with ease.</span>
          </p>
        </div>
      </div>
      <div className={`${styles.objSection} ${styles.backContent}`}
       ref={parent} 
        style={{ WebkitMaskPosition: `${left - size/2}px ${top - size/2}px`, maskSize: `${size}px`}}>
        <div className={styles.heading}>
          <h2>
            <span>✴</span> Our Developer
          </h2>
        </div>
        <div className={styles.content}>
          <p className={styles.para}>
            I'm Harshal, a web developer passionate about crafting intuitive and
            engaging online experiences. With a focus on front-end development,
            I take pride in creating visually appealing websites and
            applications. Let's team up to bring your digital ideas to life!
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default ObjectiveSection;
