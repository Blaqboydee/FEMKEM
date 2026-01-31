import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import Whyfekem from "@/components/home/WhyFEMKEM";
import HowItWorks from "@/components/home/HowItWorks";
import CTA from "@/components/shared/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Whyfekem />
      <HowItWorks />
      <CTA />
    </>
  );
}

