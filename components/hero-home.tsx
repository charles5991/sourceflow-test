import Link from "next/link";
export default function HeroHome() {
  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-[#064EA4] h-[850px]"
        aria-hidden="true"
      >
        <div className="absolute top-24 left-0 w-[290px] h-[290px] bg-[#F99D76] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-10 w-[290px] h-[290px] bg-[#FCDF69] rounded-full translate-x-1/2 translate-y-none"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-28 pb-20 md:pt-40 md:pb-44">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">
            {/* Content */}
            <div
              className="text-center md:text-left md:min-w-[30rem]"
              data-aos="fade-right"
            >
              <p className="text-[16px] font-normal text-white ">
                Software Recruitment Specialists
              </p>
              <p className="text-white font-helvetica text-[55px] font-bold">
                Elevate your career
              </p>
              <div className="mb-3">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                  <input
                    type="search"
                    className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-tl-full  rounded-bl-full border border-solid border-neutral-300 bg-white bg-clip-padding px-2.5 py-4 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="E.g. networking"
                    aria-label="networking"
                    aria-describedby="button-addon1"
                  />

                  <button
                    className="relative z-[2] flex items-center rounded-tr-full  rounded-br-full bg-[#FCDF69] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                    type="button"
                    id="button-addon1"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    placeholder="E.g. networking"
                  >
                    Search Job
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center text-center">
              <div className="bg-white w-48 h-64 md:w-[507px] md:h-[488px] rounded-3xl bg-cover bg-no-repeat bg-center bg-[url('/images/hero-girl.png')]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
