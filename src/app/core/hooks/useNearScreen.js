import { useEffect, useRef, useState } from "react";

function useNearScreen({ distance = "100px", externalRef, once = true } = {}) {
  const fromRef = useRef();
  const [isNearScreen, setShow] = useState(false);

  useEffect(() => {
    let observer;
    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries, obs) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        once && obs.disconnect();
      }
      if (!el.isIntersecting) {
        !once && setShow(false);
      }
    };
    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: `0px 0px ${distance} 0px`,
      });
      element && observer.observe(element);
    });
    return () => observer && observer.disconnect();
  });
  return { isNearScreen, fromRef };
}

export default useNearScreen;
