import React from "react";
import { PathOption } from "../lib/types";

interface PathSelectorProps {
  paths: PathOption[];
  selectedPathId?: string;
  onSelect: (pathId: string) => void;
}

export function PathSelector({ paths, selectedPathId, onSelect }: PathSelectorProps) {
  return (
    <nav style={{ display: "grid", gap: 8 }} aria-label="Learning path selector">
      {paths.map((path) => {
        const isActive = path.id === selectedPathId;
        return (
          <button
            key={path.id}
            onClick={() => onSelect(path.id)}
            style={{
              textAlign: "left",
              borderRadius: 10,
              border: isActive ? "2px solid #1d4ed8" : "1px solid #cbd5e1",
              background: isActive ? "#dbeafe" : "#fff",
              color: "#0f172a",
              padding: 12,
              cursor: "pointer",
            }}
          >
            <strong style={{ display: "block" }}>{path.label}</strong>
            {path.description && <span style={{ color: "#475569", fontSize: 14 }}>{path.description}</span>}
          </button>
        );
      })}
    </nav>
  );
}
