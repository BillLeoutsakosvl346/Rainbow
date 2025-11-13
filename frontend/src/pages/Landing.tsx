import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Send, Plus } from "lucide-react";

export default function Landing() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    if (!input.trim()) return;
    navigate("/studio", { state: { initialMessage: input } });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-rainbow-blue/40 via-rainbow-purple/40 to-rainbow-pink/40 flex items-center justify-center p-4 animate-fade-in relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { top: '-top-20', left: '-left-20', size: 'w-[700px] h-[700px]', colors: 'from-rainbow-cyan/70 to-rainbow-blue/70', delay: '0s' },
          { top: 'top-1/4', left: 'left-1/4', size: 'w-[600px] h-[600px]', colors: 'from-rainbow-green/65 to-rainbow-lime/60', delay: '0.5s' },
          { top: '-top-20', left: '-right-20', size: 'w-[650px] h-[650px]', colors: 'from-rainbow-purple/80 to-rainbow-pink/70', delay: '1s' },
          { top: 'top-1/4', left: 'right-1/4', size: 'w-[580px] h-[580px]', colors: 'from-rainbow-yellow/75 to-rainbow-orange/65', delay: '1.5s' },
          { top: '-bottom-20', left: '-left-20', size: 'w-[750px] h-[750px]', colors: 'from-rainbow-orange/75 to-rainbow-red/70', delay: '2s' },
          { top: 'bottom-1/4', left: 'left-1/4', size: 'w-[620px] h-[620px]', colors: 'from-rainbow-pink/70 to-rainbow-purple/65', delay: '2.5s' },
          { top: '-bottom-20', left: '-right-20', size: 'w-[700px] h-[700px]', colors: 'from-rainbow-lime/70 to-rainbow-green/75', delay: '0.3s' },
          { top: 'bottom-1/4', left: 'right-1/4', size: 'w-[640px] h-[640px]', colors: 'from-rainbow-blue/65 to-rainbow-cyan/70', delay: '0.8s' },
          { top: 'top-1/2', left: '-left-32', size: 'w-[600px] h-[600px]', colors: 'from-rainbow-purple/65 to-rainbow-cyan/70', delay: '1.2s' },
          { top: 'top-1/3', left: 'left-0', size: 'w-[550px] h-[550px]', colors: 'from-rainbow-green/60 to-rainbow-teal/65', delay: '1.7s' },
          { top: 'top-1/2', left: '-right-32', size: 'w-[650px] h-[650px]', colors: 'from-rainbow-red/70 to-rainbow-orange/65', delay: '2.2s' },
          { top: 'top-2/3', left: 'right-0', size: 'w-[580px] h-[580px]', colors: 'from-rainbow-yellow/70 to-rainbow-pink/60', delay: '2.7s' },
          { top: 'top-1/3', left: 'left-1/3', size: 'w-[600px] h-[600px]', colors: 'from-rainbow-cyan/50 to-rainbow-purple/60', delay: '0.6s' },
          { top: 'bottom-1/3', left: 'right-1/3', size: 'w-[550px] h-[550px]', colors: 'from-rainbow-orange/60 to-rainbow-blue/50', delay: '1.8s' },
          { top: 'top-1/2', left: 'left-1/2', size: 'w-[520px] h-[520px]', colors: 'from-rainbow-green/55 to-rainbow-pink/60', delay: '1.3s' },
          { top: '-top-32', left: 'left-1/2', size: 'w-[600px] h-[600px]', colors: 'from-rainbow-lime/65 to-rainbow-cyan/60', delay: '0.9s' },
          { top: '-bottom-32', left: 'left-1/2', size: 'w-[650px] h-[650px]', colors: 'from-rainbow-purple/70 to-rainbow-yellow/65', delay: '2.4s' }
        ].map((orb, i) => (
          <div 
            key={i}
            className={`absolute ${orb.top} ${orb.left} ${orb.size} bg-gradient-to-br ${orb.colors} rounded-full blur-3xl animate-pulse`}
            style={{ animationDelay: orb.delay }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center space-y-8">
        {/* Logo and title */}
        <div className="space-y-4">
          <h1 
            className="text-6xl md:text-7xl font-bold rainbow-text tracking-wider"
            style={{
              textShadow: '0 0 30px rgba(0,0,0,0.5), 0 0 60px rgba(0,0,0,0.3)',
              WebkitTextStroke: '1px rgba(0,0,0,1)',
            }}
          >
            Rainbow
          </h1>
          <p className="text-xl md:text-2xl text-white font-semibold drop-shadow-lg" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.5)' }}>
            Create stunning videos with AI-powered generation
          </p>
        </div>

        {/* Large chat input */}
        <div className="w-full rainbow-border rounded-2xl p-1 shadow-2xl">
          <div className="relative bg-background/95 backdrop-blur-sm rounded-xl p-4">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Describe the video you want to create..."
              className="w-full h-32 resize-none bg-transparent p-2 pb-14 text-base leading-relaxed focus:outline-none placeholder:text-muted-foreground"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-muted/50"
              >
                <Plus className="h-5 w-5" />
              </Button>
              <Button
                onClick={handleSend}
                disabled={!input.trim()}
                size="icon"
                className="h-10 w-10 bg-gradient-to-br from-rainbow-cyan via-rainbow-purple to-rainbow-orange hover:opacity-90 transition-opacity"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Example prompts */}
        <div className="space-y-3">
          <p className="text-sm text-white font-medium drop-shadow-md" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.7)' }}>Try an example:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "A serene ocean sunset with waves",
              "A futuristic city at night",
              "A cozy coffee shop interior"
            ].map((example) => (
              <button
                key={example}
                onClick={() => setInput(example)}
                className="px-4 py-2 text-sm bg-muted hover:bg-muted/80 rounded-lg transition-colors text-foreground"
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
