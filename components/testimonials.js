import Link from 'next/link';
import {FaStarHalf, FaStar} from 'react-icons/fa'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./buttongroup";


const Card = ({ star, title, imgSrc, text }) => {
  return (
    <div className="mx-2 flex flex-col gap-4 select-none cursor-pointer border border-yellow m-10 p-10 rounded-lg hover:shadow-xl transition-all">
      <div className="flex text-gold">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
       
        {star}
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="leading-loose">
        {text}
      </p>
      <div className="flex items-center gap-4 mt-5">
        <img src={imgSrc} width={50} height={50} alt="Lawrencegebäudereinigung testimonials" />
        <div>
          <h3 className="font-semibold">Naseem Khan</h3>
          <Link
            href="https://github.com/NaseemKhan005"
            target="_blank"
            className="text-rose-600 font-[500]"
          >
            @naseemkhan
          </Link>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5 mt-10"
      id="testimonial"
    >
      <div>
        <h2 className="title text-3xl md:text-4xl font-bold text-center lg:text-center">Meet Client Satisfaction</h2>
      </div>
      <Carousel {...carouselParams}>
        <div>
          <Card
            star={<FaStarHalf />}
            title="Modern look & trending design"
            imgSrc='/assets/testimonials/1.png'
            text="Great job as always"
          />
        </div>
        <div>
          <Card
            title="Layout and organized layers"
            imgSrc='/assets/testimonials/2.png'
            text="Great work and excellent service"
          />
        </div>
        <div>
          <Card
            star={<FaStar />}
            title="Design Quality & performance"
            imgSrc='/assets/testimonials/3.png'
            text="Very good hospitality service"
          />
        </div>
        <div>
          <Card
            star={<FaStarHalf />}
            title="Layout and organized layers"
            imgSrc='/assets/testimonials/4.png'
            text="Excellent service"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPLaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
