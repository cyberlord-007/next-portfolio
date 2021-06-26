import React from 'react'
import styles from '../styles/Skills.module.css'
import {FaReact,FaHtml5,FaCss3Alt,FaJsSquare,FaNodeJs,FaGitAlt} from 'react-icons/fa'

const Skills = () => {
    return (
        <>
            <div className={styles.skillsContainer} id='skills'>
                <div className={styles.skillsWrapper}>
                    <div className={styles.col1}>
                        <h1 className={styles.skillsHeading}>
                            MY SKILLS
                        </h1>
                        <div className={styles.logoWrapper}>
                            <img className={styles.skillsLogo} src="/images/skills.png" alt="" />
                        </div>
                    </div>
                    <div className={styles.col2}>
                        <div className={styles.skillsGrid}>
                            <div className={styles.gridish}>
                                <div className={styles.skillIcons}>
                                    <FaReact color='#5ED3F3' size='100px'/>
                                </div>
                                <div className={styles.skillIcons}>
                                    <FaHtml5 color='#DD4B25' size='100px'/>
                                </div>
                                <div className={styles.skillIcons}>
                                    <FaCss3Alt color='#016DB4' size='100px'/>
                                </div>
                                <div className={styles.skillIcons}>
                                    <FaJsSquare color='#EFD81D' size='100px'/>
                                </div>
                                <div className={styles.skillIcons}>
                                    <FaNodeJs color='#6D9E68' size='100px'/>
                                </div>
                                <div className={styles.skillIcons}>
                                    <img className={styles.skillImg} src="/images/fastify.png" alt="flutter" />    
                                </div>
                                <div className={styles.skillIcons}>
                                    <img className={styles.skillImg} src="/images/flutter.png" alt="flutter" />    
                                </div>
                                <div className={styles.skillIcons}>
                                    <img className={styles.skillImg} src="/images/firebase.png" alt="flutter" />    
                                </div>
                                <div className={styles.skillIcons}>
                                    <img className={styles.skillImg} src="/images/next.png" alt="flutter" />    
                                </div>
                                <div className={styles.skillIcons}>
                                    <FaGitAlt color='#DD4B25' size='100px'/>
                                </div>
                                <div className={styles.skillIcons}>
                                    <img className={styles.skillImg} src="/images/swagger.png" alt="flutter" />    
                                </div>
                                <div className={styles.skillIcons}>
                                    <img className={styles.skillImg} src="/images/docker.png" alt="flutter" />    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
