import { useState } from 'react';

export const useStatus = (initialValue) => {
  const [status, onChange] = useState(initialValue);

  const setStatus = (idx) => {
    let newStatus = new Array(status.length).fill(false);
    if (status.some((val) => val) && status.indexOf(true) === idx) {
      onChange(newStatus);
      return;
    }
    newStatus[idx] = !newStatus[idx];
    onChange(newStatus);
  };
  return [status, setStatus];
};
