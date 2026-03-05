import type { Highlight } from '@/lib/mock-data';

type HighlightCardProps = {
  item: Highlight;
};

export function HighlightCard({ item }: HighlightCardProps) {
  const Icon = item.icon;

  return (
    <article className="flex h-full flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="inline-flex w-fit items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
        <Icon className="h-4 w-4" aria-hidden="true" />
        {item.label}
      </div>
      <p className="text-sm leading-relaxed text-slate-600">{item.value}</p>
    </article>
  );
}
