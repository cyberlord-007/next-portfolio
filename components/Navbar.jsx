import React, { useEffect, useState } from 'react';
import styles from '../styles/Navbar.module.css';
import {
  FaArtstation,
  FaBars,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  let listener = null;
  const [scrollState, setScrollState] = useState('top');
  const [toggle, setToggle] = useState(false);

  const toggleNav = () => setToggle(!toggle);

  useEffect(() => {
    listener = document.addEventListener('scroll', (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (scrollState !== 'scrolled') {
          setScrollState('scrolled');
        }
      } else {
        if (scrollState !== 'top') {
          setScrollState('top');
        }
      }
    });
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, [scrollState]);

  return (
    <>
      <nav
        className={styles.nav}
        style={{
          background: scrollState === 'top' ? 'transparent' : '#000',
        }}
      >
        <div className={styles.navWrapper}>
          <div className={styles.navLogo}>
            <FaArtstation />
            kash
          </div>
          <div
            className={styles.burgerMenu}
            onClick={() => {
              setScrollState('nav');
              toggleNav();
            }}
          >
            {toggle ? <FaTimes /> : <FaBars />}
          </div>
          <div className={styles.navMenu}>
            <div className={styles.navItem}>
              <Link href='/#home'>
                <a className={styles.navLinks}>Home</a>
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link href='/#about'>
                <a className={styles.navLinks}>About Me</a>
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link href='/#skills'>
                <a className={styles.navLinks}>Skills</a>
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link href='/#work-experience'>
                <a className={styles.navLinks}>Work Experience</a>
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link href='/#projects'>
                <a className={styles.navLinks}>Projects</a>
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link href='/'>
                <a className={styles.navLinks}>Contact Me</a>
              </Link>
            </div>
          </div>
          <div className={styles.socialMenu}>
            <div className={styles.navItem}>
              <Link href='/'>
                <a
                  href='https://github.com/cyberlord-007'
                  target='_blank'
                  className={styles.navLinks}
                >
                  <FaGithub />
                </a>
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link href='/'>
                <a
                  href='www.linkedin.com/in/akash-chaudhary-4b139a165'
                  target='_blank'
                  className={styles.navLinks}
                >
                  <FaLinkedin />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <aside className={toggle ? styles.mobNavActive : styles.mobNav}>
        <div className={styles.mobMenu} onClick={toggleNav}>
          <div className={styles.mobMenuItem}>
            <Link href='/#home'>
              <a className={styles.mobMenuLinks}>Home</a>
            </Link>
          </div>
          <div className={styles.mobMenuItem}>
            <Link href='/#about'>
              <a className={styles.mobMenuLinks}>About Me</a>
            </Link>
          </div>
          <div className={styles.mobMenuItem}>
            <Link href='/#skills'>
              <a className={styles.mobMenuLinks}>Skills</a>
            </Link>
          </div>
          <div className={styles.mobMenuItem}>
            <Link href='/#work-experience'>
              <a className={styles.mobMenuLinks}>Work Experience</a>
            </Link>
          </div>
          <div className={styles.mobMenuItem}>
            <Link href='/#projects'>
              <a className={styles.mobMenuLinks}>Projects</a>
            </Link>
          </div>
          <div className={styles.mobMenuItem}>
            <Link href='/'>
              <a className={styles.mobMenuLinks}>Contact Me</a>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
