import Slider from "react-slick";
import classes from "./WomensCollectionSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function WomensCollectionSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div className={classes.carrouselPlaceholderImage}>
        <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
          <span
            className="caption1-slide1 m-text1 t-center m-b-15"
            data-appear="fadeInDown"
          >
            Women Collection 2018
          </span>

          <h2
            className="caption2-slide1 xl-text1 t-center m-b-37"
            data-appear="fadeInUp"
          >
            New arrivals
          </h2>

          <div className="wrap-btn-slide1 w-size1" data-appear="zoomIn">
            {/** Button */}
            <a
              href="product.html"
              className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      <div className={classes.carrouselPlaceholderImage}>
        <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
          <span
            className="caption1-slide1 m-text1 t-center m-b-15"
            data-appear="fadeInDown"
          >
            Women Collection 2018
          </span>

          <h2
            className="caption2-slide1 xl-text1 t-center m-b-37"
            data-appear="fadeInUp"
          >
            New arrivals
          </h2>

          <div className="wrap-btn-slide1 w-size1" data-appear="zoomIn">
            {/** Button */}
            <a
              href="product.html"
              className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      <div className={classes.carrouselPlaceholderImage}>
        <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
          <span
            className="caption1-slide1 m-text1 t-center m-b-15"
            data-appear="fadeInDown"
          >
            Women Collection 2018
          </span>

          <h2
            className="caption2-slide1 xl-text1 t-center m-b-37"
            data-appear="fadeInUp"
          >
            New arrivals
          </h2>

          <div className="wrap-btn-slide1 w-size1" data-appear="zoomIn">
            {/** Button */}
            <a
              href="product.html"
              className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </Slider>
  );
}
