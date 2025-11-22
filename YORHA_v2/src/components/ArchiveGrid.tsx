import React from 'react';
import { ArchiveData } from '../types';
import { CornerBracket, LoadingBar } from './ui/MechanicalDecorations';

const MOCK_ARCHIVES: ArchiveData[] = [
  {
    id: 'REC_992',
    title: 'Machine Lifeform Report',
    date: '11945-03-10',
    category: 'INTEL',
    content: 'Analyzing combat patterns of Goliath-class bipedals in the City Ruins zone. Behavior appears non-hostile until provoked.',
    encrypted: false
  },
  {
    id: 'LOG_441',
    title: 'Memory Fragment: Flowers',
    date: 'Unknown',
    category: 'MEMORY',
    content: 'Why do they plant them? They serve no functional purpose. Yet, the machine continues to water them every day.',
    encrypted: false
  },
  {
    id: 'ENC_000',
    title: 'Project YoRHa [Classified]',
    date: '11942-01-30',
    category: 'TOP SECRET',
    content: 'Data corrupted. Decryption key required. Access denied for current unit authorization level.',
    encrypted: true
  },
  {
    id: 'WPN_02',
    title: 'Virtuous Contract',
    date: 'Weapon Data',
    category: 'ARMORY',
    content: 'A white katana used by samurai of the East. It looks like a decorative piece, but the blade is top quality.',
    encrypted: false
  },
  {
    id: 'POD_042',
    title: 'Tactical Support Unit',
    date: 'Active',
    category: 'SUPPORT',
    content: 'Proposal: Unit 2B should perform regular maintenance. Logical virus scan recommended immediately.',
    encrypted: false
  }
];

export const ArchiveGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {MOCK_ARCHIVES.map((item) => (
        <ArchiveCard key={item.id} data={item} />
      ))}
    </div>
  );
};

const ArchiveCard: React.FC<{ data: ArchiveData }> = ({ data }) => {
  return (
    <div className="group relative bg-yorha-panel/40 p-6 min-h-[280px] flex flex-col transition-all duration-500 hover:bg-yorha-beige/10 hover:-translate-y-1 border border-transparent hover:border-yorha-beige/20">
      {/* Decorative Elements */}
      <CornerBracket position="tl" className="group-hover:border-yorha-beige transition-colors" />
      <CornerBracket position="br" className="group-hover:border-yorha-beige transition-colors" />
      
      <div className="flex justify-between items-start mb-4 border-b border-dashed border-yorha-darkBeige/30 pb-2">
        <span className="font-mono text-xs text-yorha-beige bg-yorha-darkBeige/30 px-1">{data.id}</span>
        <span className="font-mono text-xs text-yorha-darkBeige">{data.date}</span>
      </div>

      <h3 className="text-xl font-serif font-bold text-yorha-beige mb-2 tracking-wide group-hover:text-white transition-colors">
        {data.title}
      </h3>

      <div className="flex-grow">
        <p className={`text-sm leading-relaxed font-serif ${data.encrypted ? 'font-mono text-xs tracking-tighter opacity-60 break-all' : 'text-yorha-text/80'}`}>
          {data.encrypted ? '01001000 01000101 01001100 01010000 00100000 01001101 01000101 ERROR_DATA_CORRUPT SEGMENT_LOST RECONSTRUCTION_IMPOSSIBLE' : data.content}
        </p>
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-[10px] uppercase tracking-widest text-yorha-darkBeige mb-1">
           <span>{data.category}</span>
           <span>Status: {data.encrypted ? 'LOCKED' : 'READ'}</span>
        </div>
        <LoadingBar progress={data.encrypted ? 20 : 100} />
      </div>
      
      {/* Scanline overlay for card only */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 bg-scanlines z-10" />
    </div>
  );
};