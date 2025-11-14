import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import ServicesGrid from "../components/sections/ServicesGrid";
import CloudChallenges from "@/components/sections/CloudChallenges";
import ServicesSection from "@/components/sections/ServicesSection";
import HomeBlogs from "@/components/sections/HomeBlogs";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <CloudChallenges />
        <ServicesSection />
        <HomeBlogs />
      </main>
    </>
  );
}
