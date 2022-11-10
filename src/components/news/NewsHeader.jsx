import React from 'react'
import Team from './team/Team'
import Videos from './videos/Videos'
import { NewsImg } from './NewsImg'
const NewsHeader = () => {
    return (
        <div>
            <NewsImg />
            <Team />
            <Videos />

        </div>
    )
}
export default NewsHeader