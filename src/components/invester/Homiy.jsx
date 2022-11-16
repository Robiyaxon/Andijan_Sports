import React from 'react'
import style from "./Homiy.module.css"
import img from "../../assets/addidas.webp"
import img2 from "../../assets/futbolniyclube.webp"
import img3 from "../../assets/utbolTV.webp"
import img4 from "../../assets/Cheevrolet.webp"

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