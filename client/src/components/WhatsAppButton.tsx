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
      className="fixed bottom-6 right-6 z-[9999] rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 group relative animate-bounce-slow"
      style={{ 
        backgroundColor: "#25D366",
        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      }}
      data-testid="button-whatsapp"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-4xl text-white" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¡Escríbenos por WhatsApp!
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900"></div>
      </div>
    </button>
  );
}
