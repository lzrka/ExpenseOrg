import React, { createContext, useReducer } from "react"
import AppReducer from './AppReducer'

const initialstate = {
    transactions: [
       /*  {id: 1, text: 'Flower', amount: -20},
        {id: 2, text: 'Salary', amount: +120} */
]

}

export const GlobalContext = createContext(initialstate);

export const GlobalProvider = ({ children}) => {
 const [state, dispatch] = useReducer(AppReducer, initialstate);

// Actions
function deleteTransaction(id) {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
}

function addTransaction(transaction) {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}


 return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction  
 }}>
    {children}
 </GlobalContext.Provider>)
}