import { useEffect } from "react";

export const useSplitTextAnimation = (targetRef, splitByWord = false) => {
  useEffect(() => {
    const target = targetRef.current;
    const text = target.textContent;
    const elements = splitByWord ? text.split(" ") : Array.from(text);

    target.textContent = "";

    elements.forEach((element, index) => {
      const span = document.createElement("span");
      span.classList.add("character");
      span.textContent = element;
      target.appendChild(span);

      if (splitByWord && index !== elements.length - 1) {
        target.appendChild(document.createTextNode(" "));
      }
    });
  }, [targetRef, splitByWord]);

  return targetRef;
};
