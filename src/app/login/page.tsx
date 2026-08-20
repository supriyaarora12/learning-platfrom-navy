import type { Metadata } from "next";
import { LoginPageView } from "@/components/login/LoginPageView";
import { loginPage } from "@/content/login";

export const metadata: Metadata = {
  title: "Login",
  description: loginPage.welcome,
};

export default function LoginPage() {
  return <LoginPageView />;
}
