import React from 'react';
import styles from '../styles/Work.module.css';
import { FaCaretUp, FaPaperPlane } from 'react-icons/fa';
import { Works } from '../public/data/workExp';

const Work = () => {
  return (
    <>
      <div className={styles.workContainer} id='work-experience'>
        <div className={styles.workTitle}>
          <h1>WORK EXPERIENCE</h1>
        </div>
        <div className={styles.workWrapper}>
          <div className={styles.centerLine}>
            <a href='#' className={styles.scrollIcon}>
              <FaCaretUp color='#01bf71' size='40px' />
            </a>
          </div>
          {Works.map((work) => (
            <div
              className={`${styles.row} ${
                work.id % 2 ? styles.row2 : styles.row1
              }`}
            >
              <section>
                <FaPaperPlane className={styles.icon} size='small' style={{padding: '10px'}} />
                <div className={styles.workDetails}>
                  <span className={styles.title}>{work.role}</span>
                  <span>{work.company}</span>
                </div>
                <p>{work.description}</p>
                <div className={styles.bottom}>
                  <a href={work.companyURL} target='_blank'>Know More</a>
                  <i>{work.duration}</i>
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
