import React from 'react';
import styles from '../styles/Projects.module.css';

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
                <img src='/images/cm.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
