import React, { useState } from 'react';

export const MenuContext = React.createContext();
export const MenuProvider = (props) => {
    const [menu, setMenu] = useState(false);
    return (
        <MenuContext.Provider value={[menu, setMenu]} >
            {props.children}
        </MenuContext.Provider>
    )
}
