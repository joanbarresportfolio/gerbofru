import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "34689422852";
    const message = encodeURIComponent(
      "Hola, me gustaría obtener más información sobre Gerbofru.",
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      <style>{`
        @keyframes pulse-whatsapp {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
        }
        .whatsapp-pulse {
          animation: pulse-whatsapp 2s infinite;
        }
      `}</style>
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-[9999] rounded-full p-4 shadow-2xl hover:scale-110 transition-transform whatsapp-pulse"
        style={{ backgroundColor: "#25D366" }}
        data-testid="button-whatsapp"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="text-4xl text-white" />
      </button>
    </>
  );
}
