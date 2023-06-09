import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Home.module.scss'

export default function Home() {

  return (
    <>
      <Head>
        <title>Swarmtrust</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body}>
        <Header />
      <main className={styles.main}>
          <div className={styles.home}>
          <h1 className={styles.h1}>Hello World</h1>
          <h1 className={styles.h1}>hallo</h1>
          </div>
          
          <div className={styles.container}>
            <h1 className={styles.h1}>Watch Out Together</h1>
          </div>
          <div className={styles.container}>
            <h1 className={styles.h1}>Certification</h1>
          </div>
            
          <div className={styles.container}></div>
        
      </main>
      </div>
    </>
  )
}
