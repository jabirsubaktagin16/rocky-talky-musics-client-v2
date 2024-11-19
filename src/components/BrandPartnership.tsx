import cfmartin from "../assets/brand/cfmartin.png";
import fender from "../assets/brand/fender.png";
import gibson from "../assets/brand/gibson.png";
import harman from "../assets/brand/harman.png";
import kawai from "../assets/brand/kawai.png";
import roland from "../assets/brand/roland.png";
import sennheiser from "../assets/brand/sennheiser.png";
import shure from "../assets/brand/shure.png";
import steinway from "../assets/brand/steinway.png";
import yamaha from "../assets/brand/yamaha.png";

export const BrandPartnership = () => {
  return (
    <section className="pb-10 sm:pb-16 lg:pb-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 sm:text-4xl sm:leading-tight">
            Trusted by renowned instrument manufacturers, music schools, and
            professional bands
          </h2>
        </div>

        <div className="grid items-center max-w-4xl grid-cols-2 mx-auto mt-12 md:mt-20 md:grid-cols-4 gap-x-10 gap-y-16">
          <div>
            <img
              className="object-contain w-full h-6 mx-auto"
              src={yamaha}
              alt="Yamaha"
            />
          </div>

          <div>
            <img
              className="object-contain w-full h-8 mx-auto"
              src={fender}
              alt="Fender"
            />
          </div>

          <div>
            <img
              className="object-contain w-full h-8 mx-auto"
              src={roland}
              alt="Roland"
            />
          </div>

          <div>
            <img
              className="object-contain w-full mx-auto h-7"
              src={cfmartin}
              alt="CF Martin"
            />
          </div>

          <div className="hidden md:block">
            <img
              className="object-contain w-full h-8 mx-auto"
              src={steinway}
              alt="Steinway"
            />
          </div>

          <div className="hidden md:block">
            <img
              className="object-contain w-full h-8 mx-auto"
              src={gibson}
              alt="Gibson"
            />
          </div>

          <div className="hidden md:block">
            <img
              className="object-contain w-full h-8 mx-auto"
              src={shure}
              alt="Shure"
            />
          </div>

          <div className="hidden md:block">
            <img
              className="object-contain w-full h-8 mx-auto"
              src={kawai}
              alt="Kawai"
            />
          </div>

          <div className="hidden md:block">
            <img
              className="object-contain w-full h-20 mx-auto"
              src={harman}
              alt="Harman"
            />
          </div>

          <div className="hidden md:block">
            <img
              className="object-contain w-full mx-auto h-7"
              src={sennheiser}
              alt="Sennheiser"
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-10 space-x-3 md:hidden">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
        </div>
      </div>
    </section>
  );
};
