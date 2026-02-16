import { useState } from "react";
import { Activity } from "lucide-react";
import QuickAddBar from "@/components/QuickAddBar";
import MorningBrief from "@/components/MorningBrief";
import ContentInbox from "@/components/ContentInbox";
import ThemesCluster from "@/components/ThemesCluster";

const initialItems = [
  {
    id: "1",
    title: "Attention Is All You Need — Revisited for 2026",
    source: "arxiv.org",
    url: "#",
    takeaway: "The transformer architecture has been extended with dynamic routing, reducing compute costs by 40% while maintaining accuracy.",
    theme: "AI Research",
    addedAgo: "2h ago",
    simplified: false,
  },
  {
    id: "2",
    title: "Why Enterprise AI Spending Just Hit a Record",
    source: "bloomberg.com",
    url: "#",
    takeaway: "Enterprise API spending on AI models grew 34% QoQ. The main driver is autonomous agent workflows replacing manual review pipelines.",
    theme: "Market Trends",
    addedAgo: "3h ago",
    simplified: false,
  },
  {
    id: "3",
    title: "React 20 Server Components: The Complete Guide",
    source: "kentcdodds.com",
    url: "#",
    takeaway: "Server components are now the default in React 20. Client components require explicit 'use client' directives for interactivity.",
    theme: "Coding Tips",
    addedAgo: "5h ago",
    simplified: false,
  },
  {
    id: "4",
    title: "The Rise of AI-Native Design Tools",
    source: "figma.com/blog",
    url: "#",
    takeaway: "Figma's new AI features auto-generate responsive layouts from rough wireframes with 85% design fidelity.",
    theme: "Design",
    addedAgo: "6h ago",
    simplified: false,
  },
  {
    id: "5",
    title: "TypeScript 6.0 Pattern Matching Deep Dive",
    source: "devblogs.microsoft.com",
    url: "#",
    takeaway: "Pattern matching syntax eliminates 60% of boilerplate in discriminated union handling. Early adoption shows 25% fewer type errors.",
    theme: "Coding Tips",
    addedAgo: "8h ago",
    simplified: false,
  },
];

const Index = () => {
  const [items, setItems] = useState(initialItems);

  const handleAdd = (url: string) => {
    const newItem = {
      id: Date.now().toString(),
      title: url,
      source: new URL(url).hostname,
      url,
      takeaway: "Analyzing content...",
      theme: "News",
      addedAgo: "just now",
      simplified: false,
    };
    setItems((prev) => [newItem, ...prev]);
  };

  const handleSimplify = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, simplified: true, takeaway: item.takeaway + " [Simplified]" } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Activity className="h-5 w-5 text-primary" />
            <span className="text-base font-semibold tracking-tight text-foreground">Signal</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">Last sync: 12 min ago</span>
            <div className="h-2 w-2 rounded-full bg-badge-market animate-pulse-glow" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 py-8 space-y-8">
        {/* Quick Add */}
        <QuickAddBar onAdd={handleAdd} />

        {/* Morning Brief */}
        <MorningBrief />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ContentInbox items={items} onSimplify={handleSimplify} />
          </div>
          <div>
            <ThemesCluster />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
