import React from 'react'
import  DokonCarousel  from './DokonCarousel'
import { DokonHeader } from './DokonHeader'
import { DokonProduct } from './DokonProduct'
import { Our_Product } from './Our_Product'

const Dokon = () => {
    return (
        <div><DokonHeader />
            <DokonProduct />
            <Our_Product/>
            <DokonCarousel/>
        </div>
    )
}
export default Dokon