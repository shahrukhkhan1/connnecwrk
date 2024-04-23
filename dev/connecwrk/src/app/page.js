import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import HomeBanner from "./components/homeBanner/HomeBanner";
import FeaturesWidget from "./components/featuresWidget/FeaturesWidget";
import PlayStorWidget from "./components/playStoreWidget/PlayStorWidget";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <HomeBanner/>
      <FeaturesWidget/>
      <PlayStorWidget/>
      <Footer/>
    </main>
  );
}
