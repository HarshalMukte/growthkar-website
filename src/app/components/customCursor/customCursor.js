"use client"
import styles from './customCursor.module.css';
import UseMousePosition from "@/app/utils/useMousePosition";


const CustomCursor = () => {
  const { x, y } = UseMousePosition();

 

  return (
    <div className={styles.cursor} style={{ left: x, top: y }} />
  );
};

export default CustomCursor;
