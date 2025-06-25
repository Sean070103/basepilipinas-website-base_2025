"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  showCopy?: boolean;
}

export default function CodeBlock({ code, showCopy = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative group">
      {showCopy && (
          <button
            onClick={copyToClipboard}
          className="absolute right-2 top-2 p-2 rounded-md bg-black/30 hover:bg-black/50 border border-white/10 transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Copy code"
          >
            {copied ? (
            <Check className="h-4 w-4 text-green-400" />
            ) : (
            <Copy className="h-4 w-4 text-white/70 hover:text-white" />
            )}
          </button>
      )}
      <div className="bg-black/30 rounded-lg p-4">
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20 scrollbar-track-transparent">
          <pre className="text-sm font-mono text-white/90 whitespace-pre" style={{ WebkitOverflowScrolling: "touch" }}>
            <code className="inline-block min-w-full">{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
