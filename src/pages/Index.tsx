import { useState } from "react";
import { FlaskConical, Scan } from "lucide-react";
import ProjectHub from "@/components/ProjectHub";
import BriefingDeck from "@/components/BriefingDeck";
import SignalStrength from "@/components/SignalStrength";
import SourceTerminal from "@/components/SourceTerminal";
import QuickAddBar from "@/components/QuickAddBar";
import ContentInbox from "@/components/ContentInbox";

const initialItems = [
  {
    id: "1",
    title: "Scaling Transformer Models with Dynamic Routing",
    source: "arxiv.org",
    url: "https://arxiv.org/abs/2602.01234",
    takeaway: "Dynamic routing reduces inference costs by 40% without sacrificing accuracy.",
    theme: "AI Research",
    addedAgo: "2h ago",
    simplified: false,
  },
  {
    id: "2",
    title: "Enterprise AI Spending Hits $47B in Q1",
    source: "bloomberg.com",
    url: "https://bloomberg.com/technology/ai-spending",
    takeaway: "Developer tooling companies raised $2.1B collectively. Attention shifting toward AI agents.",
    theme: "Market Trends",
    addedAgo: "4h ago",
    simplified: true,
  },
  {
    id: "3",
    title: "React 20 Beta: Server Components by Default",
    source: "react.dev",
    url: "https://react.dev/blog/react-20",
    takeaway: "8 breaking changes in the migration guide. Server components are now the default.",
    theme: "Coding Tips",
    addedAgo: "6h ago",
    simplified: false,
  },
];

const Index = () => {
  const [items, setItems] = useState(initialItems);

  const handleAddUrl = (url: string) => {
    const newItem = {
      id: Date.now().toString(),
      title: new URL(url).hostname + " — New Article",
      source: new URL(url).hostname,
      url,
      takeaway: "Awaiting AI analysis...",
      theme: "News",
      addedAgo: "Just now",
      simplified: false,
    };
    setItems((prev) => [newItem, ...prev]);
  };

  const handleSimplify = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, simplified: true, takeaway: "✨ " + item.takeaway } : item
      )
    );
  };

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

      {/* Quick Add Bar */}
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <QuickAddBar onAdd={handleAddUrl} />
      </div>

      {/* Main Layout */}
      <main className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar — Project Hub */}
          <div className="lg:col-span-1">
            <ProjectHub />
          </div>

          {/* Center — Briefing + Inbox + Terminal */}
          <div className="lg:col-span-2 space-y-6">
            <BriefingDeck />
            <ContentInbox items={items} onSimplify={handleSimplify} />
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
