import React from "react";
import { SearchResultItem } from "../lib/types";
import { CourseCard } from "./CourseCard";
import { CredentialCard } from "./CredentialCard";
import { LearningPathCard } from "./LearningPathCard";
import { MaterialCard } from "./MaterialCard";

interface SearchResultsProps {
  results: SearchResultItem[];
}

export function SearchResults({ results }: SearchResultsProps) {
  if (results.length === 0) {
    return <p style={{ color: "#475569" }}>No results match your current query and filters.</p>;
  }

  return (
    <section style={{ display: "grid", gap: 14 }} aria-label="Search results">
      {results.map((item) => {
        switch (item.type) {
          case "course":
            return <CourseCard key={item.id} item={item} />;
          case "material":
            return <MaterialCard key={item.id} item={item} />;
          case "credential":
            return <CredentialCard key={item.id} item={item} />;
          case "learning-path":
            return <LearningPathCard key={item.id} item={item} />;
          default:
            return null;
        }
      })}
    </section>
  );
}
