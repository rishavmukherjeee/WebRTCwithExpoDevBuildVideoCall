// NameContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context for the name
const NameContext = createContext();

// Create a provider component
export const NameProvider = ({ children }) => {
  const [name, setName] = useState('');

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

// Custom hook to use the name context
export const useName = () => {
  return useContext(NameContext);
};
