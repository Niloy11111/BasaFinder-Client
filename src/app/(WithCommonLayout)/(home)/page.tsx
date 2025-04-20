import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
import CallToActionSection from "@/components/modules/home/landing/CallToActionSection";
import DiscoverSection from "@/components/modules/home/landing/DiscoverSection";
import FeaturesSection from "@/components/modules/home/landing/FeaturesSection";
import FooterSection from "@/components/modules/home/landing/FooterSection";
import HeroSection from "@/components/modules/home/landing/HeroSection";
import Testimonials from "@/components/modules/home/landing/Testimonials";

const HomePage = () => {
  return (
    <div className="bg-white">
      <HeroSection />

      <FeaturedProducts />
      <FeaturesSection />
      <DiscoverSection />

      <Testimonials />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
