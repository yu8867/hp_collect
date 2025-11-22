import React, { useState } from "react";
import {
  CornerBracket,
  Hexagon,
  StatBar,
  Separator,
} from "../components/ui/MechanicalDecorations";
import { GlitchString } from "../components/ui/GlitchString";

const UNITS = [
  {
    id: "2B",
    name: "YoRHa No.2 Type B",
    class: "Battler",
    status: "ACTIVE",
    hp: 85,
    mp: 40,
    atk: 92,
    desc: "All-purpose battle android deployed as a member of the YoRHa infantry. Equipped with a sword for close-quarters combat and supported by a Pod for ranged fire.",
  },
  {
    id: "9S",
    name: "YoRHa No.9 Type S",
    class: "Scanner",
    status: "ACTIVE",
    hp: 60,
    mp: 95,
    atk: 45,
    desc: "Scanner type android specializing in investigation and information gathering. Capable of hacking into enemy systems.",
  },
  {
    id: "A2",
    name: "YoRHa Type A No.2",
    class: "Attacker",
    status: "WANTED",
    hp: 95,
    mp: 20,
    atk: 98,
    desc: "Prototype model used to create the 2B and 9S lines. Currently operating independently. Designation: Traitor.",
  },
  {
    id: "6O",
    name: "Operator 6O",
    class: "Operator",
    status: "BUNKER",
    hp: 30,
    mp: 60,
    atk: 10,
    desc: "Communications operator stationed at the Bunker. Handles command transmissions for ground units.",
  },
];

export const UnitData: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState(UNITS[0]);

  return (
    <div className="flex flex-col md:flex-row h-full gap-8 animate-fade-in">
      {/* Unit List */}
      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <div className="border-b border-yorha-darkBeige/30 pb-2 mb-4">
          <h2 className="text-2xl font-serif tracking-widest">UNIT_LIST</h2>
        </div>
        {UNITS.map((unit) => (
          <button
            key={unit.id}
            onClick={() => setSelectedUnit(unit)}
            className={`group relative p-4 text-left transition-all duration-300 border border-transparent ${
              selectedUnit.id === unit.id
                ? "bg-yorha-beige/10 border-yorha-beige"
                : "hover:bg-yorha-panel/40"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div
                  className={`w-2 h-2 rotate-45 ${
                    selectedUnit.id === unit.id
                      ? "bg-yorha-beige"
                      : "bg-yorha-darkBeige"
                  }`}
                />
                <span className="font-mono text-xl">{unit.id}</span>
              </div>
              <span className="text-xs font-mono tracking-widest text-yorha-darkBeige group-hover:text-yorha-beige">
                {unit.class.toUpperCase()}
              </span>
            </div>
            {selectedUnit.id === unit.id && <CornerBracket position="br" />}
          </button>
        ))}
      </div>

      {/* Unit Details */}
      <div className="w-full md:w-2/3 relative bg-yorha-panel/20 p-8 min-h-[500px]">
        <CornerBracket position="tl" />
        <CornerBracket position="tr" />
        <CornerBracket position="bl" />
        <CornerBracket position="br" />

        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="text-4xl font-serif mb-1">{selectedUnit.name}</h3>
            <div className="flex items-center gap-2 text-sm font-mono text-yorha-darkBeige">
              <span>ID: {selectedUnit.id}</span>
              <span>//</span>
              <span
                className={
                  selectedUnit.status === "WANTED"
                    ? "text-yorha-alert"
                    : "text-green-500/80"
                }
              >
                STATUS: {selectedUnit.status}
              </span>
            </div>
          </div>
          <Hexagon className="scale-150">
            <span className="text-xl">{selectedUnit.id}</span>
          </Hexagon>
        </div>

        <Separator className="mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Model Placeholder */}
          <div className="relative aspect-[3/4] border border-yorha-darkBeige/30 flex items-center justify-center bg-black/20 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,rgba(218,212,187,0.05)_50%,transparent_100%)] animate-scanline" />

            {/* Abstract representation of character */}
            <div className="w-32 h-32 border border-yorha-beige/40 rotate-45 flex items-center justify-center">
              <div className="w-24 h-24 border border-yorha-beige/60 rotate-45" />
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-[10px] text-right">
              IMG_DATA_MISSING
              <br />
              RECONSTRUCTING...
            </div>
          </div>

          {/* Specs */}
          <div>
            <h4 className="font-mono text-sm mb-6 border-b border-yorha-darkBeige/20 pb-2">
              PERFORMANCE_METRICS
            </h4>
            <StatBar label="VIT" value={selectedUnit.hp} />
            <StatBar label="MEN" value={selectedUnit.mp} />
            <StatBar label="ATK" value={selectedUnit.atk} />

            <h4 className="font-mono text-sm mt-8 mb-4 border-b border-yorha-darkBeige/20 pb-2">
              BIO_DATA
            </h4>
            <p className="font-serif text-lg leading-relaxed opacity-90">
              <GlitchString text={selectedUnit.desc} probability={0.005} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
