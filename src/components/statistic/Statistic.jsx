import React from 'react'

import liga from '../../assets/images/home_liga.webp'

import { Statistic } from './../home/Home'

import styles from './Statistic.module.css'
import { statistic_main_data } from './../home/datas'

const MyStatistic = () => {
  const dataMap = statistic_main_data.map((d) => (
    <div className={styles.main_block} key={d.id}>
      <div className={styles.main_block__title}>
        <h1>{d.matchDate}</h1>
        <img src={liga} alt="" />
        <h2>{d.matchTime}</h2>
      </div>
      <main className={styles.main_block__main}>
        <div className={styles.main_block__main_club}>
          <strong>{d.id}</strong>
          <img src={d.club1_logo} alt="" />
          <h2>{d.club1_name}</h2>
        </div>
        <div className={styles.main_block__main_num}>
          <h6>{d.club1_num} </h6>|<p>{d.club2_num}</p>
        </div>
        <div className={styles.main_block__main_club}>
          <h2>{d.club2_name}</h2>
          <img src={d.club2_logo} alt="" />
        </div>
      </main>
      <hr
        style={{
          background: '#fff',
          marginTop: '15px',
          marginBottom: '40px',
        }}
      />
    </div>
  ))

  return (
    <>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <div>
            <h1>Pro liga</h1>
            <h1>2022</h1>
          </div>
          <p>O’yinlar</p>
        </header>
        <main className={styles.main}>
          <div className={styles.main_title}>
            NATIJALAR
            <hr
              style={{
                background: '#fff',
              }}
            />
          </div>
          {dataMap}
        </main>
      </div>
      <Statistic />
    </>
  )
}

export default MyStatistic
