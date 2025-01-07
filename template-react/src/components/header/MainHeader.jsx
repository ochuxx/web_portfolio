import { AnimatedTitle } from './AnimatedTitle'
import { SocialMedia } from './SocialMedia'
import { ListMenu } from './ListMenu'
import styles from '@styles/header/MainHeader.module.css'

// Component: Masthead
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

// Component: MainHeader (export)
export function MainHeader() {
  return (
    <header className={styles['header-container']}>
      <Masthead />
      
      <nav className={styles['list-menu-container']}>
        <ListMenu />
      </nav>

      <section className={styles['social-media-container']}>
        <SocialMedia />
      </section>
    </header>
  )
}