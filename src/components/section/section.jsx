import React from 'react';
import styles from './section.module.css';

const Section = () => {
    return (
        <section className={styles['main-section']}>
            <div className={styles.container}>
                <h1 className={styles.title}>WELCOME TO STRATCOM</h1>
                <p className={styles.subtitle}>
                    Stratcom is a leading provider of strategic communication solutions, helping businesses connect with their audiences effectively.
                </p>
                <p className={styles.description}>
                    We offer tailored strategies, digital campaigns, and media relations to help your business grow and thrive in a competitive market. Our team of experts ensures your message reaches the right audience, at the right time, through the right channels.
                </p>
                <div className={styles['cta-buttons']}>
                    <button className={`${styles.btn} ${styles.primary}`}>Get Started</button>
                    <button className={`${styles.btn} ${styles.secondary}`}>Learn More</button>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                    alt="Teamwork"
                    className={styles['responsive-img']}
                />
            </div>
        </section>
    );
};

export default Section;
