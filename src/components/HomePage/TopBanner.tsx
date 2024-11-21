import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import one from "../../assets/banner/1.png";
import two from "../../assets/banner/2.png";
import three from "../../assets/banner/3.png";
import four from "../../assets/banner/4.png";
import five from "../../assets/banner/5.png";
import six from "../../assets/banner/6.png";
import seven from "../../assets/banner/7.png";
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
          url={"guitars"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TopBannerFile
          backgroundColor={"bg-[#36a362]"}
          heading={"Experience the Grace of the Violin!"}
          paragraph={
            "Shop our range of violins, from classical to modern styles. Each piece is crafted to deliver the soulful sounds that make the violin unforgettable"
          }
          imgSrc={two}
          url={"violins"}
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
          url={"drums"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TopBannerFile
          backgroundColor={"bg-[#ec8b9f]"}
          heading={"Enchanting Melodies with the Flute!"}
          paragraph={
            "Explore the soothing, ethereal sounds of the flute. Our collection is crafted to produce pure, enchanting tones, perfect for any musical style"
          }
          imgSrc={four}
          url={"flutes"}
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
          url={"keyboards"}
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
          url={"trumpets"}
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
          url={"accordions"}
        />
      </SwiperSlide>
    </Swiper>
  );
};
