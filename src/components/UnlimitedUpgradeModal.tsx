import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, Sparkles, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UnlimitedUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UnlimitedUpgradeModal = ({ isOpen, onClose }: UnlimitedUpgradeModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleUpgrade = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement Stripe checkout
      toast({
        title: "Redirecting to payment...",
        description: "You'll be redirected to complete your purchase.",
      });
      
      // Placeholder for Stripe integration
      console.log("Initiating Stripe checkout for unlimited upgrade");
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TooltipProvider>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center">
              Unlock Unlimited Generations!
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground">
              You've reached your 100 generation limit for this month. Upgrade with the <span className="font-semibold text-foreground">Unlimited Add-on</span> to get unlimited generations and never worry about limits again!
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Pricing */}
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <span className="text-3xl font-bold text-foreground">$47</span>
                <Badge variant="destructive" className="text-xs">
                  52% OFF
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground line-through">
                Regular price: $97
              </p>
              <div className="flex items-center justify-center gap-1">
                <p className="text-xs text-muted-foreground font-medium">
                  One-time payment • Unlimited for life*
                </p>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs">
                    <p className="text-xs">
                      Magic Redesign Credits are a separate premium feature and are not included in this unlimited upgrade. This upgrade applies to standard redesign generations only.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
                <Sparkles className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Unlimited Redesign Generations</p>
                  <p className="text-xs text-muted-foreground">No more monthly limits</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
                <Zap className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Instant Access</p>
                  <p className="text-xs text-muted-foreground">Activated immediately after payment</p>
                </div>
              </div>
            </div>


            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button 
                onClick={handleUpgrade}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3"
                size="lg"
              >
                {isLoading ? "Processing..." : "Upgrade to Unlimited - $47"}
              </Button>
              
              <Button 
                variant="ghost" 
                onClick={onClose}
                className="w-full text-muted-foreground hover:text-foreground"
              >
                Maybe later
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              *Unlimited access valid for as long as your subscription remains active
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
};