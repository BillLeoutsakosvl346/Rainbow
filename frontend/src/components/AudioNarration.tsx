import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Music, Mic, Upload } from "lucide-react";

export const AudioNarration = () => {
  const [audioMode, setAudioMode] = useState<"narration" | "music">("narration");

  return (
    <div className="h-full bg-panel-darker rainbow-border p-4 rounded-xl flex flex-col gap-3">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-sm font-semibold text-foreground">Audio & Narration</h3>
        <div className="flex items-center gap-2">
          {audioMode === "music" && (
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
          )}
          <ToggleGroup
            type="single"
            value={audioMode}
            onValueChange={(value) => value && setAudioMode(value as "narration" | "music")}
            className="bg-panel-darker border border-border rounded-lg p-0.5"
          >
            <ToggleGroupItem
              value="narration"
              className="data-[state=on]:bg-muted data-[state=on]:text-foreground px-3 py-1 text-xs h-7"
            >
              Narration
            </ToggleGroupItem>
            <ToggleGroupItem
              value="music"
              className="data-[state=on]:bg-muted data-[state=on]:text-foreground px-3 py-1 text-xs h-7"
            >
              Background Music
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* Narration Section */}
      {audioMode === "narration" && (
        <Card className="bg-gradient-to-br from-secondary to-panel-dark border-border p-3 flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <Mic className="h-4 w-4 text-rainbow-orange" />
            <span className="text-xs font-medium text-foreground">Narration</span>
          </div>
          
          <Textarea
            placeholder="Enter narration text here..."
            className="flex-1 resize-none text-sm bg-background/50"
          />
          
          <div className="flex gap-2">
            <Select defaultValue="alloy">
              <SelectTrigger className="h-8 text-xs bg-background/50">
                <SelectValue placeholder="Voice" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alloy">Alloy</SelectItem>
                <SelectItem value="echo">Echo</SelectItem>
                <SelectItem value="fable">Fable</SelectItem>
                <SelectItem value="onyx">Onyx</SelectItem>
                <SelectItem value="nova">Nova</SelectItem>
                <SelectItem value="shimmer">Shimmer</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="neutral">
              <SelectTrigger className="h-8 text-xs bg-background/50">
                <SelectValue placeholder="Style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="neutral">Neutral</SelectItem>
                <SelectItem value="energetic">Energetic</SelectItem>
                <SelectItem value="happy">Happy</SelectItem>
                <SelectItem value="sad">Sad</SelectItem>
                <SelectItem value="excited">Excited</SelectItem>
                <SelectItem value="calm">Calm</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="secondary" size="sm" className="h-8 text-xs">
              Convert
            </Button>
          </div>

          <div className="h-8 bg-background/50 rounded flex items-center justify-center">
            <span className="text-xs text-muted-foreground">Audio Player</span>
          </div>
        </Card>
      )}

      {/* Background Music Section */}
      {audioMode === "music" && (
        <Card className="bg-gradient-to-br from-secondary to-panel-dark border-border p-3 flex-1 flex flex-col gap-2">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <Music className="h-4 w-4 text-rainbow-orange" />
              <span className="text-xs font-medium text-foreground">Background Music</span>
            </div>
            <Select>
              <SelectTrigger className="h-7 w-32 text-xs bg-background/50 text-foreground [&>span]:data-[placeholder]:text-muted-foreground">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="epic-journey">Epic Journey</SelectItem>
                <SelectItem value="calm-waves">Calm Waves</SelectItem>
                <SelectItem value="digital-dream">Digital Dream</SelectItem>
                <SelectItem value="rising-action">Rising Action</SelectItem>
                <SelectItem value="peaceful-moments">Peaceful Moments</SelectItem>
                <SelectItem value="upbeat-energy">Upbeat Energy</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Textarea
            placeholder="Describe the background music you want..."
            className="flex-1 resize-none text-sm bg-background/50"
          />
          
          <div className="flex gap-2">
            <Select defaultValue="cinematic">
              <SelectTrigger className="h-8 text-xs flex-1 bg-background/50">
                <SelectValue placeholder="Genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cinematic">Cinematic</SelectItem>
                <SelectItem value="ambient">Ambient</SelectItem>
                <SelectItem value="upbeat">Upbeat</SelectItem>
                <SelectItem value="dramatic">Dramatic</SelectItem>
                <SelectItem value="electronic">Electronic</SelectItem>
                <SelectItem value="acoustic">Acoustic</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="secondary" size="sm" className="h-8 text-xs">
              Generate
            </Button>
          </div>

          <div className="h-8 bg-background/50 rounded flex items-center justify-center">
            <span className="text-xs text-muted-foreground">Audio Player</span>
          </div>
        </Card>
      )}
    </div>
  );
};
