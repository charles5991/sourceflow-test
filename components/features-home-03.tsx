"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import Link from "next/link";

const FeatureHome03 = () => {
  return (
    <section className=" lg:py-10 bg-white">
      <div className=" text-center text-[#0E2152] font-helvetica md:text-[56px] text-[30px] text-30px font-bold leading-[84px] tracking-[-1px]">
        <p>Our sectors</p>
      </div>

      <div className="px-8 md:px-32 md:py-8">
        <div className="swiper-wrapper">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView="auto"
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".project-slider-button-next",
              prevEl: ".project-slider-button-prev",
            }}
            breakpoints={{
              390: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1000: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <div
                className="relative rounded-3xl border border-transparent transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark"
                style={{
                  backgroundImage: 'url("/images/sector1.svg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "300px",
                }}
              >
                {/* <div
                  className="relative flex rounded-xl flex-col md:flex-row md:justify-between h-full px-8 py-12 shadow-lg"
                  data-aos="fade-up"
                >
                  <div className="text-white font-helvetica font-bold leading-normal self-center text-[22px]">
                    Software engineering
                  </div>
                  <div className="py-3 rounded">
                    <a
                      className="btn-sm font-helvetica text-[#064EA4] bg-white w-full group"
                      href="#0"
                    >
                      View this job
                    </a>
                  </div>
                </div> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="relative rounded-3xl border border-transparent transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark"
                style={{
                  backgroundImage: 'url("/images/sector2.svg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "300px",
                }}
              >
                {/* <div
                  className="relative flex rounded-xl flex-col md:flex-row md:justify-between h-full px-8 py-12 shadow-lg"
                  data-aos="fade-up"
                >
                  <div className="text-white font-helvetica font-bold leading-normal self-center text-[22px]">
                    Software engineering
                  </div>
                  <div className="py-3 rounded">
                    <a
                      className="btn-sm font-helvetica text-[#064EA4] bg-white w-full group"
                      href="#0"
                    >
                      View this job
                    </a>
                  </div>
                </div> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="relative rounded-3xl border border-transparent transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark"
                style={{
                  backgroundImage: 'url("/images/sector1.svg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "300px",
                }}
              >
                {/* <div
                  className="relative flex rounded-xl flex-col md:flex-row md:justify-between h-full px-8 py-12 shadow-lg"
                  data-aos="fade-up"
                >
                  <div className="text-white font-helvetica font-bold leading-normal self-center text-[22px]">
                    Software engineering
                  </div>
                  <div className="py-3 rounded">
                    <a
                      className="btn-sm font-helvetica text-[#064EA4] bg-white w-full group"
                      href="#0"
                    >
                      View this job
                    </a>
                  </div>
                </div> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="relative rounded-3xl border border-transparent transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark"
                style={{
                  backgroundImage: 'url("/images/sector2.svg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "300px",
                }}
              >
                {/* <div
                  className="relative flex rounded-xl flex-col md:flex-row md:justify-between h-full px-8 py-12 shadow-lg"
                  data-aos="fade-up"
                >
                  <div className="text-white font-helvetica font-bold leading-normal self-center text-[22px]">
                    Software engineering
                  </div>
                  <div className="py-3 rounded">
                    <a
                      className="btn-sm font-helvetica text-[#064EA4] bg-white w-full group"
                      href="#0"
                    >
                      View this job
                    </a>
                  </div>
                </div> */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 md:px-32 px-8 py-4">
        <div className="flex gap-4">
          <button
            type="button"
            className="project-slider-button-prev flex h-10 w-10 items-center justify-center rounded-full  transition hover:bg-secondary dark:hover:bg-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M3.33331 20.5206C3.33331 29.7206 10.8 37.1872 20 37.1872C29.2 37.1872 36.6667 29.7206 36.6667 20.5206C36.6667 11.3205 29.2 3.85388 20 3.85388C10.8 3.85388 3.33331 11.3205 3.33331 20.5206ZM20 18.8539H26.6667V22.1872H20V27.1872L13.3333 20.5206L20 13.8539V18.8539Z"
                fill="#0E2152"
                fill-opacity="0.5"
              />
            </svg>
          </button>
          <button
            type="button"
            className="project-slider-button-next text-p flex h-10 w-10 items-center justify-center rounded-full  transition hover:bg-secondary dark:hover:bg-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M36.6667 20.0411C36.6667 10.8411 29.2 3.37439 20 3.37439C10.8 3.37439 3.33331 10.8411 3.33331 20.0411C3.33331 29.2411 10.8 36.7077 20 36.7077C29.2 36.7077 36.6667 29.2411 36.6667 20.0411ZM20 21.7077H13.3333V18.3744H20V13.3744L26.6667 20.0411L20 26.7077V21.7077Z"
                fill="#5C5C5C"
              />
            </svg>
          </button>
        </div>
        <div className="flex item-center gap-6">
          <Link
            href="/"
            className="text-sm font-extrabold text-[#0E2152] transition hover:text-secondary dark:text-white dark:hover:text-secondary p-2"
          >
            More on our sectors{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureHome03;
