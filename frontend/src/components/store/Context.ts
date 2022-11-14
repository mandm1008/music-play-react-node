import React, { createContext } from 'react'
import { init, action } from './reducer'

type context = [init, React.Dispatch<action>]

const Context = createContext<context>()

export default Context
