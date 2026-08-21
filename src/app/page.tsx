import { CoursesPreview } from "@/components/home/CoursesPreview";
import { Faq } from "@/components/home/Faq";
import { FinalCta } from "@/components/home/FinalCta";
import { FollowAlong } from "@/components/home/FollowAlong";
import { FreeToolsPreview } from "@/components/home/FreeToolsPreview";
import { Hero } from "@/components/home/Hero";
import { Partners } from "@/components/home/Partners";
import { Results } from "@/components/home/Results";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyMerchantNavy } from "@/components/home/WhyMerchantNavy";
import { WhyUs } from "@/components/home/WhyUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Results />
      <Partners />
      <Testimonials />
      <FreeToolsPreview />
      <CoursesPreview />
      <FollowAlong />
      <WhyMerchantNavy />
      <Faq />
      <FinalCta />
    </>
  );
}
