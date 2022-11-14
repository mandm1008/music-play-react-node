import { useReducer } from 'react'
import Context from './Context'
import reducer, { initState } from './reducer'

function MusicProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initState)

  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
}

export default MusicProvider
