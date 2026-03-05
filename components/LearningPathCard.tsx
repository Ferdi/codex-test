import React from "react";
import { LearningPath } from "../lib/types";

interface LearningPathCardProps {
  item: LearningPath;
}

export function LearningPathCard({ item }: LearningPathCardProps) {
  const completionPct = Math.min(100, Math.round((item.stepsCompleted / item.totalSteps) * 100));

  return (
    <article
      style={{
        border: "1px solid #fdba74",
        borderLeft: "6px solid #ea580c",
        background: "#fff7ed",
        borderRadius: 14,
        padding: 16,
      }}
    >
      <span
        style={{
          display: "inline-block",
          padding: "4px 10px",
          borderRadius: 999,
          fontWeight: 700,
          letterSpacing: 0.3,
          background: "#c2410c",
          color: "#fff7ed",
        }}
      >
        Learning Path
      </span>
      <h3 style={{ marginBottom: 8 }}>{item.title}</h3>
      <p style={{ marginTop: 0, color: "#334155" }}>{item.summary}</p>
      <div style={{ display: "grid", gap: 6, marginTop: 10, fontSize: 14 }}>
        <div>Track: {item.roleTrack}</div>
        <div>
          Progress: Step {item.stepsCompleted} of {item.totalSteps}
        </div>
        <div>Estimated duration: {item.estimatedDurationWeeks} weeks</div>
      </div>
      <div
        style={{
          height: 10,
          borderRadius: 999,
          background: "#fed7aa",
          marginTop: 10,
          overflow: "hidden",
        }}
        aria-label={`Completion ${completionPct}%`}
      >
        <div style={{ height: "100%", width: `${completionPct}%`, background: "#ea580c" }} />
      </div>
    </article>
  );
}
