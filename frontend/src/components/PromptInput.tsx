import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Play, Wand2 } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const PromptInput = () => {
  const [framePrompt, setFramePrompt] = useState("");
  const [animationPrompt, setAnimationPrompt] = useState("");
  const [frameMode, setFrameMode] = useState<"generate" | "edit">("generate");
  const [animationMode, setAnimationMode] = useState<"animate" | "edit">("animate");
  return <div className="h-full bg-panel-dark rainbow-border flex flex-col p-4 rounded-xl">
      {/* Initial Frame Section */}
      <div className="flex flex-col flex-1 mb-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">
            {frameMode === "generate" ? "Initial Frame Generation Prompt" : "Initial Frame Edit Prompt"}
          </h3>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-7 w-7 p-0 bg-muted hover:bg-muted/80"
                >
                  <Wand2 className="h-3.5 w-3.5 text-white" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Enhance Prompt</p>
              </TooltipContent>
            </Tooltip>
            <ToggleGroup
              type="single"
              value={frameMode}
              onValueChange={(value) => value && setFrameMode(value as "generate" | "edit")}
              className="bg-panel-darker border border-border rounded-lg p-0.5"
            >
              <ToggleGroupItem 
                value="generate" 
                className="data-[state=on]:bg-muted data-[state=on]:text-foreground px-3 py-1 text-xs h-7"
              >
                Generate
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="edit"
                className="data-[state=on]:bg-muted data-[state=on]:text-foreground px-3 py-1 text-xs h-7"
              >
                Edit
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <textarea value={framePrompt} onChange={e => setFramePrompt(e.target.value)} placeholder="A futuristic city at sunset with flying cars..." className="flex-1 resize-none rounded-lg bg-input border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rainbow-purple" />

        <Button variant="secondary" className="mt-2 w-full hover:bg-secondary/80 transition-all duration-300">
          <Sparkles className="h-4 w-4 mr-2" />
          {frameMode === "edit" ? "Edit First Frame" : "Generate First Frame"}
        </Button>
      </div>

      {/* Animation Section */}
      <div className="flex flex-col flex-1">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">
            {animationMode === "animate" ? "Scene Animation Prompt" : "Scene Edit Prompt"}
          </h3>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-7 w-7 p-0 bg-muted hover:bg-muted/80"
                >
                  <Wand2 className="h-3.5 w-3.5 text-white" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Enhance Prompt</p>
              </TooltipContent>
            </Tooltip>
            <ToggleGroup
              type="single"
              value={animationMode}
              onValueChange={(value) => value && setAnimationMode(value as "animate" | "edit")}
              className="bg-panel-darker border border-border rounded-lg p-0.5"
            >
              <ToggleGroupItem 
                value="animate" 
                className="data-[state=on]:bg-muted data-[state=on]:text-foreground px-3 py-1 text-xs h-7"
              >
                Animate
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="edit"
                className="data-[state=on]:bg-muted data-[state=on]:text-foreground px-3 py-1 text-xs h-7"
              >
                Edit
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <textarea value={animationPrompt} onChange={e => setAnimationPrompt(e.target.value)} placeholder="Camera slowly zooms into the city..." className="flex-1 resize-none rounded-lg bg-input border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rainbow-purple" />

        <Button variant="secondary" className="mt-2 w-full hover:bg-secondary/80 transition-all duration-300">
          <Play className="h-4 w-4 mr-2" />
          {animationMode === "edit" ? "Edit Scene" : "Generate Scene"}
        </Button>
      </div>
    </div>;
};