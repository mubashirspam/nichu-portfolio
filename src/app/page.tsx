import NavigationV2 from "../components/v2/navigation";
import HeroV2 from "../components/v2/hero";
import AboutV2 from "../components/v2/about";
import StatsV2 from "../components/v2/stats";
import ServiceV2 from "../components/v2/service";
import ResultsV2 from "../components/v2/results";
import GalleryV2 from "../components/v2/gallery";
import TestimonialsV2 from "../components/v2/testimonials";
import PartnerGalleryV2 from "../components/v2/partner-gallery";
import ContactV2 from "../components/v2/contact";
import FooterV2 from "../components/v2/footer";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-[#f5f2ec] text-black"
      style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
    >
      <NavigationV2 />
      <HeroV2 />
      <StatsV2 />
      <AboutV2 />
      <ServiceV2 />
      <ResultsV2 />
      <GalleryV2 />
      <TestimonialsV2 />
      <PartnerGalleryV2 />
      <ContactV2 />
      <FooterV2 />
    </div>
  );
}
