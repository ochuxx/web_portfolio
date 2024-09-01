import styles from '@styles/header/ListMenu.module.css';

function MenuItem({ children, isSelected = false }) {
  const classOfBar = isSelected ? 'item__bar--selected' : 'item__bar'

  return (
    <li className={styles['list-menu__item']}>
      <span>{children}</span>
      <div className={`${styles[classOfBar]}`}></div>
    </li>
  )
}

export function ListMenu() {
  return (
      <ul className={styles['list-menu']}>
        <MenuItem isSelected >Inicio</MenuItem>
        <MenuItem>Portafolio</MenuItem>
        <MenuItem>Acerca de mí</MenuItem>
        <MenuItem>Contacto</MenuItem>
      </ul>
  )
}