import { useEffect } from "react";

export const useSplitTextAnimation = (targetRef) => {
  useEffect(() => {
    const target = targetRef.current;
    const text = target.textContent;
    const characters = text.split("");

    target.textContent = "";

    characters.forEach((character) => {
      const span = document.createElement("span");
      span.classList.add("character");
      span.textContent = character;
      target.appendChild(span);
    });
  }, [targetRef]);

  return targetRef;
};