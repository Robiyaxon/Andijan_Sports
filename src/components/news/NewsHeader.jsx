import React from 'react'
import Team from './team/Team'
import Videos from './videos/Videos'
import { NewsImg } from './NewsImg'
import video from "../../assets/Videos.png"
import style from "./videos/Videos.module.css"
import { NewsHeader1 } from './NewsHeader1'
const NewsHeader = () => {
    return (
        <div>
            <NewsHeader1/>
            <NewsImg />
            <Team />
            <div className={style.Videos} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <img src={video} alt="" />
            </div>
            <Videos />

        </div>
    )
}
export default NewsHeader