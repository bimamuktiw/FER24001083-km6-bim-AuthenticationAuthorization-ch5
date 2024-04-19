import React, { useEffect, useState } from "react";
import { fetcher, getImageURL } from "../../helper/utils";
import Carousel from "../../component/atoms/Carousel";

const LIMIT_CAROUSEL = 10;

export default function AuthLayout({ children }) {
  const [carouselList, setCarouselList] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await fetcher(
        "https://api.themoviedb.org/3/movie/now_playing?page=1"
      );
      setCarouselList(
        data?.results?.filter((_, index) => index < LIMIT_CAROUSEL) || []
      );
    }

    getData();

    if (localStorage.getItem("token") !== null) {
      alert("Tidak perlu login/register lagi, karena token kamu masih aktif kok");
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="min-h-screen -mt-[60px] relative">
      <Carousel>
        {carouselList.map((item, index) => (
          <div
            key={`carousel-${index}`}
            className="flex-[0_0_100%] h-screen bg-slate-400 bg-center bg-cover"
            style={{
              backgroundImage: `url('${getImageURL(item.backdrop_path)}')`,
            }}
          />
        ))}
      </Carousel>
      <div className="absolute z-10 top-0 right-0 w-full h-full flex justify-center items-center px-[20px]">
        <div className="bg-[#1C1C1C] rounded-lg w-full min-w-[300px] max-w-[600px] p-10">
          {children}
        </div>
      </div>
    </div>
  );
}
