import type { Metadata } from "next";
import { HowItWorksPageView } from "@/components/how-it-works/HowItWorksPageView";
import { howItWorksPage } from "@/content/how-it-works";

export const metadata: Metadata = {
  title: "How It Works",
  description: howItWorksPage.subtitle,
};

export default function HowItWorksPage() {
  return <HowItWorksPageView />;
}
