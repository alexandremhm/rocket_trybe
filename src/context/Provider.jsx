import React from 'react';
import Context from './Context';

function AppProvider({ children }) {

  const contextValue = {

  }

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

export default AppProvider;
