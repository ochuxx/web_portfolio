import { useEffect, useState, useRef } from 'react'
import styles from '@styles/header/ListMenu.module.css'

function MenuItem({ children, itemSelected, itemIndex, handleItemClick }) {
  const isSelected = children == itemSelected[0]
  const classOfBar = isSelected ? 'item__bar--selected' : 'item__bar'

  return (
    <li
      className={styles['list-menu__item']}
      onClick={() => handleItemClick(children, itemIndex)}
    >
      <span>{children}</span>
      <div className={`${styles[classOfBar]}`}></div>
    </li>
  )
}

export function ListMenu() {
  const items = [['Inicio', 1], ['Portafolio', 2], ['Acerca de', 3], ['Contacto', 4]]
  const [itemSelected, setItemSelected] = useState(items[0])
  const itemSelectedRef = useRef(itemSelected)

  // Mover scroll y saber en que módulo se encuentra el usuario
  const handleItemClick = (itemTitle, itemIndex) => {
    const contentComponent = document.querySelector('#main-component')
    const currentModuleHeight = contentComponent.getBoundingClientRect().height
    contentComponent.scrollTo({
      top: (currentModuleHeight * itemIndex) - currentModuleHeight, // Mover scroll según el índice del módulo
      behavior:'smooth'
    })
    setItemSelected([itemTitle, itemIndex])
    itemSelectedRef.current = [itemTitle, itemIndex]
  }

  // Centrar módulo actual al cambiar el alto de la ventana
  useEffect(() => {
    const handleResize = () => {
      const [title, index] = itemSelectedRef.current
      handleItemClick(title, index)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
      <ul className={styles['list-menu']}>
        {
          items.map(item => (
            <MenuItem
              key={item[1]}
              itemSelected={itemSelected}
              itemIndex={item[1]}
              handleItemClick={handleItemClick}
            >
              {item[0]}
            </MenuItem>
          ))
        }
      </ul>
  )
}