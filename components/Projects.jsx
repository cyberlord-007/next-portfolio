import React from 'react';
import styles from '../styles/Projects.module.css';
import { FaEye, FaCode } from 'react-icons/fa';
import { projectList } from '../public/data/projects';

const Projects = () => {
  const url = '/images/p.png';

  return (
    <>
      <div className={styles.projectsContainer} id='projects'>
        <div className={styles.projectsWrapper}>
          <div className={styles.projectsHeading}>
            <h1>MY WORK</h1>
          </div>
          <div className={styles.projectsCol}>
            {projectList.map((project) => (
              <div className={styles.projectsCard}>
                <div className={styles.cardLeft}>
                  <img src={project.imgURL} alt='' />
                </div>
                <div className={styles.cardRight}>
                  <div className={styles.cardTitle}>
                    <h1>{project.title}</h1>
                  </div>
                  <div className={styles.TechRow}>
                    {project.tech.map((t) => (
                      <p>{t}</p>
                    ))}
                  </div>
                  <div className={styles.cardBody}>{project.desc}</div>
                  <div className={styles.cardActions}>
                    <a
                      className={styles.viewButton}
                      href={project.hostURL}
                      target='_blank'
                    >
                      <FaEye />
                      <span>VIEW</span>
                    </a>
                    <a
                      className={styles.codeButton}
                      href={project.repoURL}
                      target='_blank'
                    >
                      <FaCode />
                      <span>CODE</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
