import { Home } from './01-home/Home'
import { Portfolio } from './02-portfolio/Portfolio'
import styles from '@styles/content/MainContent.module.css';

export function MainContent() {
  return (
    <main className={styles['all-content-container']}>
      <Portfolio />
      <Home />
    </main>
  )
}