import { useEffect, useRef, useState } from "react";

function useNearScreen({ distance = "100px" } = {}) {
  const fromRef = useRef();
  const [isNearScreen, setShow] = useState(false);

  useEffect(() => {
    let observer;
    const onChange = (entries, obs) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        obs.disconnect();
      }
    };
    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });

      observer.observe(fromRef.current);
    });
    return () => observer && observer.disconnect();
  });
  return { isNearScreen, fromRef };
}

export default useNearScreen;
