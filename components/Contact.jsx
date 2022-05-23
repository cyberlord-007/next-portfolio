import React from 'react';
import styles from '../styles/Contact.module.css';
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';


const Contact = () => {
  return (
    <>
      <div className={styles.contactContainer} id='contact'>
        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <p className={styles.infoTitle}>CONTACT ME</p>
            <div className={styles.infoText}>
              <p>
                I feel glad that you stayed till the very end,hope you got to
                know me enough that maybe we can meet sometime and have a little
                chit chat. And more importantly if you need any help figuring
                out anything techy that has left you scratching your head for a
                while,i'm your man.
              </p>
            </div>
          </div>
          <div className={styles.socialInfo}>
            <p className={styles.infoTitle}>Reach me out at</p>
            <div className={styles.infoRow}>
              <a
                className={styles.socialIcons}
                href='mailto:akash.hireme@outlook.com'
              >
                <SiGmail size='45' color='#EA4335' />
              </a>
              <a
                className={styles.socialIcons}
                href='https://www.facebook.com/profile.php?id=100006504608312'
                target='_blank'
              >
                <FaFacebookSquare size='43' color='#1873EA' />
              </a>
              <a
                className={styles.socialIcons}
                href='https://www.linkedin.com/in/akash-chaudhary-4b139a165'
                target='_blank'
              >
                <FaLinkedin size='43' color='#0073B1' />
              </a>
              <a
                className={styles.socialIcons}
                href='https://www.instagram.com/mr_madjack/'
                target='_blank'
              >
                <FaInstagram size='45' color='#CA4E8F' />
              </a>
            </div>
            <p className={styles.infoTitle}>Or you can</p>
            <div className={styles.coffeeButton}>
              <a
                href='https://www.buymeacoffee.com/cyberlord007'
                target='_blank'
              >
                <img src='/images/yellow-button.png' alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
