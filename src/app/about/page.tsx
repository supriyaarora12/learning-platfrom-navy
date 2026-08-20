import type { Metadata } from "next";
import { AboutPageView } from "@/components/about/AboutPageView";
import { aboutPage } from "@/content/about";

export const metadata: Metadata = {
  title: "About Us",
  description: aboutPage.subtitle,
};

export default function AboutPage() {
  return <AboutPageView />;
}
