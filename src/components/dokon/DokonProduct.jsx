import React from 'react';
import style from "./DokonProduct.module.css"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/img1dokon.png"
import img2 from "../../assets/dokon4.png"
import img3 from "../../assets/dokon1.png"
export const DokonProduct = () => {
    return (
        <div className={style.DokonProduct}>
            <h1>New Products</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim Lorem</p>
            <div className={style.Wrapper}>
                <div className={style.Block__1}>

                    <Carousel
                        className="carouselwrapper3"
                        autoPlay={true}
                        showArrows={false}
                        showIndicators={false}
                        showStatus={false}
                        showThumbs={false}
                        transitionTime={200}
                        infiniteLoop={true}
                        stopOnHover={false}
                    >
                        <div className={style.Block}>
                            <img src={img1} alt="" />
                        </div>
                        <div className={style.Block}>
                            <img src={img2} alt="" />
                        </div>
                        <div className={style.Block}>
                            <img src={img3} alt="" />
                        </div>

                    </Carousel>
                </div>
                <div className={style.Block__2}>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna </h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim LoremLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim Lorem</h2>
                </div>
            </div>

        </div>
    );
};
