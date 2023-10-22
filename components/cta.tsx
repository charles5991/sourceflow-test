import Image from "next/image";
import Link from "next/link";
import Insight1 from "@/public/images/insight1.png";
import Insight2 from "@/public/images/insight2.png";
import Insight3 from "@/public/images/insight3.png";
import Insight4 from "@/public/images/insight4.png";
import Insight5 from "@/public/images/insight5.png";
import Author from "@/public/images/human.png";

export default function Creatives() {
  return (
    <section className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 mt-10 mb-5 py-16">
      {/* First column */}
      <div className="col-span-1 md:col-span-1 lg:col-span-1">
        {/* Card 1 */}
        <div className="w-[320px]">
          <div className="text-[#0E2152] font-helvetica md:text-[36px] text-[30px] font-bold leading-[150%]">
            Latest insights
          </div>
          <div className="text-[#0E2152] font-helvetica md:text-[16px] text-[16px] font-normal leading-[150%]">
            Lorem ipsum dolor sit amet consectetur. A aliquam pellentesque
            malesuada venenatis consectetur egestas dui.{" "}
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl mt-10">
          <a href="#">
            <Image src={Insight1} height={220} width={288} alt="insight1" />
            <div className="px-4 py-3 w-72 relative">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                25/08/2023
              </span>
              <p className="text-lg py-4 font-bold text-[#064EA4] truncate block capitalize">
                Top Tips for a stand out CV{" "}
              </p>
              <p className="text-sm font-normal text-[#5C5C5C] cursor-auto my-3 self-stretch">
                Lorem ipsum dolor siamet consectetur. Pellentesque integer
                scelerisque amet mauris dolor aliquam lobortis.
              </p>
              <div className="flex items-center py-8">
                <Image src={Author} width={20} height={20} alt="author" />
                <p className="text-sm text-[#5C5C5C] font-helvetica cursor-auto ml-2">
                  J. Gonzalez
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-20 h-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="82"
                  height="84"
                  viewBox="0 0 82 84"
                  fill="none"
                >
                  <g clip-path="url(#clip0_44_25)">
                    <path
                      d="M69.7763 137.762C107.448 137.762 137.987 107.271 137.987 69.6592C137.987 32.0472 107.448 1.55664 69.7763 1.55664C32.1047 1.55664 1.5658 32.0472 1.5658 69.6592C1.5658 107.271 32.1047 137.762 69.7763 137.762Z"
                      stroke="#CDCDCD"
                    />
                    <path
                      d="M36.6053 57.5437L52.6307 41.5437M52.6307 41.5437V56.9037M52.6307 41.5437H37.2463"
                      stroke="#CDCDCD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_44_25">
                      <rect
                        width="81"
                        height="83"
                        fill="white"
                        transform="translate(0.5 0.492432)"
                      />
                    </clipPath>
                  </defs>
                </svg>{" "}
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 bg-white shadow-md item-center rounded-xl duration-500 hover:scale-105 hover:shadow-xl mt-10">
          <div className="w-full h-[300px] bg-[#FCDF69] flex flex-col justify-center items-center">
            <Link
              href="/"
              className="btn border-2 border-[#0E2152] px-8 font-helvetica capitalize text-[#0E2152]"
            >
              View our blogs
            </Link>
          </div>
        </div>
      </div>

      {/* Second column */}
      <div className="col-span-1 md:col-span-1 lg:col-span-1 mt-24">
        {/* Card 3 */}
        <div className="relative w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <Image src={Insight2} height={220} width={288} alt="insight2" />
            <div className="px-4 py-3 w-72 relative">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                25/08/2023
              </span>
              <p className="text-lg py-4 font-bold text-[#064EA4] truncate block capitalize">
                Gain skills and fast track your career{" "}
              </p>
              <p className="text-sm font-normal text-[#5C5C5C] cursor-auto my-3 self-stretch">
                Lorem ipsum dolor siamet consectetur. Pellentesque integer
                scelerisque amet mauris dolor aliquam lobortis.
              </p>
              <div className="flex items-center py-8">
                <Image src={Author} width={20} height={20} alt="author" />
                <p className="text-sm text-[#5C5C5C] font-helvetica cursor-auto ml-2">
                  J. Gonzalez
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-20 h-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="82"
                  height="84"
                  viewBox="0 0 82 84"
                  fill="none"
                >
                  <g clip-path="url(#clip0_44_25)">
                    <path
                      d="M69.7763 137.762C107.448 137.762 137.987 107.271 137.987 69.6592C137.987 32.0472 107.448 1.55664 69.7763 1.55664C32.1047 1.55664 1.5658 32.0472 1.5658 69.6592C1.5658 107.271 32.1047 137.762 69.7763 137.762Z"
                      stroke="#CDCDCD"
                    />
                    <path
                      d="M36.6053 57.5437L52.6307 41.5437M52.6307 41.5437V56.9037M52.6307 41.5437H37.2463"
                      stroke="#CDCDCD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_44_25">
                      <rect
                        width="81"
                        height="83"
                        fill="white"
                        transform="translate(0.5 0.492432)"
                      />
                    </clipPath>
                  </defs>
                </svg>{" "}
              </div>
            </div>
          </a>
        </div>

        {/* Card 4 */}
        <div className="relative w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl mt-10">
          <a href="#">
            <Image src={Insight3} height={220} width={288} alt="insight3" />
            <div className="px-4 py-3 w-72 relative">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                25/08/2023
              </span>
              <p className="text-lg py-4 font-bold text-[#064EA4] truncate block capitalize">
                Resources for developers{" "}
              </p>
              <p className="text-sm font-normal text-[#5C5C5C] cursor-auto my-3 self-stretch">
                Lorem ipsum dolor siamet consectetur. Pellentesque integer
                scelerisque amet mauris dolor aliquam lobortis.
              </p>
              <div className="flex items-center py-8">
                <Image src={Author} width={20} height={20} alt="author" />
                <p className="text-sm text-[#5C5C5C] font-helvetica cursor-auto ml-2">
                  J. Gonzalez
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-20 h-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="82"
                  height="84"
                  viewBox="0 0 82 84"
                  fill="none"
                >
                  <g clip-path="url(#clip0_44_25)">
                    <path
                      d="M69.7763 137.762C107.448 137.762 137.987 107.271 137.987 69.6592C137.987 32.0472 107.448 1.55664 69.7763 1.55664C32.1047 1.55664 1.5658 32.0472 1.5658 69.6592C1.5658 107.271 32.1047 137.762 69.7763 137.762Z"
                      stroke="#CDCDCD"
                    />
                    <path
                      d="M36.6053 57.5437L52.6307 41.5437M52.6307 41.5437V56.9037M52.6307 41.5437H37.2463"
                      stroke="#CDCDCD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_44_25">
                      <rect
                        width="81"
                        height="83"
                        fill="white"
                        transform="translate(0.5 0.492432)"
                      />
                    </clipPath>
                  </defs>
                </svg>{" "}
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Third column */}
      <div className="col-span-1 md:col-span-1 lg:col-span-1">
        {/* Card 5 */}
        <div className="relative w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <Image src={Insight4} height={220} width={288} alt="insight4" />
            <div className="px-4 py-3 w-72 relative">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                25/08/2023
              </span>
              <p className="text-lg py-4 font-bold text-[#064EA4] truncate block capitalize">
                Resources for developers{" "}
              </p>
              <p className="text-sm font-normal text-[#5C5C5C] cursor-auto my-3 self-stretch">
                Lorem ipsum dolor siamet consectetur. Pellentesque integer
                scelerisque amet mauris dolor aliquam lobortis.
              </p>
              <div className="flex items-center py-8">
                <Image src={Author} width={20} height={20} alt="author" />
                <p className="text-sm text-[#5C5C5C] font-helvetica cursor-auto ml-2">
                  J. Gonzalez
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-20 h-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="82"
                  height="84"
                  viewBox="0 0 82 84"
                  fill="none"
                >
                  <g clip-path="url(#clip0_44_25)">
                    <path
                      d="M69.7763 137.762C107.448 137.762 137.987 107.271 137.987 69.6592C137.987 32.0472 107.448 1.55664 69.7763 1.55664C32.1047 1.55664 1.5658 32.0472 1.5658 69.6592C1.5658 107.271 32.1047 137.762 69.7763 137.762Z"
                      stroke="#CDCDCD"
                    />
                    <path
                      d="M36.6053 57.5437L52.6307 41.5437M52.6307 41.5437V56.9037M52.6307 41.5437H37.2463"
                      stroke="#CDCDCD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_44_25">
                      <rect
                        width="81"
                        height="83"
                        fill="white"
                        transform="translate(0.5 0.492432)"
                      />
                    </clipPath>
                  </defs>
                </svg>{" "}
              </div>
            </div>
          </a>
        </div>

        {/* Card 6 */}
        <div className="relative w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl mt-10">
          <a href="#">
            <Image src={Insight5} height={220} width={288} alt="insight5" />
            <div className="px-4 py-3 w-72 relative">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                25/08/2023
              </span>
              <p className="text-lg py-4 font-bold text-[#064EA4] truncate block capitalize">
                Resources for developers{" "}
              </p>
              <p className="text-sm font-normal text-[#5C5C5C] cursor-auto my-3 self-stretch">
                Lorem ipsum dolor siamet consectetur. Pellentesque integer
                scelerisque amet mauris dolor aliquam lobortis.
              </p>
              <div className="flex items-center py-8">
                <Image src={Author} width={20} height={20} alt="author" />
                <p className="text-sm text-[#5C5C5C] font-helvetica cursor-auto ml-2">
                  J. Gonzalez
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-20 h-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="82"
                  height="84"
                  viewBox="0 0 82 84"
                  fill="none"
                >
                  <g clip-path="url(#clip0_44_25)">
                    <path
                      d="M69.7763 137.762C107.448 137.762 137.987 107.271 137.987 69.6592C137.987 32.0472 107.448 1.55664 69.7763 1.55664C32.1047 1.55664 1.5658 32.0472 1.5658 69.6592C1.5658 107.271 32.1047 137.762 69.7763 137.762Z"
                      stroke="#CDCDCD"
                    />
                    <path
                      d="M36.6053 57.5437L52.6307 41.5437M52.6307 41.5437V56.9037M52.6307 41.5437H37.2463"
                      stroke="#CDCDCD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_44_25">
                      <rect
                        width="81"
                        height="83"
                        fill="white"
                        transform="translate(0.5 0.492432)"
                      />
                    </clipPath>
                  </defs>
                </svg>{" "}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
