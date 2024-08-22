import { ProjectsList } from './ProjectsList'
import { SkillsList } from './SkillsList'
import styles from '@styles/content/02-portfolio/Portfolio.module.css'

export function Portfolio() {
  return (
    <section className={styles['portfolio-container']}>
      <ProjectsList />
      <SkillsList />
    </section>
  )
}