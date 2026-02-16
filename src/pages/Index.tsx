import { FlaskConical, Scan } from "lucide-react";
import ProjectHub from "@/components/ProjectHub";
import BriefingDeck from "@/components/BriefingDeck";
import SignalStrength from "@/components/SignalStrength";
import SourceTerminal from "@/components/SourceTerminal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FlaskConical className="h-5 w-5 text-primary" />
            <span className="text-base font-semibold tracking-tight text-foreground">Signallab</span>
            <span className="font-mono text-[10px] text-primary border border-primary/30 rounded px-1.5 py-0.5">BRIEF</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Scan className="h-3.5 w-3.5 text-primary animate-pulse-glow" />
              <span className="font-mono text-[10px] text-muted-foreground">LIVE ANALYSIS</span>
            </div>
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <main className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar — Project Hub */}
          <div className="lg:col-span-1">
            <ProjectHub />
          </div>

          {/* Center — Briefing + Terminal */}
          <div className="lg:col-span-2 space-y-6">
            <BriefingDeck />
            <SourceTerminal />
          </div>

          {/* Right — Signal Strength */}
          <div className="lg:col-span-1">
            <SignalStrength />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
