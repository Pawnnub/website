import styles from "../css/Resume.module.scss";
import pdf from "../Media/Resumev2.pdf";
import { FaFilePdf } from "react-icons/fa";
const Resume = () => {
  return (
    <div className={styles.resume} id="resume">
      <h1>Like what you see?</h1>
      <h2>Download my resume:</h2>
      <div className={styles.container}>
        <div className={styles.fancybox}>
          <div className={styles.box}>
            <a href={pdf} target="_blank" className={styles.line}>
              <FaFilePdf />
              Resume
            </a>
          </div>
          {/* <div className={styles.fancybox}></div> */}
        </div>
      </div>
    </div>
  );
};

export default Resume;
