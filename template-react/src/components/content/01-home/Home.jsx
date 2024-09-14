import { PersonalImage } from './PersonalImage'
import { Description } from './Description'
import styles from '@styles/content/01-home/Home.module.css'

export function Home() {
  return (
    <section className={styles['home-container']}>
      <Description>
        Desarrollador y Analista de datos
      </Description>
      <PersonalImage />
    </section>
  )
}