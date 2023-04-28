import React from "react";

const usePersistedState = (key, initialState) => {
  const [state, setState] = React.useState(() => {
    const storageValue = localStorage.getItem(key);
    return storageValue !== null ? JSON.parse(storageValue) : initialState;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, setState];
};

export { usePersistedState };
