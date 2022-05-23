import React from 'react'
import styles from '../styles/About.module.css'
import {FaArrowDown} from 'react-icons/fa'


const About = () => {
    return (
        <>
         <div className={styles.aboutContainer} id='about'>
             <div className={styles.aboutWrapper}>
                 <div className={styles.aboutRow}>
                     <div className={styles.column1}>
                         <div className={styles.textWrapper}>
                             <p className={styles.topline}>
                                 About Me
                             </p>
                             <h1 className={styles.heading}>
                                 Frontend Engineer | React
                             </h1>
                             <p className={styles.description}>
                                 An avid learner of modern web and mobile app development technologies like the MERN Stack and Flutter,spending most of the time in learning something new everyday trying expand my knowledge pool to unimaginable lengths so that i can be a great fit for any suitable tech job.
                             </p>
                             <a href='/Akash_Chaudhary.pdf' download className={styles.heroButton}>
                                 <span>Resume</span>
                             </a>
                         </div>
                     </div>
                     <div className={styles.column2}>
                         <div className={styles.imgWrapper}>
                             <img className={styles.img} src="/images/avatar.JPG" alt="avatar" />
                         </div>
                     </div>
                 </div>
             </div>
         </div>   
        </>
    )
}

export default About
