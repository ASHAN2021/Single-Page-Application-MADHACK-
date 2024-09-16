import Carousel from 'react-multi-carousel'; // Assuming you're using react-multi-carousel
import 'react-multi-carousel/lib/styles.css';
import goldcup from '../assets/goldcup.png';
import bronzecup from '../assets/bronzecup.png';
import silvercup from '../assets/slivercup.png';

function Prizesection() {
  const responsive = {
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

  // Carousel1 will now include an image with a label and price
  const Carousel1 = ({ logo, title, price }) => {
    return (
      <div className="text-center"> {/* Centering text and image */}
        <img 
          src={logo}
          alt={title}
          style={{
            width: '480px',
            height: '300px',
            objectFit: 'contain',
          }}
        />
        <h2 className="text-white text-2xl font-bold mt-4">{title}</h2>
        <p className="text-white text-xl">{price}</p>
      </div>
    );
  };

  return (
    <>
      <h1 className="text-white font-bold text-5xl pt-24 ml-10">Prizes</h1>
      <div className="w-[200px] h-2 bg-blue-700 mt-10"></div>

      <Carousel
        className='mt-10 ml-40'
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        containerClass="carousel-container w-[75vw]"
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* For each item, pass in the image, title, and price */}
        <Carousel1 logo={goldcup} title="GOLD CUP" price="RS.60000" />
        <Carousel1 logo={silvercup} title="SILVER CUP" price="RS.40000" />
        <Carousel1 logo={bronzecup} title="BRONZE CUP" price="RS.20000" />
      </Carousel>
    </>
  );
}

export default Prizesection;
