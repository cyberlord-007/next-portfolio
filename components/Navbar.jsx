import React from 'react'
import styles from '../styles/Navbar.module.css'
import {FaArtstation,FaBars,FaGithub,FaLinkedin,FaInbox} from 'react-icons/fa'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.navWrapper}>
                    <div className={styles.navLogo}><FaArtstation/>kash</div>
                    <div className={styles.burgerMenu}><FaBars/></div>
                    <div className={styles.navMenu}>
                        <div className={styles.navItem}>
                            <Link href='/#home'><a className={styles.navLinks}>Home</a></Link>
                        </div>
                        <div className={styles.navItem}>
                            <Link href='/#about'><a className={styles.navLinks}>About Me</a></Link>
                        </div>
                        <div className={styles.navItem}>
                            <Link href='/'><a className={styles.navLinks}>Skills</a></Link>
                        </div>
                        <div className={styles.navItem}>
                            <Link href='/'><a className={styles.navLinks}>Projects</a></Link>
                        </div>
                        <div className={styles.navItem}>
                            <Link href='/'><a className={styles.navLinks}>Work Experience</a></Link>
                        </div>
                        <div className={styles.navItem}>
                            <Link href='/'><a className={styles.navLinks}>Contact Me</a></Link>
                        </div>
                    </div>
                    <div className={styles.socialMenu}>
                        <div className={styles.navItem}>
                            <Link href='/'><a className={styles.navLinks}><FaGithub/></a></Link>
                        </div>
                        <div className={styles.navItem}>
                            <Link href='/'><a className={styles.navLinks}><FaLinkedin/></a></Link>
                        </div>  
                    </div>
                </div>
            </nav>   
        </>
    )
}

export default Navbar
