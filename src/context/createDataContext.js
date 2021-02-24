//Context API contaxt provides a way to pass data through the component tree without having to pass props down manually at every level
import React, {useReducer} from 'react'
import { render } from 'react-dom'

export default (render, actions, defaultValue) => {
    const Context = React.createContext()

    const Provider = ({ children }) => {
        const bondsActions = {}

        for(let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }


        return (
            <Context.Provider value={{ state, ...bondsActions }}>
                {children}
            </Context.Provider>
        )
    }
    return(Context, Provider)
}