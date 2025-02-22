import React from 'react'
import { getImageUrl } from '../../utils';


import styles from "./Hero.module.css";
export const Hero = () => {
    return (
    <section className={styles.container}> 
        <div className={styles.content}>
            <h1 className={styles.title}>Hi,I'm Harishan</h1>
            <p className={styles.description}>I'm a full-stack developer with using React & NodeJs.Reach out if you like to learn more </p>
            <a className={styles.contactBtn} href="#about">See More</a>

        </div>

        <img className={styles.heroImg} src={getImageUrl("cv_pic.jpg")} alt='HeroImage'/>
    <div className={styles.topBlur} />
    <div className={styles.bottoBlur} />

    </section>
    
    );
};
