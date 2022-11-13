import React from 'react'
import styles from './Club.module.css'

const Club = () => {
  return (
    <div>
      <header className={styles.head}>
        <h1>BIZNING JAMOA</h1>
      </header>
      <main className={styles.main}>
        <h1>Statistikalar</h1>
        <div className={styles.main_prasent}>
          <h2>71%</h2>
        </div>
      </main>
    </div>
  )
}

export default Club
