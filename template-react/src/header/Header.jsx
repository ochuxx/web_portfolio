import { AnimatedTitle } from './AnimatedTitle'
import { SocialMedia } from './SocialMedia'
import styles from '../styles/header/Header.module.css'

function Masthead() {
  return (
    <section className={styles.masthead}>
      <img
        className={styles['masthead__logo']}
        src='/ochux_logo.png'
        alt='Logo'
      />
      <aside className={styles['masthead__title-container']}>
        <AnimatedTitle />
      </aside>
    </section>
  )
}

function Menu() {
  return (
    <nav className={styles['nav-menu']}>
      <ul>
        <li>Inicio</li>
        <li>Portafolio</li>
        <li>Acerca de mí</li>
        <li>Contacto</li>
      </ul>
    </nav>
  )
}

export function MainHeader() {
  return (
    <header className={styles['header-container']}>
      <Masthead />
      <Menu />
      <SocialMedia />
    </header>
  )
}