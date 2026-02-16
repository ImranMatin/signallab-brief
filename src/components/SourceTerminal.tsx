import { useEffect, useState, useRef } from "react";
import { Terminal, Scan } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LogEntry {
  id: number;
  timestamp: string;
  type: "scan" | "extract" | "classify" | "index";
  message: string;
}

const initialLogs: LogEntry[] = [
  { id: 1, timestamp: "09:14:22", type: "scan", message: "GET arxiv.org/abs/2602.01234 → 200 OK" },
  { id: 2, timestamp: "09:14:23", type: "extract", message: "Extracted 3 key findings from transformer paper" },
  { id: 3, timestamp: "09:14:25", type: "classify", message: "Classified → LLM_TRENDS (confidence: 0.94)" },
  { id: 4, timestamp: "09:14:28", type: "scan", message: "GET bloomberg.com/technology/ai-spending → 200 OK" },
  { id: 5, timestamp: "09:14:29", type: "extract", message: "Extracted spending data: $47B Q1 (+34% QoQ)" },
  { id: 6, timestamp: "09:14:31", type: "classify", message: "Classified → MARKET_ANALYSIS (confidence: 0.91)" },
  { id: 7, timestamp: "09:14:33", type: "index", message: "Indexed 2 new sources into knowledge graph" },
  { id: 8, timestamp: "09:14:35", type: "scan", message: "GET kentcdodds.com/blog/react-20 → 200 OK" },
  { id: 9, timestamp: "09:14:36", type: "extract", message: "Extracted migration guide: 8 breaking changes" },
  { id: 10, timestamp: "09:14:38", type: "classify", message: "Classified → DEV_TOOLING (confidence: 0.88)" },
  { id: 11, timestamp: "09:14:40", type: "scan", message: "GET figma.com/blog/ai-native-design → 200 OK" },
  { id: 12, timestamp: "09:14:41", type: "extract", message: "Extracted: 85% design fidelity from wireframes" },
  { id: 13, timestamp: "09:14:43", type: "index", message: "Re-indexed knowledge graph (43 total sources)" },
];

const newLogTemplates = [
  { type: "scan" as const, message: "GET github.com/trending → 200 OK" },
  { type: "extract" as const, message: "Extracted 5 trending repositories" },
  { type: "classify" as const, message: "Classified → DEV_TOOLING (confidence: 0.92)" },
  { type: "scan" as const, message: "GET huggingface.co/papers → 200 OK" },
  { type: "extract" as const, message: "Extracted: 2 new model architectures" },
  { type: "index" as const, message: "Updated embeddings for 3 sources" },
];

const typeColors: Record<string, string> = {
  scan: "text-primary",
  extract: "text-badge-market",
  classify: "text-badge-ai",
  index: "text-badge-design",
};

const typeLabels: Record<string, string> = {
  scan: "SCAN",
  extract: "EXTR",
  classify: "CLSF",
  index: "INDX",
};

const SourceTerminal = () => {
  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);
  const scrollRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef(initialLogs.length + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      const template = newLogTemplates[Math.floor(Math.random() * newLogTemplates.length)];
      const now = new Date();
      const timestamp = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

      setLogs((prev) => {
        const next = [...prev, { id: counterRef.current++, timestamp, ...template }];
        return next.slice(-30);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden relative">
      <div className="border-b border-border px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-primary" />
          <span className="font-mono text-[11px] font-medium text-foreground">SOURCE TERMINAL</span>
        </div>
        <div className="flex items-center gap-2">
          <Scan className="h-3 w-3 text-primary animate-pulse-glow" />
          <span className="font-mono text-[10px] text-muted-foreground">{logs.length} ENTRIES</span>
        </div>
      </div>

      <div className="relative scanlines">
        <ScrollArea className="h-[180px]">
          <div ref={scrollRef} className="p-3 space-y-0.5 terminal-bg h-[180px] overflow-auto">
            {logs.map((log, i) => (
              <div
                key={log.id}
                className="flex gap-2 font-mono text-[11px] leading-relaxed animate-fade-in"
                style={{ animationDelay: `${i * 10}ms` }}
              >
                <span className="text-muted-foreground shrink-0">{log.timestamp}</span>
                <span className={`shrink-0 font-semibold ${typeColors[log.type]}`}>
                  [{typeLabels[log.type]}]
                </span>
                <span className="text-secondary-foreground">{log.message}</span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default SourceTerminal;
