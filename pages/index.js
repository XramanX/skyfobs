import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import ServicesGrid from "../components/sections/ServicesGrid";
import CloudChallenges from "@/components/sections/CloudChallenges";
import ServicesSection from "@/components/sections/ServicesSection";

console.log("Header type:", typeof Header, Header);
console.log("Hero type:", typeof Hero, Hero);
console.log("ServicesGrid type:", typeof ServicesGrid, ServicesGrid);
console.log("Footer type:", typeof Footer, Footer);

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <CloudChallenges />
        <ServicesSection />
      </main>
    </>
  );
}
