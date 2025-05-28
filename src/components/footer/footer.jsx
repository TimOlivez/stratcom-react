import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer-cont']}>
                <div className={styles.links}>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#careers">Careers</a></li>
                    
                    </ul>
                </div>
                <div className={styles['contact-form']}>
                    <h3>Contact Us</h3>
                    <form>
                        <input type="email" placeholder="Enter your email" required />
                        <textarea placeholder="Your message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <div className={styles.copywrite}>
                <p>&copy; {new Date().getFullYear()} Stratcom. All rights reserved. | Designed by Tim Olivez</p>
            </div>
        </footer>
    );
};

export default Footer;