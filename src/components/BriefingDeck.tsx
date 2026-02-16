import { useState, useEffect, useRef, useCallback } from "react";
import { Sparkles, FileText, Clock, Download, Keyboard } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const briefings: Record<string, string> = {
  llm: `## LLM Trends — Weekly Intelligence

The transformer landscape is evolving rapidly. Three key developments surfaced this week:

**1. Dynamic Routing in Transformers**
Google DeepMind published research on adaptive computation graphs that reduce inference costs by 40% without sacrificing accuracy. The approach selectively activates attention heads based on input complexity.

**2. Open-Source Momentum**
Meta's Llama 4 achieved parity with GPT-5 on MMLU benchmarks. The open-source community responded with 2,400+ fine-tuned variants within 72 hours of release. Enterprise adoption of open models grew 58% QoQ.

**3. Agent Frameworks Maturing**
LangGraph and CrewAI released v2.0 frameworks with built-in memory management, tool orchestration, and human-in-the-loop patterns. Production agent deployments doubled in Q1.

---

*Confidence: High (12 corroborating sources) • Generated: Feb 16, 2026 09:15 UTC*`,

  market: `## Market Analysis — Q1 2026

Enterprise AI spending hit $47B in Q1, a 34% increase quarter-over-quarter.

**Key Signals:**
- Developer tooling companies raised $2.1B collectively
- AI infrastructure spending outpaced application-layer investment 3:1
- Autonomous agent workflows are replacing manual review pipelines
- Data labeling market contracted 22% as synthetic data gains traction

**Outlook:** Expect consolidation in the agent framework space. Three major acquisitions are rumored for Q2.

---

*Confidence: Medium-High (8 sources) • Generated: Feb 16, 2026 09:15 UTC*`,

  devtools: `## Dev Tooling — This Week's Picks

The developer experience landscape saw major shifts across build tools and AI-assisted coding.

**1. Bun 1.3 Ships Native Windows Support**
Bun now runs natively on Windows with full test runner and bundler support. Migration from Node.js reported at 15-minute average for mid-size projects. Package install speeds improved 4x over npm.

**2. Cursor AI Hits 2M Daily Active Users**
AI-native code editors are now mainstream. Cursor's tab-completion acceptance rate reached 68%, up from 42% last quarter. VS Code market share dipped below 70% for the first time.

**3. Vite 7 Preview: Module Federation Built-In**
Vite announced native module federation support, eliminating the need for Webpack in micro-frontend architectures. Early benchmarks show 3x faster cold starts.

**4. Biome Replaces ESLint in 3 Fortune 500 Companies**
The Rust-based linter/formatter is gaining enterprise traction. Linting speed improved 25x over ESLint with zero-config TypeScript support.

---

*Confidence: High (15 corroborating sources) • Generated: Feb 16, 2026 09:15 UTC*`,

  design: `## Design Systems — Weekly Roundup

Cross-functional design tooling is converging around AI-native workflows.

**1. Figma Releases AI-to-Code v2**
Design-to-production fidelity hit 85% with Figma's updated code export. React, Vue, and SwiftUI outputs now include responsive breakpoints and animation states automatically.

**2. Radix UI Reaches 10M Weekly Downloads**
The headless component library surpassed Material UI in weekly npm downloads for the first time. Accessibility-first primitives are now the industry standard.

**3. Design Tokens W3C Spec Finalized**
The W3C Design Tokens specification reached Candidate Recommendation status. Tools like Style Dictionary, Figma Tokens, and Storybook announced same-day support.

**4. Tailwind v4 Adoption Hits 62%**
Among new React projects, Tailwind v4 is now the default styling choice. The new CSS-first configuration and automatic dark mode detection reduced setup time by 80%.

---

*Confidence: High (11 corroborating sources) • Generated: Feb 16, 2026 09:15 UTC*`,

  news: `## Industry News — Top Stories

Major developments across tech policy, funding, and corporate strategy.

**1. EU AI Act Enforcement Begins**
The first penalties under the EU AI Act were issued to two social media companies for non-compliant recommendation algorithms. Fines totaled €4.2M. Compliance dashboards are now mandatory.

**2. NVIDIA Surpasses $4T Market Cap**
Driven by data center demand, NVIDIA became the most valuable company globally. B200 chip orders are backlogged through Q3 2026. AMD and Intel announced competing architectures.

**3. GitHub Copilot Enterprise Reaches 50K Orgs**
Enterprise adoption of AI coding assistants accelerated. GitHub reported 40% reduction in PR review time and 28% fewer production bugs among Copilot Enterprise customers.

**4. Y Combinator W26 Batch: 60% AI-Native**
The latest YC batch skewed heavily toward AI infrastructure, autonomous agents, and vertical AI applications. Average seed round: $4.2M pre-product.

---

*Confidence: Medium-High (9 corroborating sources) • Generated: Feb 16, 2026 09:15 UTC*`,
};

