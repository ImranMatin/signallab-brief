import { Zap, ExternalLink, Clock } from "lucide-react";

interface ContentItem {
  id: string;
  title: string;
  source: string;
  url: string;
  takeaway: string;
  theme: string;
  addedAgo: string;
  simplified: boolean;
}

interface ContentInboxProps {
  items: ContentItem[];
  onSimplify: (id: string) => void;
}

const themeColorMap: Record<string, string> = {
  "AI Research": "bg-badge-ai/15 text-badge-ai",
  "Market Trends": "bg-badge-market/15 text-badge-market",
  "Coding Tips": "bg-badge-code/15 text-badge-code",
  "Design": "bg-badge-design/15 text-badge-design",
  "News": "bg-badge-news/15 text-badge-news",
};

const ContentInbox = ({ items, onSimplify }: ContentInboxProps) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-foreground">Inbox</h3>
        <span className="text-xs text-muted-foreground">{items.length} items</span>
      </div>

      <div className="space-y-2">
        {items.map((item, i) => (
          <div
            key={item.id}
            className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/20 animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${themeColorMap[item.theme] || "bg-muted text-muted-foreground"}`}>
                    {item.theme}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <Clock className="h-2.5 w-2.5" />
                    {item.addedAgo}
                  </span>
                </div>
                <h4 className="text-sm font-medium text-foreground truncate">{item.title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{item.source}</p>
              </div>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="shrink-0 text-muted-foreground hover:text-foreground transition-colors">
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="flex items-start gap-2 mt-3 rounded-md bg-muted/50 p-2.5">
              <div className="h-1 w-1 rounded-full bg-accent-foreground mt-1.5 shrink-0" />
              <p className="text-xs text-secondary-foreground leading-relaxed">{item.takeaway}</p>
            </div>

            {!item.simplified && (
              <button
                onClick={() => onSimplify(item.id)}
                className="mt-3 flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-accent-foreground transition-colors hover:bg-primary/20"
              >
                <Zap className="h-3 w-3" />
                Simplify
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentInbox;
