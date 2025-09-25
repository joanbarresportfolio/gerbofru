import { useLanguage } from "@/hooks/useLanguage";
import { Leaf, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <Leaf className="text-primary-foreground text-lg" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">AgroConnect</h3>
                <p className="text-sm text-gray-400">Broker Agrícola</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md" data-testid="footer-description">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                data-testid="social-facebook"
              >
                <Facebook className="text-primary" size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                data-testid="social-twitter"
              >
                <Twitter className="text-primary" size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                data-testid="social-linkedin"
              >
                <Linkedin className="text-primary" size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                data-testid="social-instagram"
              >
                <Instagram className="text-primary" size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4" data-testid="footer-quick-links">
              {t("footer.quick_links")}
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("nosotros")}
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="footer-link-about"
                >
                  {t("nav.about")}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("productos")}
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="footer-link-products"
                >
                  {t("nav.products")}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("servicios")}
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="footer-link-services"
                >
                  {t("nav.services")}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contacto")}
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="footer-link-contact"
                >
                  {t("nav.contact")}
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4" data-testid="footer-contact-info">
              {t("footer.contact_info")}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="text-primary mr-3" size={16} />
                <span className="text-gray-300" data-testid="footer-email">info@agroconnect.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary mr-3" size={16} />
                <span className="text-gray-300" data-testid="footer-phone">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-primary mr-3" size={16} />
                <span className="text-gray-300" data-testid="footer-address">
                  {t("footer.address")}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-gray-400" data-testid="footer-copyright">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
