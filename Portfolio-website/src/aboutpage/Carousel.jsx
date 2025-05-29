import Slider from "react-slick";
import painting1 from "./images/painting1.png";
import painting2 from "./images/painting2.png";
import painting3 from "./images/painting3.png";
import painting4 from "./images/painting4.png";
import painting5 from "./images/painting5.png";
import painting6 from "./images/painting6.png";
import "/src/index.css"

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2500,
    pauseOnHover: true
  };

  const images = [
    painting1,
    painting2,
    painting3,
    painting4,
    painting5,
    painting6
  ];

  return (
     <div className="carousel-wrapper">
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i} className="carousel-slide">
            <div className="carousel-img-wrapper">
              <img src={src} alt={`Slide ${i}`} className="carousel-img" />
              <div className="overlay" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
