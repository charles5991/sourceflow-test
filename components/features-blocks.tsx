import Microsoft from "../public/images/microsoft.jpeg";
import Oracle from "../public/images/oracle.jpeg";
import Cloudfare from "../public/images/cloudfare.jpg";
import Atlassian from "../public/images/atlassan.jpeg";
import Vmware from "../public/images/vmware.jpg";

import Image from "next/image";
export default function FeaturesBlocks() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 text-center">
          <div className="text-[#D2D2D2] font-helvetica text-16 font-bold leading-150 tracking--1">
            <h1>Who we works with</h1>
          </div>
          <div className="grid gap-2 grid-cols-2 md:grid-cols-5">
            <div className="flex items-center justify-center h-24  p-2">
              <Image src={Microsoft} alt="microsoft" />
            </div>

            <div className="flex items-center justify-center h-24  p-2">
              <Image src={Oracle} alt="oracle" />
            </div>

            <div className="flex items-center justify-center h-24  p-2">
              <Image src={Atlassian} alt="atlassian" />
            </div>

            <div className="flex items-center justify-center h-24  p-2">
              <Image src={Cloudfare} alt="cloudfare" />
            </div>

            <div className="flex items-center justify-center h-24  p-2">
              <Image src={Vmware} alt="vmware" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
