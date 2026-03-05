import React from "react";
import { ContentType, FilterState } from "../lib/types";

interface FilterPanelProps {
  filters: FilterState;
  onChange: (next: FilterState) => void;
}

const contentTypeLabels: Record<ContentType, string> = {
  course: "Course",
  material: "Material",
  credential: "Credential",
  "learning-path": "Learning Path",
};

export function FilterPanel({ filters, onChange }: FilterPanelProps) {
  const toggleType = (type: ContentType) => {
    const nextTypes = filters.contentTypes.includes(type)
      ? filters.contentTypes.filter((entry) => entry !== type)
      : [...filters.contentTypes, type];

    onChange({ ...filters, contentTypes: nextTypes });
  };

  return (
    <aside style={{ border: "1px solid #cbd5e1", borderRadius: 12, padding: 14 }}>
      <h2 style={{ marginTop: 0, fontSize: 18 }}>Filters</h2>

      <div style={{ marginBottom: 14 }}>
        <strong style={{ display: "block", marginBottom: 8 }}>Content type</strong>
        <div style={{ display: "grid", gap: 6 }}>
          {(Object.keys(contentTypeLabels) as ContentType[]).map((type) => (
            <label key={type} style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                type="checkbox"
                checked={filters.contentTypes.includes(type)}
                onChange={() => toggleType(type)}
              />
              {contentTypeLabels[type]}
            </label>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 14 }}>
        <strong style={{ display: "block", marginBottom: 8 }}>Max credential price</strong>
        <input
          type="number"
          min={0}
          value={filters.maxPriceUsd ?? ""}
          onChange={(event) => {
            const nextValue = event.target.value ? Number(event.target.value) : undefined;
            onChange({ ...filters, maxPriceUsd: nextValue });
          }}
          placeholder="No limit"
          style={{ width: "100%", padding: "8px 10px", borderRadius: 8, border: "1px solid #94a3b8" }}
        />
      </div>

      <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <input
          type="checkbox"
          checked={filters.hasExam ?? false}
          onChange={(event) => onChange({ ...filters, hasExam: event.target.checked })}
        />
        Exam included only
      </label>
    </aside>
  );
}
