"use client";

import { Model } from "@/lib/models";
import { useScrollReveal } from "@/lib/use-scroll-reveal";
import { useState } from "react";

function isLaunching(eta: string): boolean {
  return eta === "Q2 2026";
}

export default function ModelCard({
  model,
  index = 0,
}: {
  model: Model;
  index?: number;
}) {
  const [hovered, setHovered] = useState(false);
  const revealRef = useScrollReveal<HTMLDivElement>();
  const num = String(index + 1).padStart(2, "0");
  const launching = isLaunching(model.eta);

  return (
    <div
      ref={revealRef}
      className="reveal-scale group flex flex-col sm:flex-row rounded-xl overflow-hidden border transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transitionDelay: `${index * 0.08}s`,
        borderColor: hovered ? `${model.accent}40` : "#f0f0f0",
      }}
    >
      {/* Left accent panel */}
      <div
        className="sm:w-32 flex-shrink-0 flex flex-col items-center justify-center py-8 sm:py-0 gap-3"
        style={{ background: `${model.accent}08` }}
      >
        <span
          className="text-xs font-mono font-bold tracking-widest"
          style={{ color: `${model.accent}70` }}
        >
          {num}
        </span>
        <div
          className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-center leading-tight max-w-[100px]"
          style={{
            background: `${model.accent}15`,
            color: model.accent,
          }}
        >
          {model.domain}
        </div>
      </div>

      {/* Content panel */}
      <div className="flex-1 p-6 flex flex-col bg-white">
        <div className="mb-2">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <h3 className="text-lg font-semibold text-gray-900">{model.name}</h3>
            {/* Status pill */}
            <span
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0"
              style={
                launching
                  ? {
                      background: `${model.accent}15`,
                      color: model.accent,
                    }
                  : {
                      background: "#FFF7ED",
                      color: "#C2410C",
                    }
              }
            >
              {launching ? `Launching ${model.eta}` : `Training · ${model.eta}`}
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-0.5 italic">{model.tagline}</p>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          {model.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {model.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2 py-0.5 rounded border"
              style={{
                borderColor: "#f0f0f0",
                color: "#9CA3AF",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto pt-4 border-t border-gray-50">
          <a
            href={model.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg transition-all duration-200 border"
            style={{
              borderColor: "#f0f0f0",
              color: "#6B7280",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
            GitHub
          </a>
          <a
            href={model.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg transition-all duration-200"
            style={{
              background: hovered ? model.accent : `${model.accent}15`,
              color: hovered ? "#fff" : model.accent,
            }}
          >
            View Site
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
