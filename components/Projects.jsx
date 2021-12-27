import React from 'react';
import styles from '../styles/Projects.module.css';
import { FaEye, FaCode } from 'react-icons/fa';

const Projects = () => {
  return (
    <>
      <div className={styles.projectsContainer} id='projects'>
        <div className={styles.projectsWrapper}>
          <div className={styles.projectsHeading}>
            <h1>MY WORK</h1>
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
                  <a
                    className={styles.viewButton}
                    href='https://github.com/cyberlord-007/Corona-Meter-App'
                    target='_blank'
                  >
                    <FaEye />
                    <span>VIEW</span>
                  </a>
                  <a
                    className={styles.codeButton}
                    href='https://github.com/cyberlord-007/Corona-Meter-App'
                    target='_blank'
                  >
                    <FaCode />
                    <span>CODE</span>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.projectsCard}>
              <div className={styles.cardLeft}>
                <img src='/images/gke.png' alt='' />
              </div>
              <div className={styles.cardRight}>
                <div className={styles.cardTitle}>
                  <h1>GKeep</h1>
                </div>
                <div className={styles.TechRow}>
                  <p>React</p>
                  <p>Redux</p>
                  <p>Firebase</p>
                  <p>Styled Components</p>
                </div>
                <div className={styles.cardBody}>
                  A task manager application like Google Keep that lets you add
                  tasks,pin important ones,archive tasks and delete them. The
                  user interface is fully responsive and supports dark theme as
                  well.
                </div>
                <div className={styles.cardActions}>
                  <a
                    className={styles.viewButton}
                    href='https://gkeep-624d0.web.app/'
                    target='_blank'
                  >
                    <FaEye />
                    <span>VIEW</span>
                  </a>
                  <a
                    className={styles.codeButton}
                    href='https://github.com/cyberlord-007/gkeep'
                    target='_blank'
                  >
                    <FaCode />
                    <span>CODE</span>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.projectsCard}>
              <div className={styles.cardLeft}>
                <img src='/images/p.png' alt='' />
              </div>
              <div className={styles.cardRight}>
                <div className={styles.cardTitle}>
                  <h1>Personal Portfolio</h1>
                </div>
                <div className={styles.TechRow}>
                  <p>React</p>
                  <p>Redux</p>
                  <p>Firebase</p>
                  <p>Styled Components</p>
                </div>
                <div className={styles.cardBody}>
                  A single page application made with NextJs which is fully mobile responsive. It's a beautiful looking portfolio website with a few animations here and there. 
                </div>
                <div className={styles.cardActions}>
                  <a
                    className={styles.viewButton}
                    href='https://gkeep-624d0.web.app/'
                    target='_blank'
                  >
                    <FaEye />
                    <span>VIEW</span>
                  </a>
                  <a
                    className={styles.codeButton}
                    href='https://github.com/cyberlord-007/gkeep'
                    target='_blank'
                  >
                    <FaCode />
                    <span>CODE</span>
                  </a>
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
