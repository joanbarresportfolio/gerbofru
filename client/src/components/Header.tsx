import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white/100 border-b border-border z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3" data-testid="logo">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <Leaf className="text-primary-foreground text-lg" />{" "}
              {/* CAMBIAR LOGO AQUI */}
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-foreground">
                Gerbofru
              </h1>
              <p className="text-xs text-muted-foreground">
                Intermediación Hortofrutícola
              </p>
            </div>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-home"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => scrollToSection("productos")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-products"
            >
              {t("nav.products")}
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-services"
            >
              {t("nav.services")}
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-contact"
            >
              {t("nav.contact")}
            </button>
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-secondary rounded-lg p-1">
              <Button
                variant={language === "es" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("es")}
                className="px-2 py-1 text-xs font-medium transition-colors"
                data-testid="lang-es"
              >
                ES
              </Button>
              <Button
                variant={language === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("en")}
                className="px-2 py-1 text-xs font-medium transition-colors"
                data-testid="lang-en"
              >
                EN
              </Button>
              <Button
                variant={language === "cs" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("cs")}
                className="px-2 py-1 text-xs font-medium transition-colors"
                data-testid="lang-cs"
              >
                CS
              </Button>
              <Button
                variant={language === "pt" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("pt")}
                className="px-2 py-1 text-xs font-medium transition-colors"
                data-testid="lang-pt"
              >
                PT
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
              data-testid="mobile-nav-home"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
              data-testid="mobile-nav-about"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => scrollToSection("productos")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
              data-testid="mobile-nav-products"
            >
              {t("nav.products")}
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
              data-testid="mobile-nav-services"
            >
              {t("nav.services")}
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
              data-testid="mobile-nav-contact"
            >
              {t("nav.contact")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
