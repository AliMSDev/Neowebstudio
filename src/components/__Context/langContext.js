import React, { useState } from 'react';

export const LangContext = React.createContext();
export const LangProvider = (props) => {
    const [fa,setFa] = useState(false);
    return (
        <LangContext.Provider value={[fa,setFa]} >
            {props.children}
        </LangContext.Provider>
    )
}
