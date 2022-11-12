import React, { useState, useEffect } from "react";
import style from "./DokonCarousel.module.css";
import { CarouselWrapper } from "react-pretty-carousel";

function DokonCarousel() {
    const [items, setItems] = useState(3);

    useEffect(() => {
        if (window.innerWidth < 576) setItems(1);
        else setItems(3);
        window.addEventListener("resize", () => {
            if (window.innerWidth < 576) setItems(1);
            else setItems(3);
        });
    }, []);

    return (
        <div className={style.DokonCarousel}>
        <div className={style.App}>
            <CarouselWrapper items={items} mode="gallery">
                <div className={style.image + " " + style.image1}></div>
                <div className={style.image + " " + style.image2}></div>
                <div className={style.image + " " + style.image3}></div>
                <div className={style.image + " " + style.image4}></div>
                <div className={style.image + " " + style.image5}></div>
                <div className={style.image + " " + style.image6}></div>
            </CarouselWrapper>
        </div>
        </div>
        
    );
}
export default DokonCarousel
