import React, { useEffect, useState } from 'react';
import { GlitchString } from './ui/GlitchString';

interface SystemBootProps {
  onComplete: () => void;
}

const LOG_MESSAGES = [
  "SYSTEM_CHECK...",
  "LOADING_MEMORY_BANKS...",
  "SYNCHRONIZING_SERVER_DATA...",
  "VERIFYING_UNIT_ID...",
  "RESTORING_VISUAL_CORTEX...",
  "AUDIO_SYSTEMS_OFFLINE...",
  "LOGIC_VIRUS_CHECK: NEGATIVE",
  "BOOT_SEQUENCE_COMPLETE"
];

export const SystemBoot: React.FC<SystemBootProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex >= LOG_MESSAGES.length) {
        clearInterval(interval);
        setTimeout(onComplete, 800);
        return;
      }

      setLogs(prev => [...prev, LOG_MESSAGES[currentIndex]]);
      setProgress(((currentIndex + 1) / LOG_MESSAGES.length) * 100);
      currentIndex++;
    }, 350);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center font-mono text-yorha-beige">
      <div className="w-full max-w-md p-8">
        <div className="mb-8 border-b border-yorha-beige/30 pb-2 flex justify-between">
          <span>BOOT_SEQ_004.2</span>
          <span>[ RUNNING ]</span>
        </div>

        <div className="space-y-1 min-h-[200px]">
          {logs.map((log, idx) => (
            <div key={idx} className="text-sm tracking-wider opacity-80">
              <span className="mr-2 opacity-50">{`> `}</span>
              <GlitchString text={log} probability={0.01} />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <div className="flex justify-between text-xs mb-1 opacity-60">
            <span>SYSTEM_INTEGRITY</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1 w-full bg-yorha-darkBeige/20">
            <div 
              className="h-full bg-yorha-beige transition-all duration-300" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};