"use client";

import { useEffect } from "react";

export default function ContentProtection() {
  useEffect(() => {
    // Disable right-click
    const noContextMenu = (e: MouseEvent) => e.preventDefault();

    // Block Ctrl+C, Ctrl+A, Ctrl+U, Ctrl+S, Ctrl+P, F12, DevTools shortcuts
    const noKeyboard = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (
        (e.ctrlKey && ["c", "u", "s", "a", "p"].includes(key)) ||
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["i", "j", "c", "k"].includes(key))
      ) {
        e.preventDefault();
      }
    };

    // Disable text selection via mouse
    const noSelect = (e: Event) => e.preventDefault();

    // Disable drag (images, text)
    const noDrag = (e: DragEvent) => e.preventDefault();

    document.addEventListener("contextmenu", noContextMenu);
    document.addEventListener("keydown", noKeyboard);
    document.addEventListener("selectstart", noSelect);
    document.addEventListener("dragstart", noDrag);

    return () => {
      document.removeEventListener("contextmenu", noContextMenu);
      document.removeEventListener("keydown", noKeyboard);
      document.removeEventListener("selectstart", noSelect);
      document.removeEventListener("dragstart", noDrag);
    };
  }, []);

  return null;
}
