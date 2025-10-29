import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "34600000000";
    const message = encodeURIComponent("Hola, me gustaría obtener más información sobre Gerbofru.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-[9999] rounded-full p-4 shadow-2xl hover:scale-110 transition-transform"
      style={{ backgroundColor: "#25D366" }}
      data-testid="button-whatsapp"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-4xl text-white" />
    </button>
  );
}
