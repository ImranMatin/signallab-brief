import { useState } from "react";
import { FlaskConical, FolderOpen, ChevronRight, Scan, TrendingUp, Code, Paintbrush, Newspaper } from "lucide-react";

interface Lab {
  id: string;
  name: string;
  icon: React.ElementType;
  articleCount: number;
  status: "active" | "idle" | "syncing";
}

const labs: Lab[] = [
  { id: "llm", name: "LLM Trends", icon: FlaskConical, articleCount: 12, status: "active" },
  { id: "market", name: "Market Analysis", icon: TrendingUp, articleCount: 8, status: "syncing" },
  { id: "code", name: "Dev Tooling", icon: Code, articleCount: 15, status: "active" },
  { id: "design", name: "Design Systems", icon: Paintbrush, articleCount: 5, status: "idle" },
  { id: "news", name: "Industry News", icon: Newspaper, articleCount: 3, status: "active" },
];

const statusColors: Record<string, string> = {
  active: "bg-primary",
  syncing: "bg-badge-market animate-pulse-glow",
  idle: "bg-muted-foreground",
};

const ProjectHub = () => {
  const [selectedLab, setSelectedLab] = useState("llm");

  return (
    <div className="rounded-xl border border-border bg-card p-4 h-full">
      <div className="flex items-center gap-2 mb-5 px-1">
        <FolderOpen className="h-4 w-4 text-primary" />
        <h3 className="text-sm font-medium text-foreground">Research Labs</h3>
      </div>

      <div className="space-y-1">
        {labs.map((lab) => {
          const Icon = lab.icon;
          const isSelected = selectedLab === lab.id;
          return (
            <button
              key={lab.id}
              onClick={() => setSelectedLab(lab.id)}
              className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-all group ${
                isSelected
                  ? "bg-accent border border-primary/20 glow-cyan"
                  : "hover:bg-muted border border-transparent"
              }`}
            >
              <Icon className={`h-4 w-4 shrink-0 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
              <div className="flex-1 min-w-0">
                <span className={`text-xs font-medium block truncate ${isSelected ? "text-accent-foreground" : "text-foreground"}`}>
                  {lab.name}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {lab.articleCount} sources
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <div className={`h-1.5 w-1.5 rounded-full ${statusColors[lab.status]}`} />
                <ChevronRight className={`h-3 w-3 transition-transform ${isSelected ? "text-primary rotate-90" : "text-muted-foreground"}`} />
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-5 pt-4 border-t border-border px-1">
        <div className="flex items-center gap-2 mb-2">
          <Scan className="h-3 w-3 text-primary animate-pulse-glow" />
          <span className="font-mono text-[10px] text-primary">SCANNING ACTIVE</span>
        </div>
        <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
          <span>Labs online</span>
          <span className="text-accent-foreground">{labs.filter(l => l.status === "active").length}/{labs.length}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectHub;
