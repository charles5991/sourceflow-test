import Image from "next/image";
import TargetImage from "@/public/images/target.png";
import Link from "next/link";

export default function Target() {
  return (
    <section>
      <div className="bg-[#064EA4] py-14 dark:bg-none lg:py-[100px] md:px-32 px-6">
        <div className="container">
          <div className="grid items-center gap-8 md:grid-cols-3 lg:grid-cols-2 xl:items-start">
            <div className="order-1 md:order-2 md:col-span-2 lg:col-auto">
              <div className="mb-5 text-center font-helvetica font-bold text-[46px] leading-normal md:text-left text-white">
                <p>Why us?</p>
              </div>
              <div className="text-center font-helvetica text-white text-[16px] font-normal leading-[150%] md:text-left">
                <p className="pb-5">
                  Lorem ipsum dolor sit amet consectetur. Tellus purus cras
                  ornare placerat enim at ut. Lorem egestas aliquam dis
                  dignissim. Mauris ultricies tortor netus purus proin. Amet
                  cursus posuere velit odio nibh auctor. Id nulla vitae ipsum
                  morbi tellus eget lacus aliquet faucibus. Varius donec arcu
                  placerat augue eget.
                </p>
                <Link
                  href="/"
                  className="btn border-2 border-white rounded-full mt-3 font-helvetica capitalize text-white"
                >
                  More about us
                </Link>
              </div>
            </div>
            <Image
              src="/images/whyus.png"
              alt="whatwedo"
              className="order-2 mx-auto rounded-[32px] md:order-1 md:mx-0"
              data-aos-duration="1000"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F99D76] py-14 dark:bg-none lg:py-[100px] md:px-32 px-6">
        <div className="container">
          <div className="grid items-center gap-8 md:grid-cols-3 lg:grid-cols-2 xl:items-start">
            <div className="order-2 md:order-1 md:col-span-2 lg:col-auto">
              <div className="mb-5 text-center font-helvetica font-bold text-[46px] leading-normal md:text-left text-[#0E2152]">
                <p>What we do</p>
              </div>
              <div className="text-center font-helvetica text-[#0E2152] text-[16px] font-normal leading-[150%] md:text-left">
                <p className="pb-5">
                  Lorem ipsum dolor sit amet consectetur. Tellus purus cras
                  ornare placerat enim at ut. Lorem egestas aliquam dis
                  dignissim. Mauris ultricies tortor netus purus proin. Amet
                  cursus posuere velit odio nibh auctor. Id nulla vitae ipsum
                  morbi tellus eget lacus aliquet faucibus. Varius donec arcu
                  placerat augue eget.
                </p>
                <Link
                  href="/"
                  className="btn border-2 border-[#0E2152] rounded-full mt-3 font-helvetica capitalize text-[#0E2152]"
                >
                  View our services{" "}
                </Link>
              </div>
            </div>
            <Image
              src="/images/whatwedo1.png"
              alt="whatwedo"
              className="order-1 mx-auto rounded-[32px] md:order-2 md:mx-0"
              data-aos-duration="1000"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
