import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/document")({
  head: () => ({
    meta: [
      { title: "View Document" },
      { name: "description", content: "Read the full document." },
      { property: "og:title", content: "View Document" },
      { property: "og:description", content: "Read the full document." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DocumentPage,
});

function DocumentPage() {
  return (
    <main className="min-h-screen bg-muted px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
        <article className="rounded-xl bg-card p-10 text-card-foreground shadow-xl md:p-16">
          <h1 className="font-display text-4xl">Sample Document</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated October 2026</p>
          <div className="mt-8 space-y-5 leading-relaxed">
            <p>This is placeholder content. Replace it with your real document text or file.</p>
            <h2 className="font-display text-2xl">1. Introduction</h2>
            <p>Use this section to introduce the purpose of the document and who it is for.</p>
            <h2 className="font-display text-2xl">2. Details</h2>
            <p>Add the main body of your document here, with as many sections as you need.</p>
            <h2 className="font-display text-2xl">3. Conclusion</h2>
            <p>Summarize the key points and any next steps for the reader.</p>
          </div>
        </article>
      </div>
    </main>
  );
}
