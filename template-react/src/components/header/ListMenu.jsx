import { useEffect, useState, useRef, useContext } from 'react'
import { scrollActiveContext } from '@/context/ScrollActiveComponent'
import styles from '@styles/header/ListMenu.module.css'

function MenuItem({ itemSelected, thisItem, thisItemArrayIndex, handleItemClick }) {
  const isSelected = thisItem[0] == itemSelected[0]
  const classOfBar = isSelected ? 'item__bar--selected' : 'item__bar'

  return (
    <li
      className={styles['list-menu__item']}
      onClick={() => handleItemClick(thisItem, thisItemArrayIndex)}
    >
      <span
        className={`
          ${styles['list-menu__item__title']}
          ${isSelected ? styles['list-menu__item__title--selected'] : ''}
        `}
      >
        {thisItem[0]}
      </span>
      <div className={`${styles[classOfBar]}`}></div>
    </li>
  )
}

export function ListMenu() {
  const items = [['Inicio', 1], ['Portafolio', 2], ['Acerca de', 3], ['Contacto', 4]]
  const itemIndexRef = useRef(0)
  const mouseScrollTimer = useRef(null)
  const touchScrollTimer = useRef(null)
  const touchStartY = useRef(0)
  const [itemSelected, setItemSelected] = useState(items[itemIndexRef.current])
  const [isDropActive, setIsDropActive] = useState(false) // Activar o desactivar menú en drop
  const { isScrollActive } = useContext(scrollActiveContext)

  // Mover scroll y saber en que módulo se encuentra el usuario
  const handleItemClick = (item, itemArrayIndex) => {
    const contentComponent = document.querySelector('#main-component')
    const currentModuleHeight = contentComponent.getBoundingClientRect().height
    setIsDropActive(false)
    contentComponent.scrollTo({
      top: (currentModuleHeight * item[1]) - currentModuleHeight, // Mover scroll según el índice del módulo
      behavior:'smooth'
    })
    itemIndexRef.current = itemArrayIndex
    setItemSelected(item)
  }

  // Centrar módulos mediante el zoom, flechas del teclado, scroll del mouse y touch
  useEffect(() => {
    const handleResize = () => {
      handleItemClick(items[itemIndexRef.current], itemIndexRef.current)
    }

    const handleKeyDown = (evt) => {
      const key = evt.key
      if (key != 'ArrowDown' && key != 'ArrowUp' && key != 'Tab') {return}

      let newIndex = itemIndexRef.current
      evt.preventDefault()

      // Condiciones para mover entre modulos con flechas
      key == 'ArrowUp' ? newIndex -= 1 : newIndex += 1
      if (newIndex > 3) {newIndex = 3}
      if (newIndex < 0) {newIndex = 0}

      // En caso de que sea Tab
      if (key == 'Tab') {
        newIndex = 3
      }

      handleItemClick(items[newIndex], newIndex)
    }

    const handleMouseScroll = (evt) => {
      clearTimeout(mouseScrollTimer.current) // Temporizador para evitar multiples eventos
      if (evt.ctrlKey) {return} // No alterar zoom
      if (isScrollActive.current) {return} // No activar evento si el elemento focus tiene scroll

      mouseScrollTimer.current = setTimeout(() => {
        let newIndex = itemIndexRef.current

        // Condiciones para mover entre modulos con wheel
        evt.deltaY < 0 ? newIndex -= 1 : newIndex += 1
        if (newIndex > 3) {newIndex = 3}
        if (newIndex < 0) {newIndex = 0}

        evt.preventDefault()
        handleItemClick(items[newIndex], newIndex)
      }, 150)
    }

    const handleTouchStart = (evt) => {
      if (isScrollActive.current) {return} // No activar evento si el elemento focus tiene scroll
      touchStartY.current = evt.touches[0].clientY
      evt.preventDefault()
    }

    const handleTouchEnd = (evt) => {
      clearTimeout(touchScrollTimer.current) // Temporizador para evitar multiples eventos
      if (isScrollActive.current) {return} // No activar evento si el elemento focus tiene scroll

      const touchEndY = evt.changedTouches[0].clientY
      const touchDiff = touchStartY.current - touchEndY
      const minSwipeDistance = 50 // Distancia mínima para considerar como swipe

      if (Math.abs(touchDiff) < minSwipeDistance) {return} // No hacer nada si el swipe es muy pequeño

      touchScrollTimer.current = setTimeout(() => {
        let newIndex = itemIndexRef.current

        // Condiciones para mover entre modulos con touch
        touchDiff > 0 ? newIndex += 1 : newIndex -= 1 // Swipe hacia arriba = siguiente módulo
        if (newIndex > 3) {newIndex = 3}
        if (newIndex < 0) {newIndex = 0}

        evt.preventDefault()
        handleItemClick(items[newIndex], newIndex)
      }, 100)
    }

    // Ocultar drop-menu al dar click por fuera de las opciones
    const handleClickWindow = (evt) => {
      const targetClassName = evt.target.className 
      if (!targetClassName.includes('list-menu') || targetClassName.includes('container')) {
        setIsDropActive(false)
      }
    }

    window.addEventListener('load', handleResize) // Enviar a primera página al cargar página
    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('wheel', handleMouseScroll)
    window.addEventListener('touchstart', handleTouchStart, { passive: false })
    window.addEventListener('touchend', handleTouchEnd, { passive: false })
    window.addEventListener('click', handleClickWindow)

    return () => {
      window.removeEventListener('load', handleResize)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('wheel', handleMouseScroll)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('click', handleClickWindow)
    }
  }, [])

  return (
    <section className={styles['list-menu-container']}>
      <div className={styles['list-menu--drop']} onClick={() => {setIsDropActive(!isDropActive)}}>
        <h3 className={styles['list-menu--drop__title']}>{itemSelected[0]}</h3>
        <span className={`
          ${styles['list-menu--drop__caret']}
          ${isDropActive ? styles['list-menu--drop__caret--active'] : ''}
        `}>

        </span>
      </div>
      <ul className={`${styles['list-menu']} ${isDropActive ? styles['list-menu--drop-active'] : ''}`}>
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
    </section>
  )
}