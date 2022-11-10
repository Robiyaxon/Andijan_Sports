import React from 'react'
import style from "./Media.module.css"
import { MediaHeader } from './MediaHeader'
import { MediaTeaxt } from './MediaTeaxt'
const Media = () => {
  return (
    <div className={style.Media}>
        <MediaHeader/>
        <MediaTeaxt/>
    </div>
  )
}
export default Media