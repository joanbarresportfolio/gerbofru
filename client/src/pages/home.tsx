import { useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowWeWork from "@/components/HowWeWork";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import ContactForms from "@/components/ContactForms";
import Footer from "@/components/Footer";

export default function Home() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Gerbofru - " + t("nav.home");
  }, [t]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <HowWeWork />
        <Products />
        <Services />
        <Benefits />
        <Testimonials />
        <ContactForms />
      </main>
      <Footer />
    </div>
  );
}
