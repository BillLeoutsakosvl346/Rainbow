import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Image as ImageIcon, Upload } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const ImageGallery = () => {
  const [frameType, setFrameType] = useState<"initial" | "scene">("initial");

  return <div className="h-full bg-panel-dark rainbow-border p-4 rounded-xl flex flex-col">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">{frameType === "initial" ? "Initial Frame" : "Scene"}</h3>
        <div className="flex items-center gap-2">
          {frameType === "scene" && (
            <Button
              variant="ghost"
              className="h-7 px-3 text-xs bg-muted hover:bg-muted/80 text-white hover:text-white"
            >
              Extend
            </Button>
          )}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className="h-7 w-7 p-0 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-muted-foreground"
              >
                <Upload className="h-3.5 w-3.5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Upload</p>
            </TooltipContent>
          </Tooltip>
          <ToggleGroup
            type="single"
            value={frameType}
            onValueChange={(value) => value && setFrameType(value as "initial" | "scene")}
            className="bg-panel-darker border border-border rounded-lg p-0.5"
          >
            <ToggleGroupItem 
              value="initial" 
              className="data-[state=on]:bg-muted data-[state=on]:text-foreground px-3 py-1 text-xs h-7"
            >
              Initial Frame
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="scene"
              className="data-[state=on]:bg-muted data-[state=on]:text-foreground px-3 py-1 text-xs h-7"
            >
              Scene
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <Card className="flex-1 bg-secondary border-border rounded-xl">
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-panel-darker">
          <div className="text-center">
            <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground" />
            <p className="text-xs text-muted-foreground mt-2 px-2">Generated image</p>
          </div>
        </div>
      </Card>
    </div>;
};