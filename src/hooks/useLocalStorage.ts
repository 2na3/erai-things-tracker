import { useState , useEffect } from "react";

export function useLocalStorage(key: string, defaultValue: string) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || defaultValue
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
};