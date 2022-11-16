import React from 'react'
import style from "./Team.module.css"
import img1 from "../../../assets/newsTeam1.webp"
import img2 from "../../../assets/teamNews1.webp"
import img3 from "../../../assets/NewsTeam2.webp"
const Team = () => {
  return (
    <div className={style.Team}>
      <div className={style.Blog__1}>
        <img src={img2} alt="" />
        <div className={style.Text}><h1>The Irish Times Irish Theatre Awards 2022:
          All the winners revealed</h1></div>
      </div>
      <div className={style.Blog__1}>
        <img src={img1} alt="" />
        <div className={style.Text}><h1>The Irish Times Irish Theatre Awards 2022:
          All the winners revealed</h1></div>
      </div>
      <div className={style.Blog__1}>
        <img src={img3} alt="" />
        <div className={style.Text}><h1>The Irish Times Irish Theatre Awards 2022:
          All the winners revealed</h1></div>
      </div>
    </div>
  )
}

export default Team