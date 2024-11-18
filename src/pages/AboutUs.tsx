import aboutUs from "../assets/jazz band-cuate.png";
import { BrandPartnership } from "../components/BrandPartnership";
import { PageTitle } from "../components/Shared/PageTitle";

export const AboutUs = () => {
  return (
    <section>
      <PageTitle title={"About Us"} />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src={aboutUs}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Your Sound, Our Passion!
            </h2>

            <p className="mt-4 text-gray-600">
              At our musical instruments e-commerce platform, we’re driven by
              one goal: to bring the magic of music into your hands. From
              seasoned professionals to aspiring musicians, we provide a curated
              selection of top-quality instruments, crafted by world-class
              manufacturers. Our passion for music is reflected in every product
              we offer, ensuring that you find the perfect sound for your
              journey. Join us in celebrating the art of music and discover
              instruments that inspire greatness.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-primary-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-700 focus:outline-none focus:ring focus:ring-secondary-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
      <BrandPartnership />
    </section>
  );
};
