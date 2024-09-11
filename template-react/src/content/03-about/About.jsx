import { ProfessionSelector } from './ProfessionSelector'
import { DescriptionFile } from './DescriptionFile'
import styles from '@styles/content/03-about/About.module.css'

export function About() {
  return (
    <section className={styles['about-container']}>
      <ProfessionSelector />
      <DescriptionFile />
    </section>
  )
}