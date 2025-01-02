import { createContext, useRef } from 'react'

export const scrollActiveContext = createContext()

// Ayuda a detectar si un elemento tiene scroll activo para las funciones de mover wheel en componente ListMenu
export const ScrollActiveComponent = ({ children }) => {
  const isScrollActive = useRef(false)
  const activateScroll = (bool) => {
    isScrollActive.current = bool
  }

  return (
    <scrollActiveContext.Provider
      value={{
        isScrollActive,
        activateScroll
      }}
    >
      {children}
    </scrollActiveContext.Provider>
  )
}