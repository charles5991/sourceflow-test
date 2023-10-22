"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import Link from "next/link";

const ProjectSlider = () => {
  return (
    <section className=" lg:py-10 bg-[#D7E7FB]">
      <div className=" text-center text-[#0E2152] font-helvetica md:text-[56px] text-[30px] font-bold leading-[84px] tracking-[-1px]">
        <p>Latest Jobs</p>
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
              600: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="relative rounded-3xl border border-transparent bg-[#FCDF69] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                <div
                  className="relative flex rounded-xl flex-col h-full px-8 py-12 shadow-lg"
                  data-aos="fade-up"
                >
                  <div className="mb-2 pb-4">
                    <div className="flex items-center gap-2 bg-white rounded-md w-24">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <path
                          d="M7.68875 9.23567H10.9348C10.9348 9.23567 12.7588 9.26493 12.7588 7.47318V4.50992C12.7588 4.50992 13.0355 2.71667 9.452 2.71667C6.0215 2.71667 6.23525 4.20392 6.23525 4.20392L6.23975 5.74517H9.512V6.20792H4.94C4.94 6.20792 2.74475 5.95893 2.74475 9.41943C2.74475 12.8799 4.661 12.7569 4.661 12.7569H5.804V11.1512C5.804 11.1512 5.74175 9.23567 7.68875 9.23567ZM7.64675 4.93068C7.49061 4.93068 7.34085 4.86865 7.23044 4.75823C7.12003 4.64782 7.058 4.49807 7.058 4.34192C7.058 4.18578 7.12003 4.03603 7.23044 3.92562C7.34085 3.8152 7.49061 3.75317 7.64675 3.75317C7.8029 3.75317 7.95265 3.8152 8.06306 3.92562C8.17347 4.03603 8.2355 4.18578 8.2355 4.34192C8.2355 4.49807 8.17347 4.64782 8.06306 4.75823C7.95265 4.86865 7.8029 4.93068 7.64675 4.93068Z"
                          fill="#064EA4"
                        />
                        <path
                          d="M14.339 6.11564H13.196V7.72139C13.196 7.72139 13.2582 9.63689 11.3112 9.63689H8.06522C8.06522 9.63689 6.24122 9.60689 6.24122 11.3994V14.3626C6.24122 14.3626 5.96447 16.1559 9.54797 16.1559C12.9777 16.1559 12.764 14.6686 12.764 14.6686L12.7595 13.1281H9.48722V12.6654H14.06C14.06 12.6654 16.2552 12.9144 16.2552 9.45389C16.2552 5.99339 14.339 6.11564 14.339 6.11564ZM11.3532 13.9426C11.5094 13.9426 11.6591 14.0047 11.7695 14.1151C11.8799 14.2255 11.942 14.3752 11.942 14.5314C11.942 14.6875 11.8799 14.8373 11.7695 14.9477C11.6591 15.0581 11.5094 15.1201 11.3532 15.1201C11.1971 15.1201 11.0473 15.0581 10.9369 14.9477C10.8265 14.8373 10.7645 14.6875 10.7645 14.5314C10.7645 14.3752 10.8265 14.2255 10.9369 14.1151C11.0473 14.0047 11.1971 13.9426 11.3532 13.9426Z"
                          fill="#064EA4"
                        />
                      </svg>
                      <span>Python</span>
                    </div>
                    <div className="inline-flex items-baseline">
                      <span className=" font-helvetica font-bold text-[30px] text-[#064EA4]">
                        Software Engineering
                      </span>
                    </div>
                  </div>
                  <ul className="text-[#064EA4] font-helvetica font-normal leading-[150%] text-[16px] space-y-3 grow mb-6">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M12.5 2.46667C8.63 2.46667 5.5 5.59667 5.5 9.46667C5.5 14.7167 12.5 22.4667 12.5 22.4667C12.5 22.4667 19.5 14.7167 19.5 9.46667C19.5 5.59667 16.37 2.46667 12.5 2.46667ZM12.5 11.9667C11.837 11.9667 11.2011 11.7033 10.7322 11.2344C10.2634 10.7656 10 10.1297 10 9.46667C10 8.80363 10.2634 8.16775 10.7322 7.69891C11.2011 7.23007 11.837 6.96667 12.5 6.96667C13.163 6.96667 13.7989 7.23007 14.2678 7.69891C14.7366 8.16775 15 8.80363 15 9.46667C15 10.1297 14.7366 10.7656 14.2678 11.2344C13.7989 11.7033 13.163 11.9667 12.5 11.9667Z"
                          fill="#064EA4"
                        />
                      </svg>
                      <span>London</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M3.5 6.46667H21.5V18.4667H3.5V6.46667ZM12.5 9.46667C13.2956 9.46667 14.0587 9.78274 14.6213 10.3454C15.1839 10.908 15.5 11.671 15.5 12.4667C15.5 13.2623 15.1839 14.0254 14.6213 14.588C14.0587 15.1506 13.2956 15.4667 12.5 15.4667C11.7044 15.4667 10.9413 15.1506 10.3787 14.588C9.81607 14.0254 9.5 13.2623 9.5 12.4667C9.5 11.671 9.81607 10.908 10.3787 10.3454C10.9413 9.78274 11.7044 9.46667 12.5 9.46667ZM7.5 8.46667C7.5 8.99711 7.28929 9.50582 6.91421 9.88089C6.53914 10.256 6.03043 10.4667 5.5 10.4667V14.4667C6.03043 14.4667 6.53914 14.6774 6.91421 15.0525C7.28929 15.4275 7.5 15.9362 7.5 16.4667H17.5C17.5 15.9362 17.7107 15.4275 18.0858 15.0525C18.4609 14.6774 18.9696 14.4667 19.5 14.4667V10.4667C18.9696 10.4667 18.4609 10.256 18.0858 9.88089C17.7107 9.50582 17.5 8.99711 17.5 8.46667H7.5Z"
                          fill="#064EA4"
                        />
                      </svg>
                      <span>£65,000</span>
                    </li>
                  </ul>
                  <div className="text-[#064EA4] font-helvetica font-normal leading-[150%] text-[16px]">
                    Odio mi amet commodo convallis nunc. Tincidunt mauris eu
                    egestas eget in aliquam.
                  </div>
                  <div className="py-3 rounded">
                    <a
                      className="btn-sm font-helvetica text-[#064EA4] bg-white w-full group"
                      href="#0"
                    >
                      View this job
                    </a>
                  </div>
                  <div
                    className="text-slate-500 font-helvetica text-[13px] font-normal py-3"
                    style={{ color: "rgba(6, 78, 164, 0.80)" }}
                  >
                    Posted on 29/08/2023
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative rounded-3xl border border-transparent bg-[#064EA4] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                <div
                  className="relative flex rounded-xl flex-col h-full px-8 py-12 shadow-lg"
                  data-aos="fade-up"
                >
                  <div className="mb-2 pb-4">
                    <div className="flex items-center gap-2 bg-white rounded-md w-24">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <path
                          d="M7.68875 9.23567H10.9348C10.9348 9.23567 12.7588 9.26493 12.7588 7.47318V4.50992C12.7588 4.50992 13.0355 2.71667 9.452 2.71667C6.0215 2.71667 6.23525 4.20392 6.23525 4.20392L6.23975 5.74517H9.512V6.20792H4.94C4.94 6.20792 2.74475 5.95893 2.74475 9.41943C2.74475 12.8799 4.661 12.7569 4.661 12.7569H5.804V11.1512C5.804 11.1512 5.74175 9.23567 7.68875 9.23567ZM7.64675 4.93068C7.49061 4.93068 7.34085 4.86865 7.23044 4.75823C7.12003 4.64782 7.058 4.49807 7.058 4.34192C7.058 4.18578 7.12003 4.03603 7.23044 3.92562C7.34085 3.8152 7.49061 3.75317 7.64675 3.75317C7.8029 3.75317 7.95265 3.8152 8.06306 3.92562C8.17347 4.03603 8.2355 4.18578 8.2355 4.34192C8.2355 4.49807 8.17347 4.64782 8.06306 4.75823C7.95265 4.86865 7.8029 4.93068 7.64675 4.93068Z"
                          fill="#064EA4"
                        />
                        <path
                          d="M14.339 6.11564H13.196V7.72139C13.196 7.72139 13.2582 9.63689 11.3112 9.63689H8.06522C8.06522 9.63689 6.24122 9.60689 6.24122 11.3994V14.3626C6.24122 14.3626 5.96447 16.1559 9.54797 16.1559C12.9777 16.1559 12.764 14.6686 12.764 14.6686L12.7595 13.1281H9.48722V12.6654H14.06C14.06 12.6654 16.2552 12.9144 16.2552 9.45389C16.2552 5.99339 14.339 6.11564 14.339 6.11564ZM11.3532 13.9426C11.5094 13.9426 11.6591 14.0047 11.7695 14.1151C11.8799 14.2255 11.942 14.3752 11.942 14.5314C11.942 14.6875 11.8799 14.8373 11.7695 14.9477C11.6591 15.0581 11.5094 15.1201 11.3532 15.1201C11.1971 15.1201 11.0473 15.0581 10.9369 14.9477C10.8265 14.8373 10.7645 14.6875 10.7645 14.5314C10.7645 14.3752 10.8265 14.2255 10.9369 14.1151C11.0473 14.0047 11.1971 13.9426 11.3532 13.9426Z"
                          fill="#064EA4"
                        />
                      </svg>
                      <span>Python</span>
                    </div>
                    <div className="inline-flex items-baseline">
                      <span className=" font-helvetica font-bold text-[30px] text-white">
                        Software Engineering
                      </span>
                    </div>
                  </div>
                  <ul className="text-white font-helvetica font-normal leading-[150%] text-[16px] space-y-3 grow mb-6">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M12.5 2.46667C8.63 2.46667 5.5 5.59667 5.5 9.46667C5.5 14.7167 12.5 22.4667 12.5 22.4667C12.5 22.4667 19.5 14.7167 19.5 9.46667C19.5 5.59667 16.37 2.46667 12.5 2.46667ZM12.5 11.9667C11.837 11.9667 11.2011 11.7033 10.7322 11.2344C10.2634 10.7656 10 10.1297 10 9.46667C10 8.80363 10.2634 8.16775 10.7322 7.69891C11.2011 7.23007 11.837 6.96667 12.5 6.96667C13.163 6.96667 13.7989 7.23007 14.2678 7.69891C14.7366 8.16775 15 8.80363 15 9.46667C15 10.1297 14.7366 10.7656 14.2678 11.2344C13.7989 11.7033 13.163 11.9667 12.5 11.9667Z"
                          fill="white"
                        />
                      </svg>
                      <span>London</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M3.5 6.46667H21.5V18.4667H3.5V6.46667ZM12.5 9.46667C13.2956 9.46667 14.0587 9.78274 14.6213 10.3454C15.1839 10.908 15.5 11.671 15.5 12.4667C15.5 13.2623 15.1839 14.0254 14.6213 14.588C14.0587 15.1506 13.2956 15.4667 12.5 15.4667C11.7044 15.4667 10.9413 15.1506 10.3787 14.588C9.81607 14.0254 9.5 13.2623 9.5 12.4667C9.5 11.671 9.81607 10.908 10.3787 10.3454C10.9413 9.78274 11.7044 9.46667 12.5 9.46667ZM7.5 8.46667C7.5 8.99711 7.28929 9.50582 6.91421 9.88089C6.53914 10.256 6.03043 10.4667 5.5 10.4667V14.4667C6.03043 14.4667 6.53914 14.6774 6.91421 15.0525C7.28929 15.4275 7.5 15.9362 7.5 16.4667H17.5C17.5 15.9362 17.7107 15.4275 18.0858 15.0525C18.4609 14.6774 18.9696 14.4667 19.5 14.4667V10.4667C18.9696 10.4667 18.4609 10.256 18.0858 9.88089C17.7107 9.50582 17.5 8.99711 17.5 8.46667H7.5Z"
                          fill="white"
                        />
                      </svg>
                      <span>£65,000</span>
                    </li>
                  </ul>
                  <div className="text-white font-helvetica font-normal leading-[150%] text-[16px]">
                    Odio mi amet commodo convallis nunc. Tincidunt mauris eu
                    egestas eget in aliquam.
                  </div>
                  <div className="py-3 rounded">
                    <a
                      className="btn-sm font-helvetica text-[#064EA4] bg-white w-full group"
                      href="#0"
                    >
                      View this job
                    </a>
                  </div>
                  <div
                    className="font-helvetica text-[13px] font-normal py-3"
                    style={{ color: "rgba(255, 255, 255, 0.80)" }}
                  >
                    Posted on 29/08/2023
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative rounded-3xl border border-transparent bg-[#F99D76] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                <div
                  className="relative flex rounded-xl flex-col h-full px-8 py-12 shadow-lg"
                  data-aos="fade-up"
                >
                  <div className="mb-2 pb-4">
                    <div className="flex items-center gap-2 bg-white rounded-md w-24">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <path
                          d="M7.68875 9.23567H10.9348C10.9348 9.23567 12.7588 9.26493 12.7588 7.47318V4.50992C12.7588 4.50992 13.0355 2.71667 9.452 2.71667C6.0215 2.71667 6.23525 4.20392 6.23525 4.20392L6.23975 5.74517H9.512V6.20792H4.94C4.94 6.20792 2.74475 5.95893 2.74475 9.41943C2.74475 12.8799 4.661 12.7569 4.661 12.7569H5.804V11.1512C5.804 11.1512 5.74175 9.23567 7.68875 9.23567ZM7.64675 4.93068C7.49061 4.93068 7.34085 4.86865 7.23044 4.75823C7.12003 4.64782 7.058 4.49807 7.058 4.34192C7.058 4.18578 7.12003 4.03603 7.23044 3.92562C7.34085 3.8152 7.49061 3.75317 7.64675 3.75317C7.8029 3.75317 7.95265 3.8152 8.06306 3.92562C8.17347 4.03603 8.2355 4.18578 8.2355 4.34192C8.2355 4.49807 8.17347 4.64782 8.06306 4.75823C7.95265 4.86865 7.8029 4.93068 7.64675 4.93068Z"
                          fill="#064EA4"
                        />
                        <path
                          d="M14.339 6.11564H13.196V7.72139C13.196 7.72139 13.2582 9.63689 11.3112 9.63689H8.06522C8.06522 9.63689 6.24122 9.60689 6.24122 11.3994V14.3626C6.24122 14.3626 5.96447 16.1559 9.54797 16.1559C12.9777 16.1559 12.764 14.6686 12.764 14.6686L12.7595 13.1281H9.48722V12.6654H14.06C14.06 12.6654 16.2552 12.9144 16.2552 9.45389C16.2552 5.99339 14.339 6.11564 14.339 6.11564ZM11.3532 13.9426C11.5094 13.9426 11.6591 14.0047 11.7695 14.1151C11.8799 14.2255 11.942 14.3752 11.942 14.5314C11.942 14.6875 11.8799 14.8373 11.7695 14.9477C11.6591 15.0581 11.5094 15.1201 11.3532 15.1201C11.1971 15.1201 11.0473 15.0581 10.9369 14.9477C10.8265 14.8373 10.7645 14.6875 10.7645 14.5314C10.7645 14.3752 10.8265 14.2255 10.9369 14.1151C11.0473 14.0047 11.1971 13.9426 11.3532 13.9426Z"
                          fill="#064EA4"
                        />
                      </svg>
                      <span>Python</span>
                    </div>
                    <div className="inline-flex items-baseline">
                      <span className=" font-helvetica font-bold text-[30px] text-[#064EA4]">
                        Software Engineering
                      </span>
                    </div>
                  </div>
                  <ul className="text-[#064EA4] font-helvetica font-normal leading-[150%] text-[16px] space-y-3 grow mb-6">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M12.5 2.46667C8.63 2.46667 5.5 5.59667 5.5 9.46667C5.5 14.7167 12.5 22.4667 12.5 22.4667C12.5 22.4667 19.5 14.7167 19.5 9.46667C19.5 5.59667 16.37 2.46667 12.5 2.46667ZM12.5 11.9667C11.837 11.9667 11.2011 11.7033 10.7322 11.2344C10.2634 10.7656 10 10.1297 10 9.46667C10 8.80363 10.2634 8.16775 10.7322 7.69891C11.2011 7.23007 11.837 6.96667 12.5 6.96667C13.163 6.96667 13.7989 7.23007 14.2678 7.69891C14.7366 8.16775 15 8.80363 15 9.46667C15 10.1297 14.7366 10.7656 14.2678 11.2344C13.7989 11.7033 13.163 11.9667 12.5 11.9667Z"
                          fill="#064EA4"
                        />
                      </svg>
                      <span>London</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M3.5 6.46667H21.5V18.4667H3.5V6.46667ZM12.5 9.46667C13.2956 9.46667 14.0587 9.78274 14.6213 10.3454C15.1839 10.908 15.5 11.671 15.5 12.4667C15.5 13.2623 15.1839 14.0254 14.6213 14.588C14.0587 15.1506 13.2956 15.4667 12.5 15.4667C11.7044 15.4667 10.9413 15.1506 10.3787 14.588C9.81607 14.0254 9.5 13.2623 9.5 12.4667C9.5 11.671 9.81607 10.908 10.3787 10.3454C10.9413 9.78274 11.7044 9.46667 12.5 9.46667ZM7.5 8.46667C7.5 8.99711 7.28929 9.50582 6.91421 9.88089C6.53914 10.256 6.03043 10.4667 5.5 10.4667V14.4667C6.03043 14.4667 6.53914 14.6774 6.91421 15.0525C7.28929 15.4275 7.5 15.9362 7.5 16.4667H17.5C17.5 15.9362 17.7107 15.4275 18.0858 15.0525C18.4609 14.6774 18.9696 14.4667 19.5 14.4667V10.4667C18.9696 10.4667 18.4609 10.256 18.0858 9.88089C17.7107 9.50582 17.5 8.99711 17.5 8.46667H7.5Z"
                          fill="#064EA4"
                        />
                      </svg>
                      <span>£65,000</span>
                    </li>
                  </ul>
                  <div className="text-[#064EA4] font-helvetica font-normal leading-[150%] text-[16px]">
                    Odio mi amet commodo convallis nunc. Tincidunt mauris eu
                    egestas eget in aliquam.
                  </div>
                  <div className="py-3 rounded">
                    <a
                      className="btn-sm font-helvetica text-[#064EA4] bg-white w-full group"
                      href="#0"
                    >
                      View this job
                    </a>
                  </div>
                  <div
                    className="text-slate-500 font-helvetica text-[13px] font-normal py-3"
                    style={{ color: "rgba(6, 78, 164, 0.80)" }}
                  >
                    Posted on 29/08/2023
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative rounded-3xl border border-transparent bg-[#FCDF69] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                <div
                  className="relative flex rounded-xl flex-col h-full px-8 py-12 shadow-lg"
                  data-aos="fade-up"
                >
                  <div className="mb-2 pb-4">
                    <div className="flex items-center gap-2 bg-white rounded-md w-24">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <path
                          d="M7.68875 9.23567H10.9348C10.9348 9.23567 12.7588 9.26493 12.7588 7.47318V4.50992C12.7588 4.50992 13.0355 2.71667 9.452 2.71667C6.0215 2.71667 6.23525 4.20392 6.23525 4.20392L6.23975 5.74517H9.512V6.20792H4.94C4.94 6.20792 2.74475 5.95893 2.74475 9.41943C2.74475 12.8799 4.661 12.7569 4.661 12.7569H5.804V11.1512C5.804 11.1512 5.74175 9.23567 7.68875 9.23567ZM7.64675 4.93068C7.49061 4.93068 7.34085 4.86865 7.23044 4.75823C7.12003 4.64782 7.058 4.49807 7.058 4.34192C7.058 4.18578 7.12003 4.03603 7.23044 3.92562C7.34085 3.8152 7.49061 3.75317 7.64675 3.75317C7.8029 3.75317 7.95265 3.8152 8.06306 3.92562C8.17347 4.03603 8.2355 4.18578 8.2355 4.34192C8.2355 4.49807 8.17347 4.64782 8.06306 4.75823C7.95265 4.86865 7.8029 4.93068 7.64675 4.93068Z"
                          fill="#064EA4"
                        />
                        <path
                          d="M14.339 6.11564H13.196V7.72139C13.196 7.72139 13.2582 9.63689 11.3112 9.63689H8.06522C8.06522 9.63689 6.24122 9.60689 6.24122 11.3994V14.3626C6.24122 14.3626 5.96447 16.1559 9.54797 16.1559C12.9777 16.1559 12.764 14.6686 12.764 14.6686L12.7595 13.1281H9.48722V12.6654H14.06C14.06 12.6654 16.2552 12.9144 16.2552 9.45389C16.2552 5.99339 14.339 6.11564 14.339 6.11564ZM11.3532 13.9426C11.5094 13.9426 11.6591 14.0047 11.7695 14.1151C11.8799 14.2255 11.942 14.3752 11.942 14.5314C11.942 14.6875 11.8799 14.8373 11.7695 14.9477C11.6591 15.0581 11.5094 15.1201 11.3532 15.1201C11.1971 15.1201 11.0473 15.0581 10.9369 14.9477C10.8265 14.8373 10.7645 14.6875 10.7645 14.5314C10.7645 14.3752 10.8265 14.2255 10.9369 14.1151C11.0473 14.0047 11.1971 13.9426 11.3532 13.9426Z"
                          fill="#064EA4"
                        />
                      </svg>
                      <span>Python</span>
                    </div>
                    <div className="inline-flex items-baseline">
                      <span className=" font-helvetica font-bold text-[30px] text-[#064EA4]">
                        Software Engineering
                      </span>
                    </div>
                  </div>
                  <ul className="text-[#064EA4] font-helvetica font-normal leading-[150%] text-[16px] space-y-3 grow mb-6">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M12.5 2.46667C8.63 2.46667 5.5 5.59667 5.5 9.46667C5.5 14.7167 12.5 22.4667 12.5 22.4667C12.5 22.4667 19.5 14.7167 19.5 9.46667C19.5 5.59667 16.37 2.46667 12.5 2.46667ZM12.5 11.9667C11.837 11.9667 11.2011 11.7033 10.7322 11.2344C10.2634 10.7656 10 10.1297 10 9.46667C10 8.80363 10.2634 8.16775 10.7322 7.69891C11.2011 7.23007 11.837 6.96667 12.5 6.96667C13.163 6.96667 13.7989 7.23007 14.2678 7.69891C14.7366 8.16775 15 8.80363 15 9.46667C15 10.1297 14.7366 10.7656 14.2678 11.2344C13.7989 11.7033 13.163 11.9667 12.5 11.9667Z"
                          fill="#064EA4"
                        />
                      </svg>
                      <span>London</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M3.5 6.46667H21.5V18.4667H3.5V6.46667ZM12.5 9.46667C13.2956 9.46667 14.0587 9.78274 14.6213 10.3454C15.1839 10.908 15.5 11.671 15.5 12.4667C15.5 13.2623 15.1839 14.0254 14.6213 14.588C14.0587 15.1506 13.2956 15.4667 12.5 15.4667C11.7044 15.4667 10.9413 15.1506 10.3787 14.588C9.81607 14.0254 9.5 13.2623 9.5 12.4667C9.5 11.671 9.81607 10.908 10.3787 10.3454C10.9413 9.78274 11.7044 9.46667 12.5 9.46667ZM7.5 8.46667C7.5 8.99711 7.28929 9.50582 6.91421 9.88089C6.53914 10.256 6.03043 10.4667 5.5 10.4667V14.4667C6.03043 14.4667 6.53914 14.6774 6.91421 15.0525C7.28929 15.4275 7.5 15.9362 7.5 16.4667H17.5C17.5 15.9362 17.7107 15.4275 18.0858 15.0525C18.4609 14.6774 18.9696 14.4667 19.5 14.4667V10.4667C18.9696 10.4667 18.4609 10.256 18.0858 9.88089C17.7107 9.50582 17.5 8.99711 17.5 8.46667H7.5Z"
                          fill="#064EA4"
                        />
                      </svg>
                      <span>£65,000</span>
                    </li>
                  </ul>
                  <div className="text-[#064EA4] font-helvetica font-normal leading-[150%] text-[16px]">
                    Odio mi amet commodo convallis nunc. Tincidunt mauris eu
                    egestas eget in aliquam.
                  </div>
                  <div className="py-3 rounded">
                    <a
                      className="btn-sm font-helvetica text-[#064EA4] bg-white w-full group"
                      href="#0"
                    >
                      View this job
                    </a>
                  </div>
                  <div
                    className="text-slate-500 font-helvetica text-[13px] font-normal py-3"
                    style={{ color: "rgba(6, 78, 164, 0.80)" }}
                  >
                    Posted on 29/08/2023
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative rounded-3xl border border-transparent bg-[#064EA4] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                <div
                  className="relative flex rounded-xl flex-col h-full px-8 py-12 shadow-lg"
                  data-aos="fade-up"
                >
                  <div className="mb-2 pb-4">
                    <div className="flex items-center gap-2 bg-white rounded-md w-24">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <path
                          d="M7.68875 9.23567H10.9348C10.9348 9.23567 12.7588 9.26493 12.7588 7.47318V4.50992C12.7588 4.50992 13.0355 2.71667 9.452 2.71667C6.0215 2.71667 6.23525 4.20392 6.23525 4.20392L6.23975 5.74517H9.512V6.20792H4.94C4.94 6.20792 2.74475 5.95893 2.74475 9.41943C2.74475 12.8799 4.661 12.7569 4.661 12.7569H5.804V11.1512C5.804 11.1512 5.74175 9.23567 7.68875 9.23567ZM7.64675 4.93068C7.49061 4.93068 7.34085 4.86865 7.23044 4.75823C7.12003 4.64782 7.058 4.49807 7.058 4.34192C7.058 4.18578 7.12003 4.03603 7.23044 3.92562C7.34085 3.8152 7.49061 3.75317 7.64675 3.75317C7.8029 3.75317 7.95265 3.8152 8.06306 3.92562C8.17347 4.03603 8.2355 4.18578 8.2355 4.34192C8.2355 4.49807 8.17347 4.64782 8.06306 4.75823C7.95265 4.86865 7.8029 4.93068 7.64675 4.93068Z"
                          fill="#064EA4"
                        />
                        <path
                          d="M14.339 6.11564H13.196V7.72139C13.196 7.72139 13.2582 9.63689 11.3112 9.63689H8.06522C8.06522 9.63689 6.24122 9.60689 6.24122 11.3994V14.3626C6.24122 14.3626 5.96447 16.1559 9.54797 16.1559C12.9777 16.1559 12.764 14.6686 12.764 14.6686L12.7595 13.1281H9.48722V12.6654H14.06C14.06 12.6654 16.2552 12.9144 16.2552 9.45389C16.2552 5.99339 14.339 6.11564 14.339 6.11564ZM11.3532 13.9426C11.5094 13.9426 11.6591 14.0047 11.7695 14.1151C11.8799 14.2255 11.942 14.3752 11.942 14.5314C11.942 14.6875 11.8799 14.8373 11.7695 14.9477C11.6591 15.0581 11.5094 15.1201 11.3532 15.1201C11.1971 15.1201 11.0473 15.0581 10.9369 14.9477C10.8265 14.8373 10.7645 14.6875 10.7645 14.5314C10.7645 14.3752 10.8265 14.2255 10.9369 14.1151C11.0473 14.0047 11.1971 13.9426 11.3532 13.9426Z"
                          fill="#064EA4"
                        />
                      </svg>
                      <span>Python</span>
                    </div>
                    <div className="inline-flex items-baseline">
                      <span className=" font-helvetica font-bold text-[30px] text-white">
                        Software Engineering
                      </span>
                    </div>
                  </div>
                  <ul className="text-white font-helvetica font-normal leading-[150%] text-[16px] space-y-3 grow mb-6">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M12.5 2.46667C8.63 2.46667 5.5 5.59667 5.5 9.46667C5.5 14.7167 12.5 22.4667 12.5 22.4667C12.5 22.4667 19.5 14.7167 19.5 9.46667C19.5 5.59667 16.37 2.46667 12.5 2.46667ZM12.5 11.9667C11.837 11.9667 11.2011 11.7033 10.7322 11.2344C10.2634 10.7656 10 10.1297 10 9.46667C10 8.80363 10.2634 8.16775 10.7322 7.69891C11.2011 7.23007 11.837 6.96667 12.5 6.96667C13.163 6.96667 13.7989 7.23007 14.2678 7.69891C14.7366 8.16775 15 8.80363 15 9.46667C15 10.1297 14.7366 10.7656 14.2678 11.2344C13.7989 11.7033 13.163 11.9667 12.5 11.9667Z"
                          fill="white"
                        />
                      </svg>
                      <span>London</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M3.5 6.46667H21.5V18.4667H3.5V6.46667ZM12.5 9.46667C13.2956 9.46667 14.0587 9.78274 14.6213 10.3454C15.1839 10.908 15.5 11.671 15.5 12.4667C15.5 13.2623 15.1839 14.0254 14.6213 14.588C14.0587 15.1506 13.2956 15.4667 12.5 15.4667C11.7044 15.4667 10.9413 15.1506 10.3787 14.588C9.81607 14.0254 9.5 13.2623 9.5 12.4667C9.5 11.671 9.81607 10.908 10.3787 10.3454C10.9413 9.78274 11.7044 9.46667 12.5 9.46667ZM7.5 8.46667C7.5 8.99711 7.28929 9.50582 6.91421 9.88089C6.53914 10.256 6.03043 10.4667 5.5 10.4667V14.4667C6.03043 14.4667 6.53914 14.6774 6.91421 15.0525C7.28929 15.4275 7.5 15.9362 7.5 16.4667H17.5C17.5 15.9362 17.7107 15.4275 18.0858 15.0525C18.4609 14.6774 18.9696 14.4667 19.5 14.4667V10.4667C18.9696 10.4667 18.4609 10.256 18.0858 9.88089C17.7107 9.50582 17.5 8.99711 17.5 8.46667H7.5Z"
                          fill="white"
                        />
                      </svg>
                      <span>£65,000</span>
                    </li>
                  </ul>
                  <div className="text-white font-helvetica font-normal leading-[150%] text-[16px]">
                    Odio mi amet commodo convallis nunc. Tincidunt mauris eu
                    egestas eget in aliquam.
                  </div>
                  <div className="py-3 rounded">
                    <a
                      className="btn-sm font-helvetica text-[#064EA4] bg-white w-full group"
                      href="#0"
                    >
                      View this job
                    </a>
                  </div>
                  <div
                    className="font-helvetica text-[13px] font-normal py-3"
                    style={{ color: "rgba(255, 255, 255, 0.80)" }}
                  >
                    Posted on 29/08/2023
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 md:px-32 px-8 py-4">
        <div className="flex gap-4">
          <button
            type="button"
            className="project-slider-button-prev flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-secondary dark:hover:bg-secondary"
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
            className="project-slider-button-next text-p flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-secondary dark:hover:bg-secondary"
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
            View more jobs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
