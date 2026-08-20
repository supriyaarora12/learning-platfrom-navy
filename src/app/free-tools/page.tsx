import type { Metadata } from "next";
import { FreeToolsPageView } from "@/components/free-tools/FreeToolsPageView";
import { freeToolsPage } from "@/content/free-tools";

export const metadata: Metadata = {
  title: "Free Tools",
  description: freeToolsPage.subtitle,
};

export default function FreeToolsPage() {
  return <FreeToolsPageView />;
}
