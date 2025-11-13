import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RefreshCw, Download } from "lucide-react";
import { useState } from "react";

export const VideoPreview = () => {
  const [aspectRatio, setAspectRatio] = useState("16:9");
  return <div className="h-full bg-panel-darker rainbow-border p-4 rounded-xl flex flex-col">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">Video Preview</h3>
        </div>
        <div className="flex items-center gap-2">
          <Select value={aspectRatio} onValueChange={setAspectRatio}>
            <SelectTrigger className="h-8 w-[100px] text-xs bg-muted border-border text-foreground">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="16:9">16:9</SelectItem>
              <SelectItem value="9:16">9:16</SelectItem>
              <SelectItem value="4:3">4:3</SelectItem>
              <SelectItem value="1:1">1:1</SelectItem>
              <SelectItem value="21:9">21:9</SelectItem>
            </SelectContent>
          </Select>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted/50"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Re-render</p>
            </TooltipContent>
          </Tooltip>
          <Button
            size="sm"
            className="h-7 px-2.5 text-xs bg-gradient-to-r from-rainbow-cyan via-rainbow-purple to-rainbow-orange opacity-70 hover:opacity-100 text-white font-medium shadow-lg transition-opacity"
          >
            <Download className="h-3.5 w-3.5 mr-1" />
            Download
          </Button>
        </div>
      </div>

      <Card className="w-full flex-1 bg-gradient-to-br from-secondary to-panel-dark border-border flex items-center justify-center rounded-xl">
        <p className="text-muted-foreground">
          The entire video will be rendered here
        </p>
      </Card>
    </div>;
};