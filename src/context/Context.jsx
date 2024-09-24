import React, { createContext } from 'react'

export const DataContext = createContext()

const Context = ({ children }) => {

    
    const value = {}
    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    )
}

export default Context