import { createContext, useEffect, useState } from "react";
export const DataContext = createContext()
export const DataContextProvider = ({ children }) => {
    const [data, setdata] = useState(
        {
            blogtitle: null,
            blogsubtitle: null,
            coverimg: null,
            authorname: null,
            authoremail: null,
            blogcontent: null
        }
    )
    return (
        <DataContext.Provider value={{ data, setdata }}>
            {children}
        </DataContext.Provider>
    )
}