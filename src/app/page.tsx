import HeroText from "@/components/dashboard/HeroText";
import HeroImage from "@/components/dashboard/HeroImage";
import CounterSection from "@/components/dashboard/CounterSection";
import ServiceSection from "@/components/dashboard/ServiceSection";
import InfoSection from "@/components/dashboard/InfoSection";

export default function Home() {
  return (
    <div className="pt-[100px]">
      <HeroText />
      <HeroImage />
      <CounterSection />
      <ServiceSection />
      <InfoSection />
    </div>
  );
}
