import { MessageCircle } from "lucide-react";

interface ChatbotButtonProps {
  onClick: () => void;
}

const ChatbotButton = ({ onClick }: ChatbotButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-lg shadow-primary/25 hover:bg-primary/90 hover:scale-105 transition-all duration-300"
    >
      <MessageCircle className="w-5 h-5" />
      Termin buchen
    </button>
  );
};

export default ChatbotButton;