import React from 'react'
import  DokonCarousel  from './DokonCarousel'
import { DokonHeader } from './DokonHeader'
import { DokonProduct } from './DokonProduct'
import { OurProduct } from './Our_Product'

const Dokon = (props) => {
    return (
        <div><DokonHeader />
            <DokonProduct />
            <OurProduct myMap={props.map}/>
            <DokonCarousel/>
        </div>
    )
}
export default Dokon