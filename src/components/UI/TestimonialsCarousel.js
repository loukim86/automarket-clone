import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import CustomerCard from "./CustomerCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/testimonials-carousel.css";

const TestimonialsCarousel = () => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 6,
        },
      },
    ],
  };

  const handleLeaveReviewClick = () => {
    navigate("/reviews");
  };

  return (
    <div className="container">
      <div className="testimonial-container">
        <div className="testimonial-title">
          <p>WHAT OUR CUSTOMERS SAY</p>
        </div>
        <Slider {...settings}>
          <CustomerCard />
          <CustomerCard />
          <CustomerCard />
          <CustomerCard />
          <CustomerCard />
        </Slider>
        <div className="testimonial-container__button">
          <button
            className="testimonial-button"
            onClick={handleLeaveReviewClick}
          >
            Leave a review
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
