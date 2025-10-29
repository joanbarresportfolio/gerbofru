import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "34600000000";
    const message = encodeURIComponent("Hola, me gustaría obtener más información sobre Gerbofru.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group relative"
      style={{ backgroundColor: "#25D366" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      data-testid="button-whatsapp"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-4xl text-white relative z-10" />
      
      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 rounded-full -z-10"
        style={{ backgroundColor: "#25D366" }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¡Escríbenos por WhatsApp!
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900"></div>
      </div>
    </motion.button>
  );
}
