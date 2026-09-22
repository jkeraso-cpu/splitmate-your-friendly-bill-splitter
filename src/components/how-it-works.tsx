import { Calculator, ReceiptText, UsersRound, Utensils, CarFront, House, PartyPopper } from "lucide-react";

const steps = [
  { icon: ReceiptText, number: "01", title: "Enter the bill", copy: "Add your total bill amount." },
  { icon: UsersRound, number: "02", title: "Choose the split", copy: "Pick the group size and add a tip if needed." },
  { icon: Calculator, number: "03", title: "Pay your share", copy: "See exactly what everyone owes, instantly." },
];

const uses = [
  { icon: Utensils, title: "Restaurants", copy: "Dinner totals, sorted." },
  { icon: CarFront, title: "Road trips", copy: "Share fuel and tolls." },
  { icon: House, title: "Roommates", copy: "Divide shared costs." },
  { icon: PartyPopper, title: "Group events", copy: "Keep the fun fair." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 sm:py-24">
      <div className="text-center">
        <p className="eyebrow">No spreadsheets required</p>
        <h2 className="mt-3 text-3xl font-black text-foreground">How SplitMate works</h2>
      </div>
      <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
        {steps.map(({ icon: Icon, number, title, copy }) => (
          <article key={number} className="bg-background p-6 sm:p-7">
            <div className="flex items-center justify-between"><span className="grid size-10 place-items-center rounded-lg bg-secondary text-primary"><Icon className="size-5" /></span><span className="text-xs font-extrabold text-muted-foreground">{number}</span></div>
            <h3 className="mt-5 font-extrabold text-foreground">{title}</h3><p className="mt-1.5 text-sm leading-6 text-muted-foreground">{copy}</p>
          </article>
        ))}
      </div>
      <div className="mt-16 flex flex-col gap-7 sm:mt-20 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="eyebrow">Everyday expenses</p><h2 className="mt-3 text-2xl font-black text-foreground">Made for more than dinner</h2></div>
        <p className="max-w-md text-sm leading-6 text-muted-foreground">From a quick lunch to a weekend away, clear splits keep the group moving.</p>
      </div>
      <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {uses.map(({ icon: Icon, title, copy }) => (
          <article key={title} className="use-card"><Icon className="size-5 text-primary" /><div><h3 className="text-sm font-extrabold text-foreground">{title}</h3><p className="mt-0.5 text-xs text-muted-foreground">{copy}</p></div></article>
        ))}
      </div>
    </section>
  );
}