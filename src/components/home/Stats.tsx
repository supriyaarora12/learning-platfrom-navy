import { homeStats } from "@/content/home";
import { StatsCarousel } from "@/components/ui/StatsCarousel";

export function Stats() {
  return <StatsCarousel items={homeStats} />;
}
