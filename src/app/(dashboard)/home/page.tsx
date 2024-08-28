"use client";
// pages/index.tsx
// pages/index.tsx

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/app/(dashboard)/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Study Groups Improve Understanding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </div>
        <nav className={styles.nav}>
          <a href="#">Profile</a>
          <a href="#">Lecturers Profile</a>
          <a href="#">Applications</a>
          <a href="#">AI</a>
          <a href="#">Help</a>
        </nav>
      </header>

      <header className={styles.hd}>
        <div className={styles.titleSection}>
          <h2>What you</h2>
          <h3>Want to do Today?</h3>
        </div>
        <div className={styles.notification}>
          <Image src="/vector.png" alt="Notification" width={24} height={24} />
        </div>
        </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <Image
            src="/study.png"
            alt="Study Groups"
            layout="fill"
            objectFit="cover"
            className={styles.heroImage}
          />
          <h1 className={styles.heroText}>Study Groups Improve Understanding</h1>
        </section>

        <div className={styles.content}>
          <div className={styles.levels}>
            <h2>Select Your Level To View Courses</h2>
            <div className={styles.levelButtons}>
              <button>Level 100</button>
              <button>Level 200</button>
              <button>Level 300</button>
              <button>Level 400</button>
              <button className={styles.graduatelevel}>Graduate Level</button>
            </div>
      
            {/* Place the catalog button here to position it beneath the Graduate Level button */}
            <button className={styles.catalog}>
              Click Here To View Main Course Catalog
            </button>
          </div>

          <div className={styles.announcements}>
            <h2>Announcements</h2>
            <ul>
              <li>Announcement 1</li>
              <li>Announcement 2</li>
              <li>Announcement 3</li>
            </ul>
          </div>
        </div>
      </main>
      

      <footer className={styles.footer}>
        <p>Follow us on</p>
        <div className={styles.social}>
          <a href="#"><Image src="/facebook.png" alt="Facebook" width={24} height={24} /></a>
          <a href="#"><Image src="/instagram.png" alt="Instagram" width={24} height={24} /></a>
          <a href="#"><Image src="/twitter.png" alt="Twitter" width={24} height={24} /></a>
        </div>
      </footer>
      <footer className={styles.foot}>
        <div className={styles.navIcon}>
          <Image src="/home.png" alt="Home" width={24} height={24} />
        </div>
        <div className={styles.naIcon}>
          <Image src="/plus.png" alt="Add" width={24} height={24} />
        </div>
        <div className={styles.navcon}>
          <Image src="/person.png" alt="Profile" width={24} height={24} />
        </div>
      </footer>
    </div>
  )
}
