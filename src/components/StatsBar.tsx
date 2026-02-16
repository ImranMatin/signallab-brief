import { TrendingUp, Zap, FileText, Globe } from "lucide-react";

const stats = [
  { icon: FileText, label: "Briefs Generated", value: "5", color: "text-primary" },
  { icon: Globe, label: "Sources Scanned", value: "43", color: "text-badge-market" },
  { icon: Zap, label: "Insights Extracted", value: "128", color: "text-badge-code" },
  { icon: TrendingUp, label: "Topics Tracked", value: "5", color: "text-badge-design" },
];

const StatsBar = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="rounded-lg border border-border bg-card p-3 flex items-center gap-3 transition-all hover:border-primary/20"
          >
            <div className="rounded-md bg-primary/10 p-2">
              <Icon className={`h-4 w-4 ${stat.color}`} />
            </div>
            <div>
              <span className="font-mono text-lg font-semibold text-foreground">{stat.value}</span>
              <p className="font-mono text-[10px] text-muted-foreground">{stat.label.toUpperCase()}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsBar;
