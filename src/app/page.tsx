import NavigationV2 from "../components/v2/navigation";
import HeroV2 from "../components/v2/hero";
import AboutV2 from "../components/v2/about";
import StatsV2 from "../components/v2/stats";
import PhilosophyV2 from "../components/v2/philosophy";
import ServiceV2 from "../components/v2/service";
import ResultsV2 from "../components/v2/results";
import GalleryV2 from "../components/v2/gallery";
import MentorshipV2 from "../components/v2/mentorship";
import TestimonialsV2 from "../components/v2/testimonials";
import PartnerGalleryV2 from "../components/v2/partner-gallery";
import FaqV2 from "../components/v2/faq";
import BlogTeaserV2 from "../components/v2/blog-teaser";
import ContactV2 from "../components/v2/contact";
import FooterV2 from "../components/v2/footer";
import { HomeFaqSchema } from "../components/structured-data";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-[#f5f2ec] text-black"
      style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
    >
      <HomeFaqSchema />
      <NavigationV2 />
      <HeroV2 />
      <StatsV2 />
      <AboutV2 />
      <PhilosophyV2 />
      <ServiceV2 />
      <ResultsV2 />
      <GalleryV2 />
      <MentorshipV2 />
      <TestimonialsV2 />
      <PartnerGalleryV2 />
      <FaqV2 />
      <BlogTeaserV2 />
      <ContactV2 />
      <FooterV2 />
    </div>
  );
}
