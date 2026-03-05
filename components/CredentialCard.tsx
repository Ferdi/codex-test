import React from "react";
import { Credential } from "../lib/types";

interface CredentialCardProps {
  item: Credential;
}

export function CredentialCard({ item }: CredentialCardProps) {
  return (
    <article
      style={{
        border: "1px solid #f5d0fe",
        borderLeft: "6px solid #a21caf",
        background: "#fdf4ff",
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
          background: "#86198f",
          color: "#fdf4ff",
        }}
      >
        Credential
      </span>
      <h3 style={{ marginBottom: 8 }}>{item.title}</h3>
      <p style={{ marginTop: 0, color: "#334155" }}>{item.summary}</p>
      <div style={{ display: "grid", gap: 6, marginTop: 10, fontSize: 14 }}>
        <div>Provider: {item.provider}</div>
        <div>Price: ${item.priceUsd.toLocaleString()}</div>
        <div>Cohort: {item.cohort}</div>
        <div>Exam included: {item.examIncluded ? "Yes" : "No"}</div>
      </div>
    </article>
  );
}
