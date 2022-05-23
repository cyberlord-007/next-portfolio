import React from 'react';
import styles from '../styles/Hero.module.css';
// import Video from '../videos/video.mp4'
import TypeAnimation from 'react-type-animation';

const Hero = ({ data }) => {
//   const typingSequence = [
//     "Hi, I'm Akash...",
//     5000,
//     'A developer...',
//     5000,
//     'Tech Enthusiast...',
//     5000,
//     'And a Poet...',
//   ];

  return (
    <>
      <div className={styles.heroContainer} id='home'>
        <div className={styles.heroBg}>
          <video
            autoPlay
            loop
            muted
            type='video/mp4'
            className={styles.videoBg}
            src='/videos/video.mp4'
          ></video>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroH1}>Hi, I'm Akash...</h1>
          {/* <TypeAnimation
            cursor={true}
            sequence={typingSequence}
            wrapper='h1'
            className={styles.heroH1}
            repeat={5}
          /> */}
          <p className={styles.heroP}>
            Programmer | Developer | Public Speaker | A Man Of Literature
          </p>
          <a
            href='https://blog.cyberlord007.tech/'
            target='_blank'
            className={styles.heroButton}
          >
            <b>My Blog</b>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
