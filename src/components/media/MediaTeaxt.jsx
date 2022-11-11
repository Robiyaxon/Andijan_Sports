import React from 'react'
import style from './MediaTeaxt.module.css'
import img1 from '../../assets/mediafoodbal.png'
export const MediaTeaxt = () => {
  return (
    <div className={style.MediaTeaxt}>
      <div className={style.Block1}>
        <h1>Eng mashhur</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim LoremLorem ipsum dolor sit
          amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
          venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus
          non enim Lorem
        </p>
      </div>
      <div className={style.Block2}>
        <img src={img1} alt="" />
        <h1>"Manchester Siti" - "Shaxtyor" - 1:1</h1>
        <h2>27 varaq. 2019</h2>
      </div>
    </div>
  )
}
