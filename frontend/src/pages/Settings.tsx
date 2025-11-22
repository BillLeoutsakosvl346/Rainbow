import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, User, CreditCard, Settings as SettingsIcon, Bell, Shield, Palette } from "lucide-react";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-background flex flex-col">
      <header className="h-16 border-b border-border flex items-center px-6 bg-panel-darker">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="mr-4 hover:bg-muted/50 text-muted-foreground hover:text-muted-foreground"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold text-foreground">Settings</h1>
      </header>

      <ScrollArea className="flex-1">
        <div className="max-w-4xl mx-auto p-6">
          <Accordion type="single" collapsible className="space-y-4">
            {/* Account Section */}
            <AccordionItem value="account" className="rainbow-border bg-panel-dark rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-foreground">Account</h3>
                    <p className="text-sm text-muted-foreground">Manage your account information and preferences</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Display Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter your name" 
                    className="bg-muted border-border text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-muted border-border text-foreground"
                  />
                </div>
                <Separator className="bg-border" />
                <Button className="bg-muted text-foreground hover:bg-muted/80">
                  Save Changes
                </Button>
              </AccordionContent>
            </AccordionItem>

            {/* Generation Preferences Section */}
            <AccordionItem value="generation" className="rainbow-border bg-panel-dark rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <SettingsIcon className="h-5 w-5 text-muted-foreground" />
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-foreground">Generation Preferences</h3>
                    <p className="text-sm text-muted-foreground">Configure default settings for AI content generation</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-foreground">High Quality Output</Label>
                    <p className="text-sm text-muted-foreground">Generate content at maximum quality</p>
                  </div>
                  <Switch />
                </div>
                <Separator className="bg-border" />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-foreground">Auto-save Generations</Label>
                    <p className="text-sm text-muted-foreground">Automatically save all generated content</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator className="bg-border" />
                <div className="space-y-2">
                  <Label htmlFor="resolution" className="text-foreground">Default Resolution</Label>
                  <Input 
                    id="resolution" 
                    placeholder="1920x1080" 
                    className="bg-muted border-border text-foreground"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Notifications Section */}
            <AccordionItem value="notifications" className="rainbow-border bg-panel-dark rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-foreground">Notifications</h3>
                    <p className="text-sm text-muted-foreground">Manage how you receive notifications</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-foreground">Generation Complete</Label>
                    <p className="text-sm text-muted-foreground">Notify when content generation finishes</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator className="bg-border" />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-foreground">Weekly Summary</Label>
                    <p className="text-sm text-muted-foreground">Receive weekly usage statistics</p>
                  </div>
                  <Switch />
                </div>
                <Separator className="bg-border" />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-foreground">Product Updates</Label>
                    <p className="text-sm text-muted-foreground">Get notified about new features</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Usage & Credits Section */}
            <AccordionItem value="usage" className="rainbow-border bg-panel-dark rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-foreground">Usage & Credits</h3>
                    <p className="text-sm text-muted-foreground">View your usage statistics and manage credits</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Credits Used This Month</span>
                    <span className="text-foreground font-medium">247 / 1000</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-foreground h-2 rounded-full" style={{ width: '24.7%' }} />
                  </div>
                </div>
                <Separator className="bg-border" />
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-foreground font-medium">Current Plan</p>
                    <p className="text-sm text-muted-foreground">Pro - 1000 credits/month</p>
                  </div>
                  <Button className="bg-muted text-foreground hover:bg-muted/80">
                    Upgrade Plan
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Privacy & Security Section */}
            <AccordionItem value="privacy" className="rainbow-border bg-panel-dark rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-foreground">Privacy & Security</h3>
                    <p className="text-sm text-muted-foreground">Control your privacy and security settings</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-foreground">Make Generations Public</Label>
                    <p className="text-sm text-muted-foreground">Allow others to view your content</p>
                  </div>
                  <Switch />
                </div>
                <Separator className="bg-border" />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-foreground">Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <Switch />
                </div>
                <Separator className="bg-border" />
                <Button variant="outline" className="w-full bg-transparent border-border text-foreground hover:bg-muted/50">
                  Change Password
                </Button>
              </AccordionContent>
            </AccordionItem>

            {/* Appearance Section */}
            <AccordionItem value="appearance" className="rainbow-border bg-panel-dark rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <Palette className="h-5 w-5 text-muted-foreground" />
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-foreground">Appearance</h3>
                    <p className="text-sm text-muted-foreground">Customize the look and feel of your workspace</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-foreground">Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">Use dark theme throughout the app</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator className="bg-border" />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-foreground">Compact View</Label>
                    <p className="text-sm text-muted-foreground">Show more content with smaller spacing</p>
                  </div>
                  <Switch />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Settings;
