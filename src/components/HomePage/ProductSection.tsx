import { FC } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomePageProductSection } from "../../types/homepageproductsection";
import { ProductProps } from "../../types/product";
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
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          autoplay={{
            delay: Math.floor(Math.random() * (2600 - 2500 + 1)) + 2600,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper mt-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4"
          loop={true}
          style={{
            "--swiper-navigation-size": "12px",
          }}
        >
          {arrayList?.map((product: ProductProps) => (
            <SwiperSlide key={product?._id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
