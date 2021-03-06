import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
        <Head>
            <title>Roadrunner</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
                Roadrunner
            </h1>

            <p className={styles.description}>
                A rate analysis library built as a serverless Next.js application to easily query the Graph.
            </p>

            <div className={styles.grid}>
                <a href="https://nextjs.org/docs" className={styles.card}>
                    <h3>Querying</h3>
                    <p>Query the api by using the route below as an example</p>
                    <code className={styles.code}>https://roadrunner.vercel.app/api/hello</code>
                </a>
            </div>
        </main>

        <footer className={styles.footer}>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
            </a>
        </footer>
        </div>
    )
}

export default Home
