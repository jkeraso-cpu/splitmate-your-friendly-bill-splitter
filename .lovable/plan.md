# SplitMate implementation plan

## Goal
Build a polished, responsive, frontend-only bill-splitting calculator with complete calculations, validation, sharing, theme persistence, and repository documentation.

## Experience
- Compact branded header, concise introduction, and a prominent two-column calculator that stacks cleanly on mobile.
- Friendly fintech styling with warm neutral surfaces, emerald accents, strong accessibility, and an intentionally designed dark theme.
- Lightweight supporting sections for the three-step workflow and common use cases, followed by a compact footer.

## Functionality
- Currency input with safe parsing, comma formatting, decimals, clearing, and inline validation.
- People stepper from 1–50, preset and custom tips from 0–100%, and an explicit round-up toggle.
- Instant precision-safe totals, animated result updates, clear empty state, reset, clipboard copy, and native share with clipboard fallback.
- Theme selection respecting system preference initially and persisting only the user's theme choice.

## Architecture and quality
- Separate calculator logic, currency helpers, theme hook, types, and focused interface sections.
- Semantic design tokens, accessible controls, keyboard focus states, reduced-motion support, and route-specific social metadata.
- Custom favicon and a complete GitHub-ready README.
- Verify core calculator behavior, theme persistence, copy/share behavior, console health, and layouts at representative mobile and desktop widths.
