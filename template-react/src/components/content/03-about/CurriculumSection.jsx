import styles from '@styles/content/03-about/CurriculumSection.module.css'

function DecorationLine({ widthClass, figure, hasCurriculumButton=false }) {
  return (
    <div className={styles['line-container']}>
      <span
        className={`
          ${styles['line-container__line']}
          ${styles[`line-container__line--${widthClass}`]}
        `}>
      </span>
      <aside className={styles['line-container__line-head']}></aside>
    </div>
  )
}

export function CurriculumSection() {
  return (
    <div className={styles['curriculum-section-container']}>
      <DecorationLine widthClass='medium' />
      <DecorationLine widthClass='large' />
      <DecorationLine widthClass='small' />
    </div>
  )
}