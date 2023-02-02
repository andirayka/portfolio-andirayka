import { createContext, useReducer } from 'react'

const initialValue = {
  state: {},
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_NAV':
      return { ...state, activeNav: action.activeState }

    default:
      return state
  }
}

// NOT DONE YET
const NavContext = createContext()

export default NavContext
