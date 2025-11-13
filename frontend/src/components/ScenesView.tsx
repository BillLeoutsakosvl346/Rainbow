import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Film, Image as ImageIcon, Plus } from "lucide-react";
const initialScenes = [
  {
    id: 1,
    framePrompt: "A serene sunset over calm ocean waters with golden hues reflecting on the surface",
    animationPrompt: "Camera slowly pans across the water as waves gently ripple"
  },
  {
    id: 2,
    framePrompt: "Urban cityscape at night with neon lights and bustling streets",
    animationPrompt: "Camera zooms through the busy streets with lights blurring past"
  },
  {
    id: 3,
    framePrompt: "Mountain landscape with snow-capped peaks and pine forests below",
    animationPrompt: "Slow aerial view descending from peaks towards the forest"
  }
];

export const ScenesView = () => {
  const [scenes, setScenes] = useState(initialScenes);
  
  const addNewScene = () => {
    setScenes([...scenes, {
      id: scenes.length + 1,
      framePrompt: "New scene frame prompt",
      animationPrompt: "New scene animation prompt"
    }]);
  };
  return <div className="h-full bg-panel-darker rounded-xl p-4 flex flex-col">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Your Scenes</h3>
        
      </div>

      <ScrollArea className="flex-1">
        <div className="space-y-4 pr-4">
          {scenes.map((scene, index) => <Card key={scene.id} className="p-4 bg-panel-dark rainbow-border relative pt-16">
              {/* Scene Number - positioned at top left */}
              <div className="absolute top-4 left-4 bg-muted px-4 py-2 rounded">
                <span className="text-base font-semibold text-white">Scene {index + 1}</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                {/* Prompts */}
                <div className="flex flex-col gap-4">
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2 h-9">
                      <h4 className="text-sm font-semibold text-white">Initial Frame Prompt</h4>
                    </div>
                    <Card className="p-4 bg-secondary border-border flex-1">
                      <p className="text-sm text-foreground">{scene.framePrompt}</p>
                    </Card>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2 h-9">
                      <h4 className="text-sm font-semibold text-white">Animation Prompt</h4>
                    </div>
                    <Card className="p-4 bg-secondary border-border flex-1">
                      <p className="text-sm text-foreground">{scene.animationPrompt}</p>
                    </Card>
                  </div>
                </div>

                {/* Initial Frame */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-2 h-9">
                    <h4 className="text-sm font-semibold text-white">Initial Frame</h4>
                    <Button variant="secondary" size="sm" className="h-9 px-4 text-sm">
                      Edit
                    </Button>
                  </div>
                  <Card className="w-full aspect-square bg-secondary border-border flex items-center justify-center">
                    <div className="text-center">
                      <ImageIcon className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground">No frame yet</p>
                    </div>
                  </Card>
                </div>

                {/* Video */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-2 h-9">
                    <h4 className="text-sm font-semibold text-white">Video</h4>
                    <Button variant="secondary" size="sm" className="h-9 px-4 text-sm">
                      Edit
                    </Button>
                  </div>
                  <Card className="w-full aspect-square bg-secondary border-border flex items-center justify-center">
                    <div className="text-center">
                      <Film className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground">No video yet</p>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Audio */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="grid grid-cols-2 gap-4">
                  {/* Narration */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-semibold text-white">Narration</h4>
                      <Button variant="secondary" size="sm" className="h-9 px-4 text-sm">
                        Edit
                      </Button>
                    </div>
                    <Card className="p-3 bg-secondary border-border flex items-center justify-center">
                      <p className="text-xs text-muted-foreground">No narration yet</p>
                    </Card>
                  </div>

                  {/* Background Music */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-semibold text-white">Background Music</h4>
                      <Button variant="secondary" size="sm" className="h-9 px-4 text-sm">
                        Edit
                      </Button>
                    </div>
                    <Card className="p-3 bg-secondary border-border flex items-center justify-center">
                      <p className="text-xs text-muted-foreground">No music yet</p>
                    </Card>
                  </div>
                </div>
              </div>
            </Card>)}
          
          {/* Add New Scene Button */}
          <Button onClick={addNewScene} variant="outline" className="w-full h-16 bg-muted hover:bg-muted/80 border-border text-muted-foreground">
            <Plus className="h-6 w-6" />
          </Button>
        </div>
      </ScrollArea>
    </div>;
};