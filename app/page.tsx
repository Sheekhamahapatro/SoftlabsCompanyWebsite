import Hero from "@/components/Hero";
import BrandCarousel from "@/components/BrandCarousel";
import About from "@/components/About";
import WhatWeDo from "@/components/Whatwedo";
import MeetOurVisionaries from "@/components/MeetOurVisionaries";
import IndustriesCarousel from "@/components/IndustriesCarousel";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <BrandCarousel />
      <About />
      <WhatWeDo />
      <MeetOurVisionaries />
      <IndustriesCarousel />
      <CTASection />
    </>
  );
}
