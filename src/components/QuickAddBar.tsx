import { useState } from "react";
import { Plus, Link as LinkIcon } from "lucide-react";

interface QuickAddBarProps {
  onAdd: (url: string) => void;
}

const QuickAddBar = ({ onAdd }: QuickAddBarProps) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onAdd(url.trim());
      setUrl("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative group">
      <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-all focus-within:border-primary/40 focus-within:glow-primary">
        <LinkIcon className="h-4 w-4 text-muted-foreground shrink-0" />
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste a URL to add to your inbox..."
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
        />
        <button
          type="submit"
          disabled={!url.trim()}
          className="flex items-center gap-1.5 rounded-md bg-primary/10 px-3 py-1.5 text-xs font-medium text-accent-foreground transition-colors hover:bg-primary/20 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <Plus className="h-3.5 w-3.5" />
          Add
        </button>
      </div>
    </form>
  );
};

export default QuickAddBar;
