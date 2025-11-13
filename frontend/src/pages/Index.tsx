import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChatInterface } from "@/components/ChatInterface";
import { PromptInput } from "@/components/PromptInput";
import { ImageGallery } from "@/components/ImageGallery";
import { VideoPreview } from "@/components/VideoPreview";
import { ScenesView } from "@/components/ScenesView";
import { AudioNarration } from "@/components/AudioNarration";
import AssetsView from "@/components/AssetsView";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Settings as SettingsIcon } from "lucide-react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Index = () => {
  const [mode, setMode] = useState<"create" | "scenes" | "assets">("create");
  const navigate = useNavigate();
  const location = useLocation();
  const initialMessage = location.state?.initialMessage as string | undefined;

  return (
    <div className="h-screen w-full bg-background flex flex-col overflow-hidden">
      {/* Header */}
      <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-panel-darker">
        <h1 className="text-2xl font-bold rainbow-text">Rainbow</h1>
        <h2 className="text-xl font-semibold text-foreground absolute left-1/2 transform -translate-x-1/2">
          AI-Powered Content Generation Studio
        </h2>
        <div className="flex items-center gap-4">
          <ToggleGroup
            type="single"
            value={mode}
            onValueChange={(value) => value && setMode(value as "create" | "scenes" | "assets")}
            className="bg-panel-darker border border-border rounded-lg p-1"
          >
            <ToggleGroupItem 
              value="create" 
              className="data-[state=on]:bg-muted data-[state=on]:text-foreground px-6"
            >
              Create
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="scenes"
              className="data-[state=on]:bg-muted data-[state=on]:text-foreground px-6"
            >
              Scenes
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="assets"
              className="data-[state=on]:bg-muted data-[state=on]:text-foreground px-6"
            >
              Assets
            </ToggleGroupItem>
          </ToggleGroup>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/settings")}
                className="text-muted-foreground hover:text-muted-foreground/80 hover:bg-muted/50"
              >
                <SettingsIcon className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </header>

      {/* Main Layout */}
      <ResizablePanelGroup direction="horizontal" className="flex-1">
        {/* Left Side - Chat */}
        <ResizablePanel defaultSize={25} minSize={15} maxSize={40}>
          <div className="h-full p-2">
            <ChatInterface initialMessage={initialMessage} />
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Right Side - Content Area */}
        <ResizablePanel defaultSize={75}>
          {mode === "create" ? (
            <ResizablePanelGroup direction="vertical">
              {/* Top - Audio & Video Preview */}
              <ResizablePanel defaultSize={40} minSize={35} maxSize={60}>
                <ResizablePanelGroup direction="horizontal">
                  {/* Audio & Narration */}
                  <ResizablePanel defaultSize={40} minSize={30} maxSize={50}>
                    <div className="h-full p-2">
                      <AudioNarration />
                    </div>
                  </ResizablePanel>

                  <ResizableHandle withHandle />

                  {/* Video Preview */}
                  <ResizablePanel defaultSize={60}>
                    <div className="h-full p-2">
                      <VideoPreview />
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>

              <ResizableHandle withHandle />

              {/* Bottom - Prompt Input and Image Gallery */}
              <ResizablePanel defaultSize={60}>
                <ResizablePanelGroup direction="horizontal">
                  {/* Prompt Input */}
                  <ResizablePanel defaultSize={45} minSize={25} maxSize={70}>
                    <div className="h-full p-2">
                      <PromptInput />
                    </div>
                  </ResizablePanel>

                  <ResizableHandle withHandle />

                  {/* Image Gallery */}
                  <ResizablePanel defaultSize={55}>
                    <div className="h-full p-2">
                      <ImageGallery />
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          ) : mode === "scenes" ? (
            <div className="h-full p-2">
              <ScenesView />
            </div>
          ) : (
            <div className="h-full p-2">
              <AssetsView />
            </div>
          )}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Index;
