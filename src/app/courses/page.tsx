import type { Metadata } from "next";
import { CoursesPageView } from "@/components/courses/CoursesPageView";
import { coursesPage } from "@/content/courses";

export const metadata: Metadata = {
  title: "All Courses",
  description: coursesPage.subtitle,
};

export default function CoursesPage() {
  return <CoursesPageView />;
}
