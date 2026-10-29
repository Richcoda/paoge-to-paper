import { createFileRoute } from "@tanstack/react-router";
import { FileText, ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Document Is Ready" },
      { name: "description", content: "Open and read your document in one click." },
      { property: "og:title", content: "Your Document Is Ready" },
      { property: "og:description", content: "Open and read your document in one click." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

type BackdropPage = {
  style: CSSProperties;
  blur: number;
  drift?: string;
};

const BACKDROP_PAGES: BackdropPage[] = [
  {
    style: { left: "-12%", top: "-14%", width: "50%", height: "82%", rotate: "-7deg" },
    blur: 3,
    drift: "doc-drift-a",
  },
  {
    style: { right: "-10%", top: "2%", width: "46%", height: "78%", rotate: "6deg" },
    blur: 2.5,
    drift: "doc-drift-b",
  },
  {
    style: { left: "6%", bottom: "-24%", width: "42%", height: "70%", rotate: "5deg" },
    blur: 5,
    drift: "doc-drift-c",
  },
  {
    style: { right: "8%", bottom: "-18%", width: "36%", height: "60%", rotate: "-4deg" },
    blur: 6,
  },
  {
    style: { left: "44%", top: "-14%", width: "28%", height: "48%", rotate: "10deg" },
    blur: 7,
  },
];

function DocumentBackdrop() {
  return (
    <div aria-hidden className="doc-backdrop">
      {BACKDROP_PAGES.map((page, i) => (
        <div
          key={i}
          className={`doc-page ${page.drift ?? ""}`}
          style={{ ...page.style, filter: `blur(${page.blur}px)` }}
        >
          <div className="doc-rule" />
          <div className="doc-rule doc-rule--short" />
          <div className="doc-body" />
          <div className="doc-seal" />
        </div>
      ))}
      <div className="doc-veil" />
    </div>
  );
}

function Index() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <DocumentBackdrop />
      <div className="relative z-10 max-w-xl text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <FileText className="h-10 w-10" />
        </div>
        <h1 className="font-display text-5xl leading-tight text-foreground md:text-6xl">
          Your document is ready
        </h1>
        <p className="mt-4 text-lg text-foreground/80">
          Everything you need, in one place. Open it whenever you're ready.
        </p>
        <a
          href="https://docs.google.com/your-document-path"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5"
        >
          View Document <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </main>
  );
}
