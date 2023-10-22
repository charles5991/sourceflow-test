import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";

export default function Header({ mode = "dark" }: { mode?: string }) {
  return (
    <header
      className={`absolute w-full z-30 bg-white ${mode !== "light" && "dark"}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-start flex-wrap items-center">
              <Dropdown title="For jobseekers">
                <li>
                  <Link
                    href="/"
                    className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
                  >
                    jobseekers subpages 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
                  >
                    jobseekers subpages 2
                  </Link>
                </li>
              </Dropdown>
              <Dropdown title="For Clients">
                <li>
                  <Link
                    href="/"
                    className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
                  >
                    Clients subpages 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
                  >
                    Clients subpages 2
                  </Link>
                </li>
              </Dropdown>
              <Dropdown title="Sector">
                <li>
                  <Link
                    href="/"
                    className="font-medium text-sm text-gray-600 hover:text-blue-900 flex py-2 px-5 leading-tight"
                  >
                    Sector Sub Pages
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="font-medium text-sm text-gray-600 hover:text-blue-900 flex py-2 px-5 leading-tight"
                  >
                    Sector Sub Pages
                  </Link>
                </li>
              </Dropdown>
              <Dropdown title="Resources">
                <li>
                  <Link
                    href="/"
                    className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
                  >
                    Resources subpages 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
                  >
                    Resources subpages 2
                  </Link>
                </li>
              </Dropdown>
            </ul>

            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="ml-3">
                <Link
                  className="btn text-[#451B09] bg-[#FCDF69] hover:bg-[#baa44c] w-full font-helvetica shadow-sm font-bold"
                  href="/"
                >
                  Upload CV
                </Link>
              </li>
              <li className="ml-3">
                <Link
                  className="btn-sm text-[#451B09] bg-[#F99D76] hover:bg-[#b37054] w-full font-helvetica shadow-sm font-bold"
                  href="/"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
