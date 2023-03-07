import { createContext,useContext,useReducer } from "react";
export const dataLayerContext = createContext();
export const DataLayer = ({children, initialState,reducer}) => (
 <dataLayerContext.Provider value={useReducer(initialState, reducer)}>
            {children}
</dataLayerContext.Provider>
        );
       export const useDataLayerValue = () => useContext(dataLayerContext)