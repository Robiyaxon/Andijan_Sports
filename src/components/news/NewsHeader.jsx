import React from 'react'
import style from "./NewsHeader.module.css"
import img from "../../assets/news1.png"
import Team from './team/Team'
const NewsHeader = () => {
    return (
        <div>
            <div className={style.NewsHeader}>
                <div className={style.Block__1}><img src={img} alt="" /></div>
                <div className={style.Block__2}> <h1> The Irish Times Irish Theatre Awards 2022: All the
                    winners revealed</h1></div>
               
            </div> 
            <Team />
        </div>
    )
}

export default NewsHeader