import React from 'react'
import style from "./Homiy.module.css"
import img from "../../assets/addidas.png"
import img2 from "../../assets/futbolniyclube.png"
import img3 from "../../assets/utbolTV.png"
import img4 from "../../assets/Cheevrolet.png"

const Homiy = () => {
    return (
        <div className={style.Homiy}>
            <hr color='red' width="100%" />
            <div className={style.Logo}>
                <img src={img} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
            <hr color='red' width="100%" />
        </div>
    )
}

export default Homiy