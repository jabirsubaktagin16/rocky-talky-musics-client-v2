import acousticGuitar from "../../assets/categories/accoustic-guitar.png";
import bassGuitar from "../../assets/categories/bass-guitar.png";
import drums from "../../assets/categories/drums.png";
import keyboard from "../../assets/categories/keyboard.png";
import trumpet from "../../assets/categories/trumpet.png";
import violin from "../../assets/categories/violin.png";

export const FeaturedCategories = () => {
  return (
    <section className="flex justify-center">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Explore Our Top Instrument Categories
            </h2>

            <p className="mt-4 text-gray-600">
              Discover a curated selection of our finest musical instrument
              categories, each crafted to suit every musician’s unique style and
              skill level. From classic acoustic guitars and elegant grand
              pianos to cutting-edge digital synthesizers, we have something for
              everyone. Start your musical journey by exploring the instrument
              that speaks to you and unlocks your true potential!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="flex flex-col justify-between text-center rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring h-full">
              <div className="flex items-center justify-center h-full">
                <span className="inline-block rounded-lg p-3">
                  <img
                    src={bassGuitar}
                    className="w-100 h-52 object-contain"
                    alt="Bass Guitar"
                  />
                </span>
              </div>
              <h5 className="mt-2 font-bold">Bass Guitar</h5>
            </div>

            <div className="flex flex-col justify-between text-center rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring h-full">
              <div className="flex items-center justify-center h-full">
                <span className="inline-block rounded-lg p-3">
                  <img
                    src={violin}
                    className="w-100 h-52 object-contain"
                    alt="Violin"
                  />
                </span>
              </div>
              <h5 className="mt-2 font-bold">Violin</h5>
            </div>

            <div className="flex flex-col justify-between text-center rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring h-full">
              <div className="flex items-center justify-center h-full">
                <span className="inline-block rounded-lg p-3">
                  <img
                    src={drums}
                    className="w-100 h-52 object-contain"
                    alt="Drums"
                  />
                </span>
              </div>
              <h5 className="mt-2 font-bold">Drums</h5>
            </div>

            <div className="flex flex-col justify-between text-center rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring h-full">
              <div className="flex items-center justify-center h-full">
                <span className="inline-block rounded-lg p-3">
                  <img
                    src={acousticGuitar}
                    className="w-100 h-52 object-contain"
                    alt="Acoustic Guitar"
                  />
                </span>
              </div>
              <h5 className="mt-2 font-bold">Acoustic Guitar</h5>
            </div>

            <div className="flex flex-col justify-between text-center rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring h-full">
              <div className="flex items-center justify-center h-full">
                <span className="inline-block rounded-lg p-3">
                  <img
                    src={keyboard}
                    className="w-100 h-52 object-contain"
                    alt="Keyboard"
                  />
                </span>
              </div>
              <h5 className="mt-2 font-bold">Keyboard</h5>
            </div>

            <div className="flex flex-col justify-between text-center rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring h-full">
              <div className="flex items-center justify-center h-full">
                <span className="inline-block rounded-lg p-3">
                  <img
                    src={trumpet}
                    className="w-100 h-52 object-contain"
                    alt="Trumpet"
                  />
                </span>
              </div>
              <h5 className="mt-2 font-bold">Trumpet</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
