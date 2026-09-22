import { createFileRoute } from "@tanstack/react-router";
import { CalculatorCard } from "@/components/calculator/calculator-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HowItWorks } from "@/components/how-it-works";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SplitMate | Simple Bill Splitting Calculator" },
      { name: "description", content: "Split restaurant bills, tips, and shared expenses quickly with SplitMate." },
      { property: "og:title", content: "SplitMate | Simple Bill Splitting Calculator" },
      { property: "og:description", content: "Split restaurant bills, tips, and shared expenses quickly with SplitMate." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <section className="pb-9 pt-12 text-center sm:pb-12 sm:pt-16">
            <span className="badge">Simple group payments</span>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-black text-foreground sm:text-5xl lg:text-6xl">Split bills without the awkward math.</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Enter the bill, choose how many people are paying, add a tip if needed, and SplitMate handles the rest.</p>
          </section>
          <CalculatorCard />
          <HowItWorks />
        </div>
      </main>
      <Footer />
    </div>
  );
}
