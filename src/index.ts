import * as React from 'react';

export default function useLocalStorage(key: string, onChange?: () => any) {
  function setItem(value: string) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      throw new Error('Error setting the value to local storage.');
    }
  }

  function getItem(): string | null {
    try {
      return localStorage.getItem(key);
    } catch (error: any) {
      return null;
    }
  }

  function removeItem() {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      throw new Error('Error removing the item from local storage.');
    }
  }

  React.useEffect(() => {
    const handleStorageChange = () => {
      if (onChange) {
        onChange();
      }
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key, onChange]);

  return { setItem, getItem, removeItem };
}
