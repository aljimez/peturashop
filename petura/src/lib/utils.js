import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// cn: helper for composing class names when using Tailwind + clsx
// - `clsx` composes conditional class names
// - `twMerge` resolves Tailwind class conflicts (last one wins)
// Use this helper to keep JSX className expressions clean and deterministic.
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
