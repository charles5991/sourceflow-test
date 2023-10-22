import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-[#064EA4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-10 gap-8 py-8 md:py-12">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-4 lg:max-w-xs">
            <div className="mb-6">
              {/* Logo */}
              <Link
                className="block group font-bold text-[20px] font-helvetica text-white"
                href="/"
                aria-label="home"
              >
                Software Recruitment co.
              </Link>
            </div>
            <div className="text-lg font-bold text-slate-800 flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="25"
                viewBox="0 0 22 25"
                fill="none"
              >
                <g clip-path="url(#clip0_1_993)">
                  <path
                    d="M4.92446 21.041H0.363393V7.02072H4.92446V21.041ZM2.64147 5.10822C1.18299 5.10822 0 3.9551 0 2.56291C1.04392e-08 1.89419 0.278297 1.25286 0.77367 0.780007C1.26904 0.307151 1.94091 0.0415039 2.64147 0.0415039C3.34204 0.0415039 4.0139 0.307151 4.50928 0.780007C5.00465 1.25286 5.28295 1.89419 5.28295 2.56291C5.28295 3.9551 4.09946 5.10822 2.64147 5.10822ZM21.9951 21.041H17.4438V14.216C17.4438 12.5895 17.4095 10.5035 15.0725 10.5035C12.7011 10.5035 12.3377 12.2707 12.3377 14.0988V21.041H7.78152V7.02072H12.156V8.93322H12.2198C12.8287 7.83166 14.3162 6.66916 16.5354 6.66916C21.1514 6.66916 22 9.57072 22 13.3395V21.041H21.9951Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_993">
                    <rect
                      width="22"
                      height="24"
                      fill="white"
                      transform="translate(0 0.0410156)"
                    />
                  </clipPath>
                </defs>
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M22 12.041C22 6.52102 17.52 2.04102 12 2.04102C6.48 2.04102 2 6.52102 2 12.041C2 16.881 5.44 20.911 10 21.841V15.041H8V12.041H10V9.54102C10 7.61102 11.57 6.04102 13.5 6.04102H16V9.04102H14C13.45 9.04102 13 9.49102 13 10.041V12.041H16V15.041H13V21.991C18.05 21.491 22 17.231 22 12.041Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M7.8 2.04102H16.2C19.4 2.04102 22 4.64102 22 7.84102V16.241C22 17.7793 21.3889 19.2545 20.3012 20.3422C19.2135 21.4299 17.7383 22.041 16.2 22.041H7.8C4.6 22.041 2 19.441 2 16.241V7.84102C2 6.30276 2.61107 4.82751 3.69878 3.7398C4.78649 2.65209 6.26174 2.04102 7.8 2.04102ZM7.6 4.04102C6.64522 4.04102 5.72955 4.4203 5.05442 5.09543C4.37928 5.77056 4 6.68624 4 7.64102V16.441C4 18.431 5.61 20.041 7.6 20.041H16.4C17.3548 20.041 18.2705 19.6617 18.9456 18.9866C19.6207 18.3115 20 17.3958 20 16.441V7.64102C20 5.65102 18.39 4.04102 16.4 4.04102H7.6ZM17.25 5.54102C17.5815 5.54102 17.8995 5.67271 18.1339 5.90713C18.3683 6.14155 18.5 6.4595 18.5 6.79102C18.5 7.12254 18.3683 7.44048 18.1339 7.6749C17.8995 7.90932 17.5815 8.04102 17.25 8.04102C16.9185 8.04102 16.6005 7.90932 16.3661 7.6749C16.1317 7.44048 16 7.12254 16 6.79102C16 6.4595 16.1317 6.14155 16.3661 5.90713C16.6005 5.67271 16.9185 5.54102 17.25 5.54102ZM12 7.04102C13.3261 7.04102 14.5979 7.5678 15.5355 8.50548C16.4732 9.44316 17 10.7149 17 12.041C17 13.3671 16.4732 14.6389 15.5355 15.5765C14.5979 16.5142 13.3261 17.041 12 17.041C10.6739 17.041 9.40215 16.5142 8.46447 15.5765C7.52678 14.6389 7 13.3671 7 12.041C7 10.7149 7.52678 9.44316 8.46447 8.50548C9.40215 7.5678 10.6739 7.04102 12 7.04102ZM12 9.04102C11.2044 9.04102 10.4413 9.35709 9.87868 9.91969C9.31607 10.4823 9 11.2454 9 12.041C9 12.8367 9.31607 13.5997 9.87868 14.1623C10.4413 14.7249 11.2044 15.041 12 15.041C12.7956 15.041 13.5587 14.7249 14.1213 14.1623C14.6839 13.5997 15 12.8367 15 12.041C15 11.2454 14.6839 10.4823 14.1213 9.91969C13.5587 9.35709 12.7956 9.04102 12 9.04102Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M22.46 6.04102C21.69 6.39102 20.86 6.62102 20 6.73102C20.88 6.20102 21.56 5.36102 21.88 4.35102C21.05 4.85102 20.13 5.20102 19.16 5.40102C18.37 4.54102 17.26 4.04102 16 4.04102C13.65 4.04102 11.73 5.96102 11.73 8.33102C11.73 8.67102 11.77 9.00102 11.84 9.31102C8.28001 9.13102 5.11001 7.42102 3.00001 4.83102C2.63001 5.46102 2.42001 6.20102 2.42001 6.98102C2.42001 8.47102 3.17001 9.79102 4.33001 10.541C3.62001 10.541 2.96001 10.341 2.38001 10.041V10.071C2.38001 12.151 3.86001 13.891 5.82001 14.281C5.19074 14.4532 4.5301 14.4772 3.89001 14.351C4.16162 15.2035 4.69355 15.9494 5.41103 16.4839C6.1285 17.0185 6.99546 17.3147 7.89001 17.331C6.37364 18.5315 4.494 19.1803 2.56001 19.171C2.22001 19.171 1.88001 19.151 1.54001 19.111C3.44001 20.331 5.70001 21.041 8.12001 21.041C16 21.041 20.33 14.501 20.33 8.83102C20.33 8.64102 20.33 8.46102 20.32 8.27102C21.16 7.67102 21.88 6.91102 22.46 6.04102Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <p className="text-[33px] text-white font-bold leading-[150%] mb-6">
              Explore{" "}
            </p>
            <ul className="text-[16px] font-normal space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  Homepage
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  For jobseekers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  For clients{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  Our sectors{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <p className="text-[33px] text-white font-bold leading-[150%] mb-6">
              Sectors
            </p>
            <ul className="text-[16px] font-normal space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  Software engineering{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  DevOps{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  Cloud{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  Infrastructure{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  Testing{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  Security{" "}
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <p className="text-[33px] text-white font-bold leading-[150%] mb-6">
              Services
            </p>
            <ul className="text-[16px] font-normal space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  New Item{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  New Item{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  New Item{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  New Item{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  New Item{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  New Item{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
