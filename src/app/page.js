import HeroSection from "./components/heroSection/heroSection";
import Navbar from "./components/navbar/navbar";
import NumberSection from "./components/numberSection/numberSection";
import ObjectiveSection from "./components/ourObjectiveSection/objectiveSection";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <div className={styles.main_wrapper}>
      <main className={styles.main}>
        <Navbar />
        <HeroSection />
        <ObjectiveSection />
        <NumberSection />
      </main>
    </div>
  );
}
