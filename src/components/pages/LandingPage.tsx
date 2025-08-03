import HeroSection from "../sections/HeroSection";
import NavBar from "../sections/NavBar";

export default function LandingPage() {
  return (
    <section className="container mx-auto max-w-full flex flex-col ">
      {/* Nav Bar */}
      <NavBar />

      <div className="flex container mx-auto relative top-30 left-0 right-0">
        {/* Hero Section */}
        <HeroSection />
      </div>
    </section>
  );
}
