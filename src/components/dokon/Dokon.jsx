import React from 'react'
import  DokonCarousel  from './DokonCarousel'
import { DokonHeader } from './DokonHeader'
import { DokonProduct } from './DokonProduct'
import { Our_Product } from './Our_Product'

const Dokon = (props) => {
    return (
        <div><DokonHeader />
            <DokonProduct />
            <Our_Product map={props.map}/>
            <DokonCarousel/>
        </div>
    )
}
export default Dokon