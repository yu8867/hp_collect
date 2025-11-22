import React from "react";
import { ArchiveGrid } from "../components/ArchiveGrid";
import { Separator } from "../components/ui/MechanicalDecorations";
import { GlitchString } from "../components/ui/GlitchString";

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-12 md:py-24 relative">
        <div className="flex flex-col md:flex-row items-end justify-between mb-8">
          <div className="relative">
            <div className="absolute -left-8 top-0 h-full w-1 bg-yorha-beige hidden md:block"></div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-yorha-beige tracking-tight leading-[0.9]">
              <span className="block text-3xl md:text-4xl opacity-60 mb-2">
                HUMANITY'S
              </span>
              <GlitchString text="LAST HOPE" probability={0.02} />
            </h1>
          </div>

          <div className="mt-8 md:mt-0 max-w-md text-right">
            <p className="font-mono text-sm text-yorha-darkBeige mb-2">
              MISSION_ID: 5012
            </p>
            <p className="text-lg font-serif italic opacity-80">
              "Everything that lives is designed to end. We are perpetually
              trapped in a never-ending spiral of life and death."
            </p>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Stats / Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 font-mono text-sm">
          <div className="border-l border-yorha-darkBeige/30 pl-4">
            <span className="block text-yorha-darkBeige text-xs mb-1">
              UNIT STATUS
            </span>
            <span className="text-yorha-beige text-lg">NORMAL</span>
          </div>
          <div className="border-l border-yorha-darkBeige/30 pl-4">
            <span className="block text-yorha-darkBeige text-xs mb-1">
              BUNKER COMMS
            </span>
            <span className="text-green-500/80 text-lg animate-pulse">
              CONNECTED
            </span>
          </div>
          <div className="border-l border-yorha-darkBeige/30 pl-4">
            <span className="block text-yorha-darkBeige text-xs mb-1">
              BLACK BOX
            </span>
            <span className="text-yorha-beige text-lg">STABLE</span>
          </div>
          <div className="border-l border-yorha-darkBeige/30 pl-4">
            <span className="block text-yorha-darkBeige text-xs mb-1">
              AREA
            </span>
            <span className="text-yorha-beige text-lg">CITY RUINS</span>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-2 h-2 bg-yorha-beige rotate-45"></div>
          <h2 className="text-2xl font-serif tracking-widest text-yorha-text">
            DATABASE_RECORDS
          </h2>
          <div className="flex-grow h-px bg-yorha-darkBeige/30"></div>
        </div>
        <ArchiveGrid />
      </section>
    </div>
  );
};
