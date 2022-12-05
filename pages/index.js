import Head from "next/head";
import styles from "./index.module.css";

const Desktop1 = () => {
  return (
    <div className={styles.desktop1}>
      <img
        className={styles.screenshot202211211238131}
        alt=""
        src="../screenshot-20221121-123813-1@2x.png"
      />
      <img
        className={styles.screenshot202211211241551}
        alt=""
        src="../screenshot-20221121-124155-1@2x.png"
      />
      <img
        className={styles.screenshot202211211249241}
        alt=""
        src="../screenshot-20221121-124924-1@2x.png"
      />
      <a className={styles.learnMore}>{`Learn More >`}</a>
      <img className={styles.image4Icon} alt="" src="../image-4@2x.png" />
      <img className={styles.image6Icon} alt="" src="../image-6@2x.png" />
      <img className={styles.image7Icon} alt="" src="../image-7@2x.png" />
      <a className={styles.learnMore1}>{`Learn More >`}</a>
      <button className={styles.rectangleButton} />
      <a className={styles.buyA}>Buy</a>
      <button className={styles.rectangleButton1} />
      <a className={styles.buyA1}>Buy</a>
      <img className={styles.cITYPNG1Icon} alt="" src="../citypng-1@2x.png" />
      <div className={styles.rectangleDiv} />
      <img className={styles.rectangleIcon} alt="" src="../rectangle-11.svg" />
      <button className={styles.appleButton}>
        <img className={styles.vectorIcon} alt="" src="../vector.svg" />
      </button>
      <button className={styles.listButton}>
        <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
      </button>
      <button className={styles.bagButton}>
        <img className={styles.bagFrameIcon} alt="" src="../bagframe.svg" />
      </button>
      <div className={styles.appleIndiaDiv}>Apple (India)</div>
      <img className={styles.image5Icon} alt="" src="../image-5@2x.png" />
    </div>
  );
};

export default Desktop1;
