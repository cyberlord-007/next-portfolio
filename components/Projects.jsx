import React from 'react';
import styles from '../styles/Projects.module.css';
import {FaEye,FaCode} from 'react-icons/fa'

const Projects = () => {
  return (
    <>
      <div className={styles.projectsContainer} id='projects'>
        <div className={styles.projectsWrapper}>
          <div className={styles.projectsHeading}>
            <h1>MY PROJECTS</h1>
          </div>
          <div className={styles.projectsCol}>
            <div className={styles.projectsCard}>
              <div className={styles.cardLeft}>
                <img src='/images/cm1.png' alt='' />
              </div>
              <div className={styles.cardRight}>
                <div className={styles.cardTitle}>
                  <h1>Corona Meter</h1>
                </div>
                <div className={styles.TechRow}>
                  <p>Flutter</p>
                  <p>Firebase</p>
                  <p>Firestore</p>
                  <p>Android</p>
                </div>
                <div className={styles.cardBody}>
                  An android application developed with Flutter SDK using Dart
                  programming language that keeps you updated with real time
                  COVID statistics.
                </div>
                <div className={styles.cardActions}>
                  <div className={styles.viewButton}>
                    <FaEye />
                    <span>VIEW</span>
                  </div>
                  <div className={styles.codeButton}>
                    <FaCode />
                    <span>
                      CODE
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.projectsCard}>
              <div className={styles.cardLeft}>
                <img src='/images/gke.png' alt='' />
              </div>
              <div className={styles.cardRight}>
                <div className={styles.cardTitle}>
                  <h1>GKeep(Task Manager)</h1>
                </div>
                <div className={styles.TechRow}>
                  <p>React</p>
                  <p>Redux</p>
                  <p>Firebase</p>
                  <p>Styled Components</p>
                </div>
                <div className={styles.cardBody}>
                  An android application developed with Flutter SDK using Dart
                  programming language that keeps you updated with real time
                  COVID statistics.
                </div>
                <div className={styles.cardActions}>
                  <div className={styles.viewButton}>
                    <FaEye />
                    <span>VIEW</span>
                  </div>
                  <div className={styles.codeButton}>
                    <FaCode />
                    <span>
                      CODE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
