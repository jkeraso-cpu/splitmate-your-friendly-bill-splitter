import { Minus, Plus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PeopleSelectorProps {
  people: number;
  onChange: (people: number) => void;
}

export function PeopleSelector({ people, onChange }: PeopleSelectorProps) {
  return (
    <section className="space-y-3" aria-labelledby="people-label">
      <div id="people-label" className="section-label">
        <Users className="size-4 text-primary" /> People
      </div>
      <div className="flex items-center justify-between rounded-lg border border-border bg-secondary/55 p-1.5">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onChange(Math.max(1, people - 1))}
          disabled={people === 1}
          aria-label="Remove one person"
          title="Remove one person"
        >
          <Minus />
        </Button>
        <output
          className="min-w-20 text-center text-xl font-extrabold text-foreground transition-transform"
          aria-live="polite"
        >
          {people}
        </output>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onChange(Math.min(50, people + 1))}
          disabled={people === 50}
          aria-label="Add one person"
          title="Add one person"
        >
          <Plus />
        </Button>
      </div>
      <p className="helper-text">
        {people === 1 ? "1 person" : `${people} people`} sharing this bill.
      </p>
    </section>
  );
}
