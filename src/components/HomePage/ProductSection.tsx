import React, { FC } from "react";
import { HomePageProductSection } from "../../types/homepageproductsection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ProductCard } from "../ProductCard";

export const ProductSection: FC<HomePageProductSection> = ({
  title,
  paragraph,
  arrayList,
  productsToBeDisplayed,
}) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            {title}
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500">{paragraph}</p>
        </header>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          loop={true}
          style={{
            "--swiper-navigation-size": "12px",
          }}
        >
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
