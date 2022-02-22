/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import Context from './Context';

function AppProvider({ children }) {
  const contextValue = {
    text: 'text',
  };

  return (
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  );
}

export default AppProvider;
