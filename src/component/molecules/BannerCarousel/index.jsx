import Carousel from "../../atoms/Carousel";

const bannerMenu = [
  {
    img: "/images/homepage/carousel-1.png",
  },
  {
    img: "/images/homepage/carousel-2.png",
  },
  {
    img: "/images/homepage/carousel-1.png",
  },
  {
    img: "/images/homepage/carousel-2.png",
  },
];

export default function BannerCarousel({ className }) {
  return (
    <Carousel className={className} classNameContainer="-mx-2">
      {bannerMenu.map((item, index) => (
        <div
          key={`carousel-${index}`}
          className="flex-[0_0_100%] xl:flex-[0_0_50%] px-2"
        >
          <img src={item.img} alt={`carousel-${index}`} className="w-full" />
        </div>
      ))}
    </Carousel>
  );
}
