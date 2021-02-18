import { useState, useEffect, useRef } from 'react';

export function useLocalStorage(key, defaultValue = '') {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage);
    }
    return defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}

export function usePrevious(value, initial) {
  const targetRef = useRef(value);
  const previousRef = useRef(initial);

  if (targetRef.current !== value) {
    // The value changed.
    previousRef.current = targetRef.current;
    targetRef.current = value;
  }

  return previousRef.current;
}
