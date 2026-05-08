import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Differentials from "@/components/Differentials";
import CTAFinal from "@/components/CTAFinal";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Results />
        <Testimonials />
        <Differentials />
        <CTAFinal />
        <FAQ />
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
