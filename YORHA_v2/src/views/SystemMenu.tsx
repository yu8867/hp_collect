import React, { useState } from "react";
import { Separator, LoadingBar } from "../components/ui/MechanicalDecorations";

export const SystemMenu: React.FC = () => {
  const [settings, setSettings] = useState({
    bgm: 80,
    sfx: 100,
    voice: 90,
    hudOpacity: 100,
    selfDestruct: false,
  });

  const handleSlider = (key: keyof typeof settings, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: parseInt(value) }));
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif tracking-[0.2em] mb-2">
          SYSTEM_CONFIG
        </h2>
        <p className="font-mono text-xs text-yorha-darkBeige">
          ANDROID SYSTEM SETTINGS ver 9.04
        </p>
      </div>

      <div className="space-y-8 bg-yorha-panel/20 p-8 border border-yorha-darkBeige/20 relative">
        {/* Settings Group: Audio */}
        <div className="space-y-6">
          <h3 className="font-mono text-sm border-b border-yorha-darkBeige/30 pb-1 inline-block min-w-[200px]">
            AUDIO_OUTPUT
          </h3>

          <SettingSlider
            label="BGM_VOLUME"
            value={settings.bgm}
            onChange={(v) => handleSlider("bgm", v)}
          />
          <SettingSlider
            label="VOICE_VOLUME"
            value={settings.voice}
            onChange={(v) => handleSlider("voice", v)}
          />
          <SettingSlider
            label="SFX_VOLUME"
            value={settings.sfx}
            onChange={(v) => handleSlider("sfx", v)}
          />
        </div>

        <Separator />

        {/* Settings Group: Visor */}
        <div className="space-y-6">
          <h3 className="font-mono text-sm border-b border-yorha-darkBeige/30 pb-1 inline-block min-w-[200px]">
            VISUAL_SENSORS
          </h3>
          <SettingSlider
            label="HUD_OPACITY"
            value={settings.hudOpacity}
            onChange={(v) => handleSlider("hudOpacity", v)}
          />

          <div className="flex justify-between items-center py-2 group cursor-pointer">
            <span className="font-mono text-sm text-yorha-text/80 group-hover:text-yorha-beige transition-colors">
              MINIMAP_ROTATION
            </span>
            <div className="flex gap-4 font-mono text-xs">
              <span className="text-yorha-darkBeige">FIXED</span>
              <span className="text-yorha-beige">[ FREE ]</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Danger Zone */}
        <div className="pt-4">
          <div className="flex justify-between items-center border border-yorha-alert/30 p-4 bg-yorha-alert/5">
            <div>
              <span className="block font-mono text-yorha-alert font-bold">
                SELF_DESTRUCT_SEQUENCE
              </span>
              <span className="text-xs text-yorha-darkBeige">
                Removes skirt module. High explosion risk.
              </span>
            </div>
            <button
              onClick={() =>
                setSettings((prev) => ({
                  ...prev,
                  selfDestruct: !prev.selfDestruct,
                }))
              }
              className={`w-12 h-6 border ${
                settings.selfDestruct
                  ? "border-yorha-alert bg-yorha-alert/20"
                  : "border-yorha-darkBeige"
              } flex items-center p-1 transition-all`}
            >
              <div
                className={`w-4 h-4 bg-yorha-beige transition-all duration-300 ${
                  settings.selfDestruct
                    ? "translate-x-6 bg-yorha-alert"
                    : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {settings.selfDestruct && (
            <div className="mt-4 font-mono text-xs text-yorha-alert animate-pulse">
              WARNING: BLACK BOX TEMPERATURE RISING. DETONATION IMMINENT.
              <LoadingBar progress={85} className="bg-yorha-alert/20" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SettingSlider: React.FC<{
  label: string;
  value: number;
  onChange: (v: string) => void;
}> = ({ label, value, onChange }) => (
  <div className="flex items-center gap-4">
    <span className="w-32 font-mono text-xs text-yorha-text/80">{label}</span>
    <input
      type="range"
      min="0"
      max="100"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="flex-grow h-1 bg-yorha-darkBeige/30 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-yorha-beige [&::-webkit-slider-thumb]:rotate-45"
    />
    <span className="w-12 text-right font-mono text-xs">{value}%</span>
  </div>
);
