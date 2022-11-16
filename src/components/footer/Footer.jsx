import React from 'react'
import style from "./Footer.module.css"
import img1 from "../../assets/chiziq.webp"
import logo from "../../assets/images/logo.webp"
import { InstagramOutlined, FacebookOutlined, YoutubeOutlined, TwitterOutlined, PhoneOutlined, MessageOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={style.Footer}>
            <img className={style.Img1} src={img1} alt="" />
            <div className={style.Img_Block}>
                <img className={style.Img2} src={logo} alt="" />
            </div>
            <div className={style.Block_text}>
                <p>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud equip ex ea commodo consequat... </p>
            </div>
            <div className={style.socilMedia}>
                <div className={style.Media}>
                    <a href="https://www.instagram.com/digitalcityuz/"><InstagramOutlined /></a>
                </div>
                <div className={style.Media}>
                    <a href="https://ru-ru.facebook.com/digitalcityuz/"><FacebookOutlined /> </a>
                </div>
                <div className={style.Media}>
                    <a href="https://www.youtube.com/channel/UCDouP-Wfsl-ZMAiKIApIXWQ"><YoutubeOutlined /> </a>
                </div>
                <div className={style.Media}>
                    <a href="https://twitter.com/?lang=ru"><TwitterOutlined /></a>
                </div>

            </div>
            <div className={style.Link}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/media">Media</NavLink>
                <NavLink to="/news">Yangiliklar</NavLink>
                <NavLink to="/statistic">Statistika</NavLink>
                <NavLink to="/club">Klub</NavLink>
                <NavLink to="/store">Do’kon</NavLink>
                <NavLink to="/academy">Akademiya</NavLink>
            </div>
            <div className={style.addred}>
                <a href="tel:+998972343407"> <PhoneOutlined />
                    +998 97 234 34 07</a>
                <a href="mailto:fc.andijon.com"><MessageOutlined />fc.andijon.com</a>
            </div>
            <h1>© 2000-2021, All Rights Reserved</h1>
        </div>
    )
}

export default Footer