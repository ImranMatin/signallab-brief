import { Sparkles } from "lucide-react";

const MorningBrief = () => {
  return (
    <div className="rounded-xl border border-border bg-card p-8 relative overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-primary/3 blur-2xl" />

      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
            <Sparkles className="h-3.5 w-3.5 text-accent-foreground animate-pulse-glow" />
            <span className="text-xs font-medium text-accent-foreground">Morning Brief</span>
          </div>
          <span className="text-xs text-muted-foreground">Feb 16, 2026</span>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-gradient mb-4">
          Your Daily Intelligence Summary
        </h2>

        <div className="space-y-3 text-sm leading-relaxed text-secondary-foreground">
          <p>
            <span className="font-medium text-foreground">AI Research</span> — Three papers on multi-modal reasoning were published this week, with Google's Gemini 3 showing strong gains in visual understanding benchmarks. Open-source alternatives are closing the gap.
          </p>
          <p>
            <span className="font-medium text-foreground">Market Trends</span> — Enterprise AI adoption accelerated in Q1, with a 34% increase in API spending. Developer tooling companies raised $2.1B collectively. Attention is shifting toward AI agents.
          </p>
          <p>
            <span className="font-medium text-foreground">Coding Tips</span> — The React 20 beta introduced server components as default. TypeScript 6.0 landed with pattern matching syntax. Bun 2.0 outperforms Node by 3x in cold starts.
          </p>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <div className="h-1.5 w-1.5 rounded-full bg-badge-ai" />
            12 sources analyzed
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <div className="h-1.5 w-1.5 rounded-full bg-badge-market" />
            3 themes detected
          </div>
        </div>
      </div>
    </div>
  );
};

export default MorningBrief;
