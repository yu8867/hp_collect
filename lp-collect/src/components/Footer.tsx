import React from "react";
import { Mail, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gradient-to-br from-neon-cyan to-purple-600 rounded-sm opacity-80"></div>
          <span className="font-display font-bold text-lg tracking-widest text-white">
            NEXTGEN
          </span>
        </div>

        <div className="text-slate-500 text-sm">
          &copy; 2024 NextGen Web Works. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
