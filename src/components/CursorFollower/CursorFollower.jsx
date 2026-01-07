import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) {
      return undefined;
    }

    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (!supportsFinePointer) {
      dot.style.display = "none";
      ring.style.display = "none";
      return undefined;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId;

    const handleMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      dotX += (mouseX - dotX) * 0.2;
      dotY += (mouseY - dotY) * 0.2;
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      rafId = window.requestAnimationFrame(animate);
    };

    const setActiveState = (event) => {
      const inputTarget = event.target.closest(
        "input, textarea, select, [contenteditable='true']"
      );
      if (inputTarget) {
        dot.classList.add("is-hidden");
        ring.classList.add("is-hidden");
        return;
      }

      dot.classList.remove("is-hidden");
      ring.classList.remove("is-hidden");

      const target = event.target.closest("[data-cursor='large']");
      if (target) {
        dot.classList.add("is-active");
        ring.classList.add("is-active");
      } else {
        dot.classList.remove("is-active");
        ring.classList.remove("is-active");
      }
    };

    const handlePointerDown = () => {
      dot.classList.add("is-clicked");
      ring.classList.add("is-clicked");
    };

    const handlePointerUp = () => {
      dot.classList.remove("is-clicked");
      ring.classList.remove("is-clicked");
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("mouseover", setActiveState);
    document.addEventListener("mouseout", setActiveState);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("mouseover", setActiveState);
      document.removeEventListener("mouseout", setActiveState);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
