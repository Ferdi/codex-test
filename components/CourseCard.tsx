import React from "react";
import { Course } from "../lib/types";

interface CourseCardProps {
  item: Course;
}

export function CourseCard({ item }: CourseCardProps) {
  return (
    <article
      style={{
        border: "1px solid #93c5fd",
        borderLeft: "6px solid #2563eb",
        background: "#eff6ff",
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
          background: "#1d4ed8",
          color: "#eff6ff",
        }}
      >
        Course
      </span>
      <h3 style={{ marginBottom: 8 }}>{item.title}</h3>
      <p style={{ marginTop: 0, color: "#334155" }}>{item.summary}</p>
      <div style={{ display: "grid", gap: 6, marginTop: 10, fontSize: 14 }}>
        <div>Level: {item.level}</div>
        <div>Lessons: {item.lessonCount}</div>
        <div>Duration: {item.durationHours} hours</div>
        <div>Instructor: {item.instructor}</div>
      </div>
    </article>
  );
}
