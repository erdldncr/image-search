import { createContext, useContext, useReducer } from "react";
import {reducer,defaultState} from '../store/reducer'
export const AppContext=createContext()

export function AppContextProvider({children}){

    const [state,dispatch]=useReducer(reducer,defaultState)

    return(
        <AppContext.Provider value={{...state,dispatch}} >
            {children}
        </AppContext.Provider>

    )

}
export const useGlobalContext=()=>{

    return useContext(AppContext)
}
