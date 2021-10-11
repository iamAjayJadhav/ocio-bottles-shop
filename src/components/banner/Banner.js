import "../banner/Banner.css";
import ocioBanner1 from "../../images/ocioBanner1.svg";
import ocioBanner2 from "../../images/ocioBanner2.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
function Banner() {
  return (
    <div class="carousel-wrapper" id="banner">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showThumbs={false}
        swipeable={true}
        interval={4000}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
      >
        <div className="image">
          <img src={ocioBanner1} />
        </div>
        <div className="image">
          <img src={ocioBanner2} />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
