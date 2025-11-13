import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Send, Plus } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  initialMessage?: string;
}

export const ChatInterface = ({ initialMessage }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Welcome to Rainbow! I'm here to help you generate amazing content. What would you like to create today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (initialMessage) {
      setMessages((prev) => [...prev, {
        id: Date.now().toString(),
        role: "user",
        content: initialMessage,
        timestamp: new Date(),
      }]);

      setTimeout(() => {
        setMessages((prev) => [...prev, {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Great idea! Let me help you create that. I'll start analyzing your request and preparing the content generation.",
          timestamp: new Date(),
        }]);
      }, 1000);
    }
  }, [initialMessage]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }]);
    setInput("");

    // Reset textarea height
    const textarea = document.querySelector('textarea');
    if (textarea) textarea.style.height = '40px';

    // Simulate assistant response
    setTimeout(() => {
      setMessages((prev) => [...prev, {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I understand your request. Let me help you with that!",
        timestamp: new Date(),
      }]);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    // Auto-expand/shrink textarea
    e.target.style.height = 'auto';
    const newHeight = Math.min(e.target.scrollHeight, 200);
    e.target.style.height = `${newHeight}px`;
    // Only show scrollbar when at max height
    e.target.style.overflowY = newHeight === 200 ? 'auto' : 'hidden';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full bg-panel-darker rainbow-border rounded-xl overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <h2 className="text-xl font-bold rainbow-text">Rainbow Chat</h2>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === "user"
                    ? "bg-muted text-foreground"
                    : "bg-chat-assistant border border-border"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="relative flex items-center gap-2 bg-input rounded-xl border border-border p-2 transition-colors hover:border-border/80 focus-within:border-muted">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 shrink-0 text-muted-foreground hover:text-white hover:bg-muted/80"
          >
            <Plus className="h-4 w-4" />
          </Button>
          <textarea
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Ask Rainbow..."
            className="flex-1 resize-none bg-transparent text-sm leading-6 focus:outline-none placeholder:text-muted-foreground min-h-[36px] py-2 transition-all overflow-hidden"
            rows={1}
          />
          <Button
            onClick={handleSend}
            size="icon"
            className="h-9 w-9 shrink-0 bg-gradient-to-br from-rainbow-purple via-rainbow-pink to-rainbow-red hover:brightness-110 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
