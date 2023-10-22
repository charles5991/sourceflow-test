export const metadata = {
  title: "Software Recruitment Co",
  description: "Boost on your career growth",
};

import Hero from "@/components/hero-home";
import FeaturesBlocks from "@/components/features-blocks";
import Features from "@/components/features-home";
import Features03 from "@/components/features-home-03";
import Target from "@/components/target";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      <Features />
      <Features03 />
      <Target />
      <Cta />
    </>
  );
}
