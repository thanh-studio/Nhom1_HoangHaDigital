import { useEffect, useRef } from "react";
import "./ScrollReveal.css";

// HIỆU ỨNG CUỘN: phần tử có thuộc tính data-reveal sẽ hiện dần khi cuộn tới.
// data-reveal="up" | "left" | "right" | "zoom", độ trễ qua biến CSS --reveal-delay.
const useScrollReveal = (deps = []) => {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;

    if (!root) {
      return undefined;
    }

    const items = root.querySelectorAll("[data-reveal]:not(.is-visible)");

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
};

export default useScrollReveal;
