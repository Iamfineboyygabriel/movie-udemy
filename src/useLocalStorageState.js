import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem("key");
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      //we wanna store the watched movie in a local storage
      localStorage.setItem("key", JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
