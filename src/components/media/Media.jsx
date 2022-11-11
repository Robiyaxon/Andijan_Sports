import React from 'react'
import Videos from '../news/videos/Videos'
import style from "./Media.module.css"
import { MediaHeader } from './MediaHeader'
import { MediaTeaxt } from './MediaTeaxt'
const Media = () => {
    return (
        <div className={style.Media}>
            <MediaHeader />
            <MediaTeaxt />
            <Videos />
        </div>
    )
}
export default Media