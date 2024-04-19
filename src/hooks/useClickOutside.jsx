import { useEffect, useRef } from "react";

export default function useClickOutside(callback) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      const el = ref?.current;

      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(event.target)) {
        return;
      }

      callback();
    }

    window?.addEventListener("click", handleClick, { capture: true });
    return () => {
      window?.removeEventListener("click", handleClick, { capture: true });
    };
  }, [callback]);

  return ref;
}
