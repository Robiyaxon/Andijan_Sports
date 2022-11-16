import React from 'react'
import { Carousel } from 'antd'

import andijan_club from '../../assets/images/home_andijan_club.png'
import bunyodkor_club from '../../assets/images/home_bunyodkor_club.png'
import DokonCarousel from './../dokon/DokonCarousel'
import Academy from './Academy'

import { dataContainMap, statistic_dataMap } from './datas'

import styles from './Home.module.css'

export const Statistic = () => {
  return (
    <div className={styles.statistic}>
      <h1> Statistikalar</h1>
      <div className={styles.statistic_wrap}>
        <div className={styles.statistic__text_block}>
          <div className={styles.match}>
            <p>Kegingi Match</p>
            <hr
              style={{
                height: '2px',
                borderWidth: 0,
                color: '#fff',
                backgroundColor: '#fff',
              }}
            />
          </div>

          <h6>14:00 : 26 avgust : 2022 yil</h6>
          <div className={styles.statistic__text_block__clubs}>
            <div>
              <img src={andijan_club} alt="" />
              <h2>Andijon</h2>
            </div>
            <h2>VS</h2>
            <div>
              <img src={bunyodkor_club} alt="" />
              <h2>Bunyodkor</h2>
            </div>
          </div>
          <h6
            style={{
              width: '40%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            14:00 : 26 avgust 2022 yil
          </h6>
        </div>
        <div className={styles.statistic__main_block}>{statistic_dataMap}</div>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div className={styles.wrap}>
      <Carousel dotPosition={'right'} dots={false} autoplay={true}>
        {dataContainMap}
      </Carousel>
      <Statistic />
      <DokonCarousel />
      <Academy />
    </div>
  )
}

export default Home
