import React from 'react'
import style from "./Team.module.css"
import img1 from "../../../assets/newsTeam1.png"
import img2 from "../../../assets/teamNews1.png"
import img3 from "../../../assets/NewsTeam2.png"
const Team = () => {
  return (
    <div className={style.Team}>
      <div>
        <img src={img2} alt="" />
        <div className={style.Text}><h1>salom dunyo</h1></div>
      </div>
    </div>
  )
}

export default Team