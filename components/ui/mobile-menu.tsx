"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-blue-900 dark:text-blue-900"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            <li className="py-2 my-2 border-t border-b border-gray-200">
              <span
                className="flex font-medium text-slate-800 hover:text-blue-600 py-2"
                onClick={() => setMobileNavOpen(false)}
              >
                For jobseekers
              </span>
              <ul className="pl-4">
                <li>
                  <Link
                    href="/"
                    className="text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    jobseekers Sub 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    jobseekers Sub 2
                  </Link>
                </li>
              </ul>
            </li>
            <li className="py-2 my-2 border-t border-b border-gray-200">
              <span
                className="flex font-medium text-slate-800 hover:text-blue-600 py-2"
                onClick={() => setMobileNavOpen(false)}
              >
                For Client
              </span>
              <ul className="pl-4">
                <li>
                  <Link
                    href="/"
                    className="text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Client Sub 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Client Sub 2
                  </Link>
                </li>
              </ul>
            </li>
            <li className="py-2 my-2 border-t border-b border-gray-200">
              <span
                className="flex font-medium text-slate-800 hover:text-blue-600 py-2"
                onClick={() => setMobileNavOpen(false)}
              >
                Sector
              </span>
              <ul className="pl-4">
                <li>
                  <Link
                    href="/"
                    className="text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Sector Sub 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Sector Sub 2
                  </Link>
                </li>
              </ul>
            </li>
            <li className="py-2 my-2 border-t border-b border-gray-200">
              <span
                className="flex font-medium text-slate-800 hover:text-blue-600 py-2"
                onClick={() => setMobileNavOpen(false)}
              >
                Resources
              </span>
              <ul className="pl-4">
                <li>
                  <Link
                    href="/"
                    className="text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Resources Sub 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Resources Sub 2
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/signin"
                className="flex font-medium w-full text-slate-800 hover:text-blue-600 py-2"
                onClick={() => setMobileNavOpen(false)}
              >
                Upload CV
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex font-medium text-blue-600 py-2 group"
                onClick={() => setMobileNavOpen(false)}
              >
                Contact Us
                <span className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                  -&gt;
                </span>
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  );
}
