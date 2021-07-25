import React from 'react'
import styles from '../styles/Skills.module.css'
import {FaLaptopCode,FaTools,FaCodeBranch,FaReact,FaMobileAlt} from 'react-icons/fa'
import {DiNodejsSmall,DiMongodb,DiMysql} from 'react-icons/di'
import {SiRedux,SiNextDotJs,SiMaterialUi,SiSwagger,SiFlutter, SiFirebase, SiDart, SiAndroidstudio, SiGit, SiGithub, SiBitbucket, SiJira} from 'react-icons/si'

const Skills = () => {

    

    return (
        <>
            <div className={styles.skillsContainer} id='skills'>
                <div className={styles.skillsWrapper}>
                    <div className={styles.skillsHeading}>
                        <h1>MY SKILLS</h1>
                    </div>
                    <div className={styles.skillsGrid}>
                        <div className={styles.gridish}>
                            <div className={styles.skillsCard}>
                                <div className={styles.cardTop}>
                                    <FaLaptopCode size='100px' color='#01bf71' />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.titleRow}>
                                            Frameworks
                                    </div>
                                    <div className={styles.cardRow}>
                                        <p>
                                            ReactJS
                                        </p>
                                        <FaReact /> 
                                    </div>
                                    <div className={styles.cardRow}>
                                        <p>
                                            Redux
                                        </p>
                                        <SiRedux />
                                    </div>
                                    <div className={styles.cardRow}>
                                        <p>
                                            NextJS
                                        </p>
                                        <SiNextDotJs /> 
                                    </div>
                                    <div className={styles.cardRow}>
                                        <p>
                                            Material UI
                                        </p>
                                        <SiMaterialUi /> 
                                    </div>
                                </div>
                            </div>
                            <div className={styles.skillsCard}>
                                <div className={styles.cardTop}>
                                    <FaTools size='100px' color='#01bf71' />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.titleRow}>
                                            Backend Tools
                                    </div>
                                    <div className={styles.cardRow}>
                                        <p>
                                            NodeJS
                                        </p>
                                        <DiNodejsSmall /> 
                                    </div>
                                    <div className={styles.cardRow}>
                                        <p>
                                            MongoDB
                                        </p>
                                        <DiMongodb /> 
                                    </div>
                                    <div className={styles.cardRow}>
                                        <p>
                                            MySQL
                                        </p>
                                        <DiMysql /> 
                                    </div>
                                    <div className={styles.cardRow}>
                                        <p>
                                            SwaggerHub
                                        </p>
                                        <SiSwagger /> 
                                    </div>
                                </div>
                            </div>
                            <div className={styles.skillsCard}>
                                <div className={styles.cardTop}>
                                    <FaMobileAlt size='100px' color='#01bf71' />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.titleRow}>
                                            Mobile App Development
                                    </div>
                                    <div className={styles.cardRow}>
                                        <p>
                                            Flutter
                                        </p>
                                        <SiFlutter /> 
                                    </div>
                                    <div className={styles.cardRow}>
                                        <p>
                                            Dart
                                        </p>
                                        <SiDart /> 
                                    </div>
                                    <div className={styles.cardRow}>
                                        <p>
                                            Firebase
                                        </p>
                                        <SiFirebase /> 
                                    </div>
                                    <div className={styles.cardRow}>
                                        <p>
                                            Android Studio
                                        </p>
                                        <SiAndroidstudio /> 
                                    </div>
                                </div>
                            </div>
                            <div className={styles.skillsCard}>
                                <div className={styles.cardTop}>
                                    <FaCodeBranch size='100px' color='#01bf71' />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.titleRow}>
                                            Version Control
                                    </div>
                                    <div className={styles.cardRow}>
                                        <p>
                                            Git
                                        </p>
                                        <SiGit /> 
                                    </div>
                                    <div className={styles.cardRow}>
                                        <p>
                                            Github
                                        </p>
                                        <SiGithub /> 
                                    </div>
                                    <div className={styles.cardRow}>
                                        <p>
                                            Bitbucket
                                        </p>
                                        <SiBitbucket /> 
                                    </div>
                                    <div className={styles.cardRow}>
                                        <p>
                                            Jira
                                        </p>
                                        <SiJira /> 
                                    </div>
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
