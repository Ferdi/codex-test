export type ContentType = "course" | "material" | "credential" | "learning-path";

export interface BaseContent {
  id: string;
  title: string;
  summary: string;
  thumbnailUrl?: string;
  tags?: string[];
}

export interface Course extends BaseContent {
  type: "course";
  level: "beginner" | "intermediate" | "advanced";
  lessonCount: number;
  durationHours: number;
  instructor: string;
}

export interface Material extends BaseContent {
  type: "material";
  materialFormat: "video" | "article" | "ebook" | "lab";
  runtimeMinutes: number;
  author: string;
  updatedAt: string;
}

export interface Credential extends BaseContent {
  type: "credential";
  provider: string;
  cohort: string;
  priceUsd: number;
  examIncluded: boolean;
}

export interface LearningPath extends BaseContent {
  type: "learning-path";
  stepsCompleted: number;
  totalSteps: number;
  estimatedDurationWeeks: number;
  roleTrack: string;
}

export type SearchResultItem = Course | Material | Credential | LearningPath;

export interface FilterState {
  contentTypes: ContentType[];
  levels: Array<Course["level"]>;
  formats: Array<Material["materialFormat"]>;
  maxPriceUsd?: number;
  hasExam?: boolean;
}

export interface PathOption {
  id: string;
  label: string;
  description?: string;
}
