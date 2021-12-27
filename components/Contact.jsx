import React from 'react';
import styles from '../styles/Contact.module.css';
import {FaEnvelope,FaFacebookSquare,FaLinkedin,FaInstagram} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const Contact = () => {
  return (
    <>
      <div className={styles.contactContainer}>
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
          <div className={styles.contactInfo}>
            <p className={styles.infoTitle}>Reach me out at</p>
            <div className={styles.infoRow}>
                <SiGmail size='45' color='#EA4335'/>
                <FaFacebookSquare size='43' color='#1873EA'/>
                <FaLinkedin size='43' color='#0073B1' />
                <FaInstagram size='45' color='#CA4E8F'/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
