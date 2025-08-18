import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "919284441622";
  const message = "Hello, I'm interested in your logistics services. Can you help me?";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
      size="lg"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">Contact us on WhatsApp</span>
    </Button>
  );
};

export default WhatsAppButton;