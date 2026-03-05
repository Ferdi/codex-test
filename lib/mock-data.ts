import { type LucideIcon, Activity, Layers, ShieldCheck } from 'lucide-react';

export type Highlight = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export const highlights: Highlight[] = [
  {
    label: 'Type Safe',
    value: 'TypeScript enabled throughout the app router project.',
    icon: ShieldCheck
  },
  {
    label: 'Composable',
    value: 'Reusable components with utility-first Tailwind styling.',
    icon: Layers
  },
  {
    label: 'Production Ready',
    value: 'Structured for rapid iteration and dependable scaling.',
    icon: Activity
  }
];
