import { useCallback, useInsertionEffect, useRef } from "react";

/**
 * This hook is user-land implementation of the experimental `useEffectEvent` hook.
 * React docs: https://react.dev/learn/separating-events-from-effects#declaring-an-effect-event
 */
export function useCallbackRef(callback, deps = []) {
  const callbackRef = useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });

  useInsertionEffect(() => {
    callbackRef.current = callback;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback((...args) => callbackRef.current?.(...args), deps);
}
