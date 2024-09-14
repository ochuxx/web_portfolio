import { Home } from './01-home/Home'
import { Portfolio } from './02-portfolio/Portfolio'
import { About } from './03-about/About'
import styles from '@styles/content/MainContent.module.css';

export function MainContent() {
  return (
    <main className={styles['all-content-container']}>
      <Home />
      <Portfolio />
      <About />
    </main>
  )
}