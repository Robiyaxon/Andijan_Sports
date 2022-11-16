import React from 'react';
import { Link } from 'react-router-dom';
import "./Our_Product.css"
import style from "./Our_Product.module.css"
export const OurProduct = ({ myMap }) => {
    const map2 = myMap.map(a =>
        <Link to={`/store/${a.id}`} key={a.id} className="card">
            <div  key={a.id}>
                <div className="content">
                    <p className="copy">{a.title}</p>
                </div>
            </div> </Link>



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
