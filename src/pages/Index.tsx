import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UnlimitedUpgradeModal } from "@/components/UnlimitedUpgradeModal";

const Index = () => {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <Button 
          onClick={() => setShowUpgradeModal(true)}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
        >
          Show Upgrade Modal
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
