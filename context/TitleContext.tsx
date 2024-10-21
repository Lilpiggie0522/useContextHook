'use client'
import React, { createContext, useContext, useState } from "react";

type TitleContextType = {
    data: string,
    setData: (data: string) => void
}

interface StudentProviderProps {
    children: React.ReactNode;  // ReactNode represents any valid JSX element, string, etc.
}

export const titleContext = createContext<TitleContextType | null>(null)

export function useTitleContext() {
    const context = useContext(titleContext);
    if (!context) {
      // Provide an appropriate error message
      throw new Error("no context defined")
    }
    return context
  }

export function TitleProvider({children}: {children: React.ReactNode}) {
    const [data, setData] = useState<string>('')
    return(
        <titleContext.Provider value={{data, setData}}>
            {children}
        </titleContext.Provider>
    )
}

