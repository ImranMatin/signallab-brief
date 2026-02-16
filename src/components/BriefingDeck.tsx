import { useState, useEffect, useRef } from "react";
import { Sparkles, FileText } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const briefingText = `## LLM Trends — Weekly Intelligence

The transformer landscape is evolving rapidly. Three key developments surfaced this week:

**1. Dynamic Routing in Transformers**
Google DeepMind published research on adaptive computation graphs that reduce inference costs by 40% without sacrificing accuracy. The approach selectively activates attention heads based on input complexity.

**2. Open-Source Momentum**
Meta's Llama 4 achieved parity with GPT-5 on MMLU benchmarks. The open-source community responded with 2,400+ fine-tuned variants within 72 hours of release. Enterprise adoption of open models grew 58% QoQ.

**3. Agent Frameworks Maturing**
LangGraph and CrewAI released v2.0 frameworks with built-in memory management, tool orchestration, and human-in-the-loop patterns. Production agent deployments doubled in Q1.

---

*Confidence: High (12 corroborating sources) • Generated: Feb 16, 2026 09:15 UTC*`;

const marketText = `## Market Analysis — Q1 2026

Enterprise AI spending hit $47B in Q1, a 34% increase quarter-over-quarter.

**Key Signals:**
- Developer tooling companies raised $2.1B collectively
- AI infrastructure spending outpaced application-layer investment 3:1
- Autonomous agent workflows are replacing manual review pipelines
- Data labeling market contracted 22% as synthetic data gains traction

**Outlook:** Expect consolidation in the agent framework space. Three major acquisitions are rumored for Q2.

---

*Confidence: Medium-High (8 sources) • Generated: Feb 16, 2026 09:15 UTC*`;

const BriefingDeck = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [activeTab, setActiveTab] = useState("llm");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentText = activeTab === "llm" ? briefingText : marketText;

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
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-primary animate-pulse-glow" />
          <span className="font-mono text-[10px] text-muted-foreground">AI-GENERATED</span>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="border-b border-border px-5">
          <TabsList className="bg-transparent h-9 p-0 gap-4">
            <TabsTrigger value="llm" className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none font-mono text-xs px-0 pb-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
              LLM_TRENDS
            </TabsTrigger>
            <TabsTrigger value="market" className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none font-mono text-xs px-0 pb-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
              MARKET_ANALYSIS
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="llm" className="mt-0">
          <div className="p-6 min-h-[400px]">
            {renderMarkdown(displayedText)}
            {isTyping && <span className="typewriter-cursor" />}
          </div>
        </TabsContent>
        <TabsContent value="market" className="mt-0">
          <div className="p-6 min-h-[400px]">
            {renderMarkdown(displayedText)}
            {isTyping && <span className="typewriter-cursor" />}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BriefingDeck;
