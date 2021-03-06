import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion";

const Home: NextPage = () => {
  return (
    <motion.div className={styles.container} exit={{ opacity: 0 }} initial={{x: -1000}} animate={{ x: 0 }}>
      <Head>
        <title>twutter</title>
        <meta name="description" content="weekly project" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">twutter</a>
        </h1>

        <p className={styles.description}>
          posts will be displayed here
        </p>

      
        <div className={styles.grid}>
          <Link href="post">
          <motion.a className={styles.card}
          whileHover={{scale:0.8 }}>

            <h2>Post &rarr;</h2>
            <p>attempts</p>
          </motion.a>
          </Link>

          <Link href="">
          <motion.a className={styles.card}
          whileHover={{scale:0.8 }}>
            <h2>Profile &rarr;</h2>
            <p>prepare to be pixelated</p>
          </motion.a>
          </Link>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
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
          <span className={styles.logo}>
            <Image src="/icon.png" alt="Icon png" width={40} height={40} />
          </span>
        </a>
      </footer>
    </motion.div>

  )
}

export default Home
