import { Upload, Image, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const AssetsView = () => {
  return (
    <div className="h-full flex flex-col gap-4 p-4">
      {/* Images & Videos Section */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-white mb-2">Images & Videos</h3>
        <div className="flex-1 bg-panel-darker rainbow-border p-6 rounded-xl relative">
          <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 text-muted-foreground/30" strokeWidth={1.5} />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className="h-40 w-40 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-muted-foreground relative z-10 [&_svg]:!h-14 [&_svg]:!w-14"
              >
                <Upload />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Upload</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* Audio Section */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-white mb-2">Audio</h3>
        <div className="flex-1 bg-panel-darker rainbow-border p-6 rounded-xl relative">
          <Music className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 text-muted-foreground/30" strokeWidth={1.5} />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className="h-40 w-40 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-muted-foreground relative z-10 [&_svg]:!h-14 [&_svg]:!w-14"
              >
                <Upload />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Upload</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default AssetsView;
