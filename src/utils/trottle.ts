/* eslint-disable @typescript-eslint/no-explicit-any */
export const throttle = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;

  return (...args: Parameters<T>) => {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    } else {
      lastArgs = args;
      if (!timeout) {
        timeout = setTimeout(() => {
          if (lastArgs) {
            func(...lastArgs);
            lastCall = Date.now();
          }
          timeout = null;
        }, delay - (now - lastCall));
      }
    }
  };
};