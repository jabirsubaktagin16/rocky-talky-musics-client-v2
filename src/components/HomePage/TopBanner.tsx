import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import one from "../../../public/banner/1.png";
import two from "../../../public/banner/2.png";
import three from "../../../public/banner/3.png";
import four from "../../../public/banner/4.png";
import five from "../../../public/banner/5.png";
import six from "../../../public/banner/6.png";
import seven from "../../../public/banner/7.png";
import { TopBannerFile } from "../TopBannerFile";

export const TopBanner = () => {
  const pagination = {
    clickable: true,
  };

  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={pagination}
      effect={"fade"}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      style={{
        "--swiper-pagination-color": "#fff",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "12px",
      }}
    >
      <SwiperSlide>
        <TopBannerFile
          backgroundColor={"bg-[#221236]"}
          heading={"Feel the Depth of Bass Guitar!"}
          paragraph={
            "Discover bass guitars that bring depth to any song. Essential for setting the groove, our bass selection adds the perfect pulse to your music collection"
          }
          imgSrc={one}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TopBannerFile
          backgroundColor={"bg-[#36a362]"}
          heading={"Experience the Grace of the Violin!"}
          paragraph={
            "Shop our range of violins, from classical to modern styles. Each piece is crafted to deliver the beautiful, soulful sounds that make the violin unforgettable"
          }
          imgSrc={two}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TopBannerFile
          backgroundColor={"bg-[#f17831]"}
          heading={"Unleash the Beat with Drums!"}
          paragraph={
            "Our drum collection has everything to bring your beat to life. Whether for studio or stage, find drum sets that lay down an energetic foundation"
          }
          imgSrc={three}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TopBannerFile
          backgroundColor={"bg-[#21467a]"}
          heading={"Strum into Expression with Guitars!"}
          paragraph={
            "Explore our guitars to find your perfect sound. From acoustic warmth to electric flair, each guitar is crafted for musicians of every style"
          }
          imgSrc={four}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TopBannerFile
          backgroundColor={"bg-[#2f1650]"}
          heading={"Discover Harmony with Keyboards!"}
          paragraph={
            "Our keyboards deliver harmonies across genres. With versatile models to choose from, find the right fit for your music journey"
          }
          imgSrc={five}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TopBannerFile
          backgroundColor={"bg-[#d83725]"}
          heading={"Ignite Your Sound with Trumpets!"}
          paragraph={
            "Browse trumpets designed for vibrant, clear sound. Perfect for jazz, classical, or marching bands, each trumpet brings unmatched clarity and style"
          }
          imgSrc={six}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TopBannerFile
          backgroundColor={"bg-[#da8d49]"}
          heading={"Capture the Spirit with Accordions!"}
          paragraph={
            "Add character to your music with our accordion selection. Known for its dynamic sound, the accordion captures the spirit of folk traditions beautifully"
          }
          imgSrc={seven}
        />
      </SwiperSlide>
    </Swiper>
  );
};
