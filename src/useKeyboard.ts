import { useEffect } from "react";

export enum ArrowKey {
  Up = 'ArrowUp',
  Down = 'ArrowDown',
  Left = 'ArrowLeft',
  Right = 'ArrowRight',
}
const ArrowKeys = new Set([
  ArrowKey.Up,
  ArrowKey.Down,
  ArrowKey.Left,
  ArrowKey.Right,
]);

export function useArrowKeys(
  callback: (arrow: ArrowKey) => void,
) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const code = event.key as ArrowKey;
      if (ArrowKeys.has(code)) {
        callback(code);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
}