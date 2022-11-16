import React from 'react';
import { Link } from 'react-router-dom';
import "./Our_Product.css"
import style from "./Our_Product.module.css"
export const OurProduct = ({myMap}) => {
    const map2 = myMap.map(a =>
        <div className="card" key={a.id}><Link to={`/store/${a.id}`}>
            <div className="content">
                <p className="copy">{a.title}</p>
            </div>
        </Link></div>

    )
    return (
        <div className={style.Our_Product}>
            <h1>Bizning maxsulotlar</h1>
            <div className='Block__Product'>
                {map2}
            </div>
        </div>
    );
};
