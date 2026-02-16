import { useState, useEffect } from "react";
import { Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const SignalStrength = () => {
  const [density, setDensity] = useState(0);
  const targetDensity = 78;

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDensity((prev) => {
          if (prev >= targetDensity) {
            clearInterval(interval);
            return targetDensity;
          }
          return prev + 1;
        });
      }, 20);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const getStrengthLabel = (val: number) => {
    if (val >= 80) return { text: "EXCELLENT", color: "text-primary" };
    if (val >= 60) return { text: "STRONG", color: "text-primary" };
    if (val >= 40) return { text: "MODERATE", color: "text-badge-design" };
    return { text: "WEAK", color: "text-badge-news" };
  };

  const strength = getStrengthLabel(density);

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-medium text-foreground">Signal Strength</h3>
        </div>
        <span className={`font-mono text-[10px] font-semibold ${strength.color}`}>
          {strength.text}
        </span>
      </div>

      <div className="space-y-3">
        <div className="relative">
          <Progress value={density} className="h-2 bg-muted" />
          <div
            className="absolute top-0 h-2 rounded-full bg-primary/20 blur-sm"
            style={{ width: `${density}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] text-muted-foreground">DATA DENSITY</span>
          <span className="font-mono text-lg font-semibold text-gradient-cyan">{density}%</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border space-y-2">
        {[
          { label: "Sources Indexed", value: "43", max: "50" },
          { label: "Insights Extracted", value: "128" },
          { label: "Themes Identified", value: "5" },
          { label: "Avg. Confidence", value: "87%" },
        ].map((stat) => (
          <div key={stat.label} className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-muted-foreground">{stat.label}</span>
            <span className="font-mono text-[11px] text-accent-foreground">
              {stat.value}
              {stat.max && <span className="text-muted-foreground">/{stat.max}</span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignalStrength;
