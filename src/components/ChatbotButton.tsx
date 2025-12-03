import { MessageCircle } from "lucide-react";

const ChatbotButton = () => {
  return (
    <a
      href="tel:+4930123456789"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-lg shadow-primary/25 hover:bg-primary/90 hover:scale-105 transition-all duration-300"
    >
      <MessageCircle className="w-5 h-5" />
      Book Termin
    </a>
  );
};

export default ChatbotButton;
