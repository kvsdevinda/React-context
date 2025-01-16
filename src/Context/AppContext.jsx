import { createContext } from 'react';

export const AppContext = createContext();

const ContextProvider = (props) => {
    const phone = "+94774950722"; // The value you want to share

    return (
        <AppContext.Provider value={phone}>
            {props.children}
        </AppContext.Provider>
    );
};

export default ContextProvider;