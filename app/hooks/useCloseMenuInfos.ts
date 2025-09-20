import { useEffect } from "react";

export default function useCloseMenuInfos<T extends HTMLDivElement>(
  ref: React.RefObject<T | null>,
  isActive: boolean,
  onClose: () => void
) {
  useEffect(() => {
    if (!isActive) return;

    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [ref, isActive, onClose]);

  useEffect(() => {
    if (!isActive) return;

    function handleEsc(e: KeyboardEvent) {
      if (ref.current && e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [ref, isActive, onClose]);
}
