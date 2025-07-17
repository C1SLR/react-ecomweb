import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import "./styles.css";
function Rental_Reveiws() {
  return (
    <section className="flex justify-center">
      <div className="w-12/12">
        <div class="bg-blue-50 text-center">
          <div>
            <h1 class="font-semibold text-2xl uppercase pt-10 p-2">
              rental reviews
            </h1>
            <p class="mx-10 text-gray-400">
              To an English person, it will seem like simplified English, as a
              skeptical Cambridge friend of mine told me what Occidental is.
            </p>
          </div>
          <div className="m-5">
            <div class="md:flex justify-evenly gap-5 m-1 py-5 hidden">
              <div class="flex flex-wrap gap-5 bg-white items-center rounded-2xl p-3">
                <img src="/src/assets/elina doe.png" alt="elina" class="w-12" />
                <div class="flex-col">
                  <p class="text-blue-500 font-bold">Elina Doe</p>
                  <sub>
                    <i class="text-gray-400">Happy Client</i>
                  </sub>
                </div>
                <div class="text-start">
                  <p class="text-sm text-gray-400">
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium dolore laudantium tatam rem aperiam,
                    eaque ipsa quae ab"
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap gap-5 bg-white items-center rounded-2xl p-3">
                <img src="/src/assets/david doe.png" alt="david" class="w-12" />
                <div class="flex-col">
                  <p class="text-blue-500 font-bold">David Doe</p>
                  <sub>
                    <i class="text-gray-400">Happy Client</i>
                  </sub>
                </div>
                <div class="text-start">
                  <p class="text-sm text-gray-400">
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium dolore laudantium tatam rem aperiam,
                    eaque ipsa quae ab"
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap gap-5 bg-white items-center rounded-2xl p-3">
                <img
                  src="/src/assets/marina doe.png"
                  alt="marina"
                  class="w-12"
                />
                <div class="flex-col">
                  <p class="text-blue-500 font-bold">Marina Doe</p>
                  <sub>
                    <i class="text-gray-400">Happy Client</i>
                  </sub>
                </div>
                <div class="text-start">
                  <p class="text-sm text-gray-400">
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium dolore laudantium tatam rem aperiam,
                    eaque ipsa quae ab"
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap gap-5 bg-white items-center rounded-2xl p-3">
                <img
                  src="/src/assets/charles doe.png"
                  alt="charles"
                  class="w-12"
                />
                <div class="flex-col">
                  <p class="text-blue-500 font-bold">Elina Doe</p>
                  <sub>
                    <i class="text-gray-400">Happy Client</i>
                  </sub>
                </div>
                <div class="text-start">
                  <p class="text-sm text-gray-400">
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium dolore laudantium tatam rem aperiam,
                    eaque ipsa quae ab"
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden">
          <Swiper className="mySwiper">
            <SwiperSlide>
              <div class="bg-white flex flex-wrap items-center gap-5 rounded-lg p-10 m-5">
                <div>
                  <img src="/src/assets/elina doe.png" alt="elina" />
                </div>
                <div>
                  <p class="text-blue-500 font-bold">Elina Doe</p>
                  <sub>
                    <i class="text-gray-400">Happy Client</i>
                  </sub>
                </div>
                <div class="text-start">
                  "Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium dolore laudantium tatam rem aperiam,
                  eaque ipsa quae ab"
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="bg-white flex flex-wrap items-center gap-5 rounded-lg p-10 m-5">
                <div>
                  <img src="/src/assets/david doe.png" alt="david" />
                </div>
                <div>
                  <p class="text-blue-500 font-bold">David Doe</p>
                  <sub>
                    <i class="text-gray-400">Happy Client</i>
                  </sub>
                </div>
                <div class="text-start">
                  "Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium dolore laudantium tatam rem aperiam,
                  eaque ipsa quae ab"
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="bg-white flex flex-wrap items-center gap-5 rounded-lg p-10 m-5">
                <div>
                  <img src="/src/assets/marina doe.png" alt="marina" />
                </div>
                <div>
                  <p class="text-blue-500 font-bold">Marina Doe</p>
                  <sub>
                    <i class="text-gray-400">Happy Client</i>
                  </sub>
                </div>
                <div class="text-start">
                  "Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium dolore laudantium tatam rem aperiam,
                  eaque ipsa quae ab"
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="bg-white flex flex-wrap items-center gap-5 rounded-lg p-10 m-5">
                <div>
                  <img src="/src/assets/charles doe.png" alt="charles" />
                </div>
                <div>
                  <p class="text-blue-500 font-bold">Charles Doe</p>
                  <sub>
                    <i class="text-gray-400">Happy Client</i>
                  </sub>
                </div>
                <div class="text-start">
                  "Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium dolore laudantium tatam rem aperiam,
                  eaque ipsa quae ab"
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        </div>
      </div>
    </section>
  );
}
export default Rental_Reveiws;
