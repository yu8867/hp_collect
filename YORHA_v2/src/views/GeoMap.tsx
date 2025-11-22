import React, { useEffect, useRef } from "react";
import { CornerBracket } from "../components/ui/MechanicalDecorations";

export const GeoMap: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Generate a large number of random hostiles relative to center
    const hostiles: { x: number; y: number }[] = [];
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      // Distribute mostly between 50 and 350 units from center
      const distance = 50 + Math.random() * 300;
      hostiles.push({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      });
    }

    let frame = 0;
    let animationFrameId: number;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const center = { x: w / 2, y: h / 2 };

      ctx.clearRect(0, 0, w, h);

      // Grid
      ctx.strokeStyle = "rgba(87, 84, 74, 0.3)";
      ctx.lineWidth = 1;
      const gridSize = 40;

      for (let x = 0; x <= w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y <= h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Radar Sweep
      const radius = Math.min(w, h) * 0.45;
      const angle = (frame * 0.02) % (Math.PI * 2);

      ctx.beginPath();
      ctx.moveTo(center.x, center.y);
      ctx.lineTo(
        center.x + Math.cos(angle) * radius,
        center.y + Math.sin(angle) * radius
      );
      ctx.strokeStyle = "rgba(218, 212, 187, 0.8)"; // yorha-beige
      ctx.lineWidth = 2;
      ctx.stroke();

      // Sweep gradient (Simulated)
      ctx.fillStyle = "rgba(218, 212, 187, 0.05)";
      ctx.beginPath();
      ctx.moveTo(center.x, center.y);
      ctx.arc(center.x, center.y, radius, angle - 0.5, angle);
      ctx.fill();

      // Topographical lines (static decoration)
      ctx.strokeStyle = "rgba(218, 212, 187, 0.4)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(center.x, center.y, 100, 60, 0.2, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(center.x + 20, center.y - 20, 150, 90, 0.2, 0, Math.PI * 2);
      ctx.stroke();

      // Draw Hostiles
      // Blink logic: blink every ~0.5 seconds (assuming 60fps)
      if (Math.floor(frame / 30) % 2 === 0) {
        ctx.fillStyle = "#cd664d"; // Alert red
        ctx.font = '10px "Share Tech Mono"';

        hostiles.forEach((hostile) => {
          const screenX = center.x + hostile.x;
          const screenY = center.y + hostile.y;

          // Only draw if within canvas bounds (mostly)
          if (screenX > 0 && screenX < w && screenY > 0 && screenY < h) {
            ctx.beginPath();
            ctx.arc(screenX, screenY, 3, 0, Math.PI * 2);
            ctx.fill();

            // Randomly show label to avoid cluttering too much
            if (Math.random() > 0.5) {
              ctx.fillText("HOSTILE", screenX + 6, screenY + 3);
            }
          }
        });
      }

      // Draw "You" (Player)
      ctx.fillStyle = "#dad4bb";
      ctx.beginPath();
      ctx.moveTo(center.x, center.y - 6);
      ctx.lineTo(center.x - 5, center.y + 5);
      ctx.lineTo(center.x + 5, center.y + 5);
      ctx.fill();

      // Draw Central Text
      ctx.fillStyle = "#dad4bb";
      ctx.font = '12px "Share Tech Mono"';
      ctx.fillText(`UNITS: ${hostiles.length}`, center.x + 10, center.y + 20);

      frame++;
      animationFrameId = requestAnimationFrame(draw);
    };

    // Initial resize
    canvas.width = canvas.parentElement?.clientWidth || 800;
    canvas.height = 600;

    // Handle window resize to keep center correct relative to container
    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = 600;
    };
    window.addEventListener("resize", handleResize);

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col animate-fade-in">
      <div className="flex justify-between items-end mb-6 border-b border-yorha-darkBeige/30 pb-2">
        <h2 className="text-2xl font-serif tracking-widest">
          GEOLOGICAL_SURVEY
        </h2>
        <span className="font-mono text-xs text-yorha-alert animate-pulse">
          WARNING: MULTIPLE SIGNALS DETECTED
        </span>
      </div>

      <div className="relative flex-grow bg-black/40 border border-yorha-darkBeige/30 min-h-[600px] overflow-hidden">
        <CornerBracket position="tl" />
        <CornerBracket position="tr" />
        <CornerBracket position="bl" />
        <CornerBracket position="br" />

        <canvas ref={canvasRef} className="w-full h-full" />

        {/* Map UI Overlays */}
        <div className="absolute top-4 left-4 font-mono text-xs text-yorha-beige/60">
          COORD: 34.44, 139.22
          <br />
          SECTOR: CITY RUINS
        </div>

        <div className="absolute bottom-4 right-4 font-mono text-xs text-right">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-end gap-2">
              <span>ACCESS POINTS</span>
              <div className="w-2 h-2 bg-yorha-beige rounded-full" />
            </div>
            <div className="flex items-center justify-end gap-2 text-yorha-alert">
              <span>ENEMIES</span>
              <div className="w-2 h-2 bg-yorha-alert rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
