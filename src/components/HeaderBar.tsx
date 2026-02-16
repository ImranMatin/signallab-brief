import { FlaskConical, Scan, Github } from "lucide-react";

const HeaderBar = () => {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <FlaskConical className="h-5 w-5 text-primary" />
          <span className="text-base font-semibold tracking-tight text-foreground">Signallab</span>
          <span className="font-mono text-[10px] text-primary border border-primary/30 rounded px-1.5 py-0.5">BRIEF</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <div className="flex items-center gap-2">
            <Scan className="h-3.5 w-3.5 text-primary animate-pulse-glow" />
            <span className="font-mono text-[10px] text-muted-foreground">LIVE ANALYSIS</span>
          </div>
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
