import type { Metadata } from "next";
import { ContactPageView } from "@/components/contact/ContactPageView";
import { contactPage } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description: contactPage.subtitle,
};

type Props = { searchParams: Promise<{ course?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const { course } = await searchParams;
  return <ContactPageView defaultCourse={course} />;
}
