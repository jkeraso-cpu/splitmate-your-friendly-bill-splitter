import { BrandLogo } from "@/components/brand-logo";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <BrandLogo />
        <div className="text-xs leading-5 text-muted-foreground">
          <p>Made with ☕ and questionable group math.</p>
          <p>© {new Date().getFullYear()} SplitMate</p>
        </div>
      </div>
    </footer>
  );
}
