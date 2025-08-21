import Connect from "@/components/HomePage/Connect";
import DateTime from "@/components/HomePage/DateTime";
import Discussion from "@/components/HomePage/Discussion";
import Hero from "@/components/HomePage/Hero";
import JoinUs from "@/components/HomePage/JoinUs";
import OurMission from "@/components/HomePage/OurMission";
import OurVision from "@/components/HomePage/OurVision";
import Partnership from "@/components/HomePage/Partnership";
import Speakers from "@/components/HomePage/Speakers";
import Why from "@/components/HomePage/Why";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <OurMission/>
    <OurVision/>
    <DateTime/>
    <Discussion/>
    <Speakers/>
    <Why/>
    <Partnership/>
    <Connect/>
    <JoinUs/>
    </>

  );
}
