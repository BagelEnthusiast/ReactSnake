import { useEffect, useRef } from "react";

export function useInterval(callback: () => void, ms: number) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      callbackRef.current();
    }, ms);
    return () => clearInterval(intervalID)
  }, [ms]);
}
