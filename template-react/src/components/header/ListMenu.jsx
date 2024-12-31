import { useEffect, useState } from 'react'
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

  const handleItemClick = (itemTitle, itemIndex) => {
    const contentComponent = document.querySelector('#main-component')
    const currentModuleHeight = contentComponent.getBoundingClientRect().height
    contentComponent.scrollTo({
      top: (currentModuleHeight * itemIndex) - currentModuleHeight, // Mover scroll según el índice del módulo
      behavior:'smooth'
    })
    setItemSelected([itemTitle, itemIndex])
  }
  
  /* ARREGLAR
  useEffect(() => {
    window.addEventListener('resize', () => handleItemClick(itemSelected[0], itemSelected[1]))

    return () => {
      window.removeEventListener('resize', () => handleItemClick(itemSelected[0], itemSelected[1]))
    }
  }, [])
  */

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