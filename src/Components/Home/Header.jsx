import React from "react";
import Sliders from "react-slick";

// Img
import Header1 from "./../../assets/Header/h1.jpg";
import Header2 from "./../../assets/Header/h2.jpg";
import Header3 from "./../../assets/Header/h3.jpg";

// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderCss from "./Css/Header.module.css";

export default function Header() {
  const mapImg = [Header1, Header2, Header3];

  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={HeaderCss.SlideShow}>
      <div className={HeaderCss.slideDiv}>
        <Sliders {...settings} className={HeaderCss.Hslide}>
          {HeaderData ? (
            <>
              {mapImg.map((value, key) => {
                return (
                  <div className={HeaderCss.slide}>
                    <img
                      src={require(`${value.img}`)}
                      className={HeaderCss.ImgHeader}
                    />
                  </div>
                );
              })}
            </>
          ) : (
            ""
          )}
          {/* <div className={HeaderCss.slide}>
            <img src={img1} className={HeaderCss.ImgHeader} />
          </div>
          <div className={HeaderCss.slide}>
            <img src={img2} className={HeaderCss.ImgHeader} />
          </div>
          <div className={HeaderCss.slide}>
            <img src={img3} className={HeaderCss.ImgHeader} />
          </div> */}
        </Sliders>
      </div>
    </div>
  );
}
