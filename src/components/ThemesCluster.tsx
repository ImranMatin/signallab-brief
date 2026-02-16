import { Layers } from "lucide-react";

interface Theme {
  name: string;
  count: number;
  color: string;
}

const themes: Theme[] = [
  { name: "AI Research", count: 5, color: "bg-badge-ai/15 text-badge-ai border-badge-ai/20" },
  { name: "Market Trends", count: 3, color: "bg-badge-market/15 text-badge-market border-badge-market/20" },
  { name: "Coding Tips", count: 4, color: "bg-badge-code/15 text-badge-code border-badge-code/20" },
  { name: "Design", count: 2, color: "bg-badge-design/15 text-badge-design border-badge-design/20" },
  { name: "News", count: 1, color: "bg-badge-news/15 text-badge-news border-badge-news/20" },
];

const ThemesCluster = () => {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 mb-4">
        <Layers className="h-4 w-4 text-muted-foreground" />
        <h3 className="text-sm font-medium text-foreground">Themes</h3>
      </div>

      <div className="space-y-2">
        {themes.map((theme) => (
          <button
            key={theme.name}
            className={`w-full flex items-center justify-between rounded-lg border px-3 py-2.5 text-left transition-all hover:scale-[1.01] ${theme.color}`}
          >
            <span className="text-xs font-medium">{theme.name}</span>
            <span className="text-[10px] font-mono opacity-70">{theme.count}</span>
          </button>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Total links</span>
          <span className="font-mono">15</span>
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
          <span>Auto-classified</span>
          <span className="font-mono text-accent-foreground">100%</span>
        </div>
      </div>
    </div>
  );
};

export default ThemesCluster;
