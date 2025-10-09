import { useEffect } from "react";

export default function useCloseMenuInfos<T extends HTMLDivElement>(
  ref: React.RefObject<T | null>,
  isActive: boolean,
  onClose: () => void,
  pathname?: string
) {
  // Fechar menu-infos com outsideClick + Verificação do fancybox
  useEffect(() => {
    if (!isActive) return;

    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;

      if (ref.current && ref.current.contains(target)) return;

      if (document.querySelector(".fancybox__dialog")?.contains(target)) return;

      onClose();
    }

    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [ref, isActive, onClose]);

  // Fechar menu-infos com teclado
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

  // Correção de scroll
  useEffect(() => {
    const body = document.body;

    if (isActive) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      body.style.overflow = "hidden";
      body.style.marginRight = `${scrollbarWidth}px`;
    } else {
      body.style.overflow = "";
      body.style.marginRight = "";
    }

    return () => {
      body.style.overflow = "";
      body.style.marginRight = "";
    };
  }, [isActive]);

  // Focus trap
  useEffect(() => {
    if (!isActive || !ref.current) return;

    const focusableSelectors = "button, [href], input, select, textarea";

    const focusableElements = Array.from(
      ref.current.querySelectorAll<HTMLElement>(focusableSelectors)
    );
    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    firstEl?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isActive, ref]);

  // Fechar na mudança de rota
  useEffect(() => {
    if (isActive) onClose();
  }, [pathname]);
}
