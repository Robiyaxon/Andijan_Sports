import React from 'react'

import teacher from '../../assets/images/academy_teacher.png'

import styles from './Academy.module.css'

const Academy = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.text_block}>
        <h1>Akademiya</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in
        </p>
      </div>
      <div className={styles.img_block}>
        <img src={teacher} alt="" />
        <h1>Viktor Ko’mikov</h1>
      </div>
    </div>
  )
}

export default Academy
