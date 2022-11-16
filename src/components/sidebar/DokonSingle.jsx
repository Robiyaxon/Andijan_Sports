import React from 'react';
import { useParams } from 'react-router-dom';
import style from "./DokonSingle.module.css"

export const DokonSingle = (props) => {
  const { currentId } = useParams()

  const map = props.map.map(a => {

    if (currentId == a.id) {
      console.log(a.img);
      return <img src={a.img} alt='' />
    } else {
      return <></>
    }
  })
  return (
    <div className={style.wrapper}>
      <div className={style.Img}>
        {
          map
        }

      </div>
      <div className={style.Block2}>
        <h1>FC ANDIJON TRIKOT HOME 22/23</h1>
        <h2>AB 89,95 €</h2>

        <p>PRODUKTDETAILS
          Artikel-Nr.: 28804
          Offizielle Home Stutzen der Saison 2022/23 vom FC Bayern München
          Eingestrickter Bayern Schriftzug
          Ergonomischer Sitz
          Stützende Trageeigenschaften
          Atmungsaktives Material
          Farbe: rot
          Material: 69% Polyester, 28% Polyamid, 3% Elasthan</p>
        <button>IN DEN WARENKORB</button>
      </div>
      <h4>Total Price: NO Price</h4>
    </div>
  );
};
