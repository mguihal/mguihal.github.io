import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import photo from "../assets/photo.jpg";

import "./index.css";
import * as styles from "./index.module.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className={styles.container}>
      <div>
        <h1 className={styles.title}>
          Maxime
          <span> GUIHAL</span>
        </h1>

        <div className={styles.infoContainer}>
          <div className={styles.photoContainer}>
            <img src={photo} alt="Photo" className={styles.photo} />
          </div>
          <div className={styles.info}>
            Développeur front-end
            <br />
            Nantes, France
            <br />
            <div>
              <a
                href="https://github.com/mguihal"
                title="Github"
                className={styles.github}
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/maximeguihal/"
                title="LinkedIn"
                className={styles.linkedin}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Site personnel de Maxime GUIHAL</title>
);
