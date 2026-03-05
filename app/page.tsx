import { Sparkles } from 'lucide-react';
import { HighlightCard } from '@/components/highlight-card';
import { highlights } from '@/lib/mock-data';

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center gap-10 px-6 py-12">
      <header className="space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-100/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          Ready to Build
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Next.js App Router + TailwindCSS baseline
        </h1>
        <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
          Start shipping quickly with a clean structure, typed data helpers, and Lucide-powered metadata cues.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((highlight) => (
          <HighlightCard key={highlight.label} item={highlight} />
        ))}
      </section>
    </main>
  );
}
