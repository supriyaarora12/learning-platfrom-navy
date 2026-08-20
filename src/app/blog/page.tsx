import type { Metadata } from "next";
import { BlogPageView } from "@/components/blog/BlogPageView";
import { blogPage } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: blogPage.subtitle,
};

export default function BlogPage() {
  return <BlogPageView />;
}
