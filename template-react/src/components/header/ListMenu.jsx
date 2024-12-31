import { useEffect, useState, useRef } from 'react'
import styles from '@styles/header/ListMenu.module.css'

function MenuItem({ itemSelected, thisItem, thisItemArrayIndex, handleItemClick }) {
  const isSelected = thisItem[0] == itemSelected[0]
  const classOfBar = isSelected ? 'item__bar--selected' : 'item__bar'

  return (
    <li
      className={styles['list-menu__item']}
      onClick={() => handleItemClick(thisItem, thisItemArrayIndex)}
    >
      <span>{thisItem[0]}</span>
      <div className={`${styles[classOfBar]}`}></div>
    </li>
  )
}

export function ListMenu() {
  const items = [['Inicio', 1], ['Portafolio', 2], ['Acerca de', 3], ['Contacto', 4]]
  const itemIndexRef = useRef(0)
  const mouseScrollTimer = useRef(null)
  const [itemSelected, setItemSelected] = useState(items[itemIndexRef.current])

  // Mover scroll y saber en que módulo se encuentra el usuario
  const handleItemClick = (item, itemArrayIndex) => {
    const contentComponent = document.querySelector('#main-component')
    const currentModuleHeight = contentComponent.getBoundingClientRect().height
    contentComponent.scrollTo({
      top: (currentModuleHeight * item[1]) - currentModuleHeight, // Mover scroll según el índice del módulo
      behavior:'smooth'
    })
    itemIndexRef.current = itemArrayIndex
    setItemSelected(item)
  }

  // Centrar módulos mediante el zoom, flechas del teclado y scroll del mouse
  useEffect(() => {
    const handleResize = () => {
      handleItemClick(items[itemIndexRef.current], itemIndexRef.current)
    }

    const handleArrowClick = (evt) => {
      const key = evt.code
      let newIndex = itemIndexRef.current

      if (key != 'ArrowDown' && key != 'ArrowUp') {
        return
      }

      evt.preventDefault()
      key == 'ArrowUp' ? newIndex -= 1 : newIndex += 1
      
      if (newIndex > 3 || newIndex < 0) {
        return
      }

      handleItemClick(items[newIndex], newIndex)
    }

    const handleMouseScroll = (evt) => {
      clearTimeout(mouseScrollTimer.current) // Temporizador para evitar multiples eventos
      if (evt.ctrlKey) {return} // No alterar zoom
      console.log(evt)
      mouseScrollTimer.current = setTimeout(() => {
        let newIndex = itemIndexRef.current

        evt.preventDefault()
        evt.deltaY < 0 ? newIndex -= 1 : newIndex += 1
        if (newIndex > 3 || newIndex < 0) {
          return
        }
        handleItemClick(items[newIndex], newIndex)
      }, 150)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleArrowClick)
    window.addEventListener('wheel', handleMouseScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleArrowClick)
      window.removeEventListener('wheel', handleMouseScroll)
    }
  }, [])

  return (
      <ul className={styles['list-menu']}>
        {
          items.map((item, i) => (
            <MenuItem
              key={item[1]}
              itemSelected={itemSelected}
              thisItem={item}
              thisItemArrayIndex={i}
              handleItemClick={handleItemClick}
            />
          ))
        }
      </ul>
  )
}