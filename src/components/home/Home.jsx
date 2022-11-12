import React from 'react'
import { Carousel } from 'antd'

import { dataContainMap } from './datas'

import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.wrap}>
      <Carousel dotPosition={'right'} dots={false} autoplay={true}>
        {dataContainMap}
      </Carousel>
      <div className={styles.statistic}>
        <h1> Statistikalar</h1>
        <div className={styles.statistic__text_block}>
          <p>
            Kegingi Match
            <strong>
              <hr style={{
                height:"2px",
                borderWidth:0,
                color:"#fff",
                backgroundColor:"#fff"
              }}/>
            </strong>
          </p>
          <h6>14:00 : 26 avgust : 2022 yil</h6>
        </div>
      </div>
    </div>
  )
}

export default Home
