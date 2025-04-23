"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showCopy?: boolean;
}

export default function CodeBlock({ code, language = "bash", showCopy = true }: CodeBlockProps) {
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
        <div className="absolute right-2 top-2 z-10 hidden sm:block">
          <button
            onClick={copyToClipboard}
            className="p-1.5 rounded-md bg-[#0A192F]/80 hover:bg-[#0A192F] border border-white/10 transition-colors"
            aria-label="Copy code"
          >
            {copied ? (
              <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
            ) : (
              <Copy className="h-3 w-3 sm:h-4 sm:w-4 text-white/70 hover:text-white" />
            )}
          </button>
        </div>
      )}
      <div className="bg-[#0A192F] rounded-lg p-3 sm:p-4">
        <div className="overflow-x-auto scrollbar-thin scrollbar-track-[#0A192F] scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
          <pre className="text-[11px] xs:text-xs sm:text-sm font-mono text-white/90 whitespace-pre" style={{ WebkitOverflowScrolling: 'touch' }}>
            <code className="inline-block min-w-full">{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
} 