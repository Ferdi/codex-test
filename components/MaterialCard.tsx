import React from "react";
import { Material } from "../lib/types";

interface MaterialCardProps {
  item: Material;
}

export function MaterialCard({ item }: MaterialCardProps) {
  return (
    <article
      style={{
        border: "1px solid #6ee7b7",
        borderLeft: "6px solid #059669",
        background: "#ecfdf5",
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
          background: "#047857",
          color: "#ecfdf5",
        }}
      >
        Material
      </span>
      <h3 style={{ marginBottom: 8 }}>{item.title}</h3>
      <p style={{ marginTop: 0, color: "#334155" }}>{item.summary}</p>
      <div style={{ display: "grid", gap: 6, marginTop: 10, fontSize: 14 }}>
        <div>Format: {item.materialFormat}</div>
        <div>Runtime: {item.runtimeMinutes} min</div>
        <div>Author: {item.author}</div>
        <div>Updated: {item.updatedAt}</div>
      </div>
    </article>
  );
}
