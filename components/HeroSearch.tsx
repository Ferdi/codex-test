import React from "react";

interface HeroSearchProps {
  query: string;
  onQueryChange: (value: string) => void;
  onSearch: () => void;
  totalResults?: number;
}

export function HeroSearch({ query, onQueryChange, onSearch, totalResults }: HeroSearchProps) {
  return (
    <section
      style={{
        borderRadius: 16,
        padding: 24,
        background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)",
        color: "#f8fafc",
      }}
    >
      <h1 style={{ margin: 0, fontSize: 32 }}>Find your next learning milestone</h1>
      <p style={{ marginTop: 12, opacity: 0.9 }}>
        Search courses, materials, credentials, and complete learning paths in one place.
      </p>
      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search for cloud engineering, React, exam prep..."
          style={{
            flex: 1,
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.3)",
            padding: "12px 14px",
            fontSize: 16,
          }}
        />
        <button
          onClick={onSearch}
          style={{
            borderRadius: 12,
            border: "none",
            padding: "0 20px",
            fontWeight: 700,
            background: "#22c55e",
            color: "#052e16",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>
      {typeof totalResults === "number" && (
        <p style={{ marginTop: 12, marginBottom: 0, fontWeight: 600 }}>{totalResults} results found</p>
      )}
    </section>
  );
}
