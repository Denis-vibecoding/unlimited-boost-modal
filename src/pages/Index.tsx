import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UnlimitedUpgradeModal } from "@/components/UnlimitedUpgradeModal";

const Index = () => {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Redesign Tool Demo</h1>
        <p className="text-xl text-muted-foreground">Test the unlimited upgrade modal</p>
        
        <Button 
          onClick={() => setShowUpgradeModal(true)}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
        >
          Trigger Upgrade Modal (100 generations reached)
        </Button>

        <UnlimitedUpgradeModal 
          isOpen={showUpgradeModal}
          onClose={() => setShowUpgradeModal(false)}
        />
      </div>
    </div>
  );
};

export default Index;
