import { useEffect, useRef } from "react";

export function useInterval(callback: () => void) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    setInterval(() => {
      callbackRef.current();
    }, 1000);
  }, []);
}
