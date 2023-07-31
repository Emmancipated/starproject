
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const GlobalContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => useContext(GlobalContext);



export const GlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    data: null, // We will store a single record instead of an array
  });

  // Function to update the global state
  const updateGlobalState = (newData) => {
    setGlobalState({ data: newData });
  };

  return (
    <GlobalContext.Provider value={{ globalState, updateGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
  
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}


