import Head from 'next/head'
import { Footer, QueryList } from '../components'
import { container, main, title, description} from '../styles'

const Home = () => {
    return (
        <div className={container}>
            <Head>
                <title>Roadrunner</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={main}>
                <h1 className={title}>
                    Roadrunner
                </h1>

                <p className={description}>
                    A rate analysis library built as a serverless Next.js application to easily query the Graph.
                </p>

                <QueryList />
            </main>

            <Footer />
        </div>
    )
}

export default Home
