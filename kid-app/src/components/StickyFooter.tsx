import React from "react";
import { Button } from "./Button";
import { SITE_CONTENT } from "../constants";

export const StickyFooter: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 bg-white/90 backdrop-blur-md border-t border-brand-blue/20 shadow-lg md:hidden">
      <Button fullWidth onClick={() => (window.location.href = "#contact")}>
        {SITE_CONTENT.cta.button}
      </Button>
    </div>
  );
};
