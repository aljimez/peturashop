import { useState, useCallback } from "react";

/**
 * Custom Hook: useMobileMenu
 * Follows Single Responsibility Principle (SRP).
 *
 * Manages the open/closed state of the mobile menu.
 */
export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, toggle, close };
};
