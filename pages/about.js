import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About Us - NSO Mongolia</title>
                <meta name="description" content="Learn more about NSO Mongolia" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    About NSO Mongolia
                </h1>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h2>Our Mission</h2>
                        <p>
                            We are dedicated to providing innovative solutions and services to our community.
                            Our goal is to make a positive impact through technology and collaboration.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h2>Our Vision</h2>
                        <p>
                            To be the leading technology provider in Mongolia, driving digital transformation
                            and creating opportunities for growth and development.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h2>Contact Us</h2>
                        <p>
                            Email: info@nsomongolia.mn<br />
                            Phone: +976 12345678<br />
                            Address: Ulaanbaatar, Mongolia
                        </p>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>© 2024 NSO Mongolia. All rights reserved.</p>
            </footer>
        </div>
    );
} 