const tabConfig = [
  { value: "llm", label: "LLM_TRENDS" },
  { value: "market", label: "MARKET" },
  { value: "devtools", label: "DEV_TOOLS" },
  { value: "design", label: "DESIGN_SYS" },
  { value: "news", label: "INDUSTRY" },
];

const getReadingTime = (text: string) => {
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
};

const BriefingDeck = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [activeTab, setActiveTab] = useState("llm");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentText = briefings[activeTab] || briefings.llm;

  useEffect(() => {
    setDisplayedText("");
    setIsTyping(true);
    let i = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (i < currentText.length) {
        setDisplayedText(currentText.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 8);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeTab, currentText]);

  // Keyboard shortcuts: 1-5 to switch tabs
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const idx = parseInt(e.key) - 1;
      if (idx >= 0 && idx < tabConfig.length) {
        setActiveTab(tabConfig[idx].value);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleExport = useCallback(() => {
    const blob = new Blob([currentText], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `signallab-${activeTab}-brief.md`;
    a.click();
    URL.revokeObjectURL(url);
  }, [currentText, activeTab]);

  const renderMarkdown = (text: string) => {
    return text.split("\n").map((line, i) => {
      if (line.startsWith("## ")) {
        return <h2 key={i} className="text-xl font-semibold text-gradient-cyan mb-3 mt-1">{line.replace("## ", "")}</h2>;
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return <p key={i} className="text-sm font-semibold text-foreground mt-3 mb-1">{line.replace(/\*\*/g, "")}</p>;
      }
      if (line.startsWith("- ")) {
        return <p key={i} className="text-sm text-secondary-foreground ml-4 leading-relaxed">• {line.replace("- ", "")}</p>;
      }
      if (line.startsWith("*") && line.endsWith("*")) {
        return <p key={i} className="font-mono text-[11px] text-muted-foreground mt-4 italic">{line.replace(/\*/g, "")}</p>;
      }
      if (line === "---") {
        return <hr key={i} className="border-border my-3" />;
      }
      if (line.trim() === "") return <br key={i} />;
      return <p key={i} className="text-sm text-secondary-foreground leading-relaxed">{line.replace(/\*\*/g, "")}</p>;
    });
  };

  const readingTime = getReadingTime(currentText);

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="border-b border-border px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-medium text-foreground">Briefing Deck</h3>
          {isTyping && (
            <span className="font-mono text-[10px] text-primary animate-pulse-glow ml-2">
              SYNTHESIZING...
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span className="font-mono text-[10px]">{readingTime} MIN READ</span>
          </div>
          <button
            onClick={handleExport}
            className="flex items-center gap-1.5 rounded-md bg-primary/10 px-2 py-1 text-[10px] font-medium text-accent-foreground transition-colors hover:bg-primary/20"
            title="Export as Markdown"
          >
            <Download className="h-3 w-3" />
            EXPORT
          </button>
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-primary animate-pulse-glow" />
            <span className="font-mono text-[10px] text-muted-foreground">AI-GENERATED</span>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="border-b border-border px-5">
          <TabsList className="bg-transparent h-9 p-0 gap-3 flex-wrap">
            {tabConfig.map((tab, idx) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none font-mono text-xs px-0 pb-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                <span className="hidden sm:inline text-muted-foreground mr-1 text-[10px]">{idx + 1}.</span>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {tabConfig.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="mt-0">
            <div className="p-6 min-h-[400px]">
              {renderMarkdown(displayedText)}
              {isTyping && <span className="typewriter-cursor" />}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Keyboard shortcut hint */}
      <div className="border-t border-border px-5 py-2 flex items-center gap-2">
        <Keyboard className="h-3 w-3 text-muted-foreground" />
        <span className="font-mono text-[10px] text-muted-foreground">
          Press 1-5 to switch tabs • Export with button above
        </span>
      </div>
    </div>
  );
};

export default BriefingDeck;
