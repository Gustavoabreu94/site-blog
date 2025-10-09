import { CallToAction } from "@/src/templates/landing-page/call-to-action";
import { Inter, PT_Sans_Caption } from "next/font/google";
import { Footer } from "./footer";
import { Header } from "./header";

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const ptSansCaption = PT_Sans_Caption({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`${inter.variable} ${ptSansCaption.variable} relative flex min-h-screen flex-col bg-gray-700 font-inter`}
    >
      <Header />
      <main className="flex-1 flex flex-col mb-12">{children}</main>
      <CallToAction />
      <Footer />
    </div>
  );
};
