import styles from '@styles/content/01-home/Description.module.css';

export function Description({ children }) {
  return (
    <div className={styles['description-container']}>
      <h3 className={styles['description-container__title']}>
        ¡Mucho gusto!, me llamo Juan Ochoa, soy
      </h3>
      <p className={styles['description-container__main-text']}>
        {children}
      </p>
      <footer className={styles['description-container__footer']} >
        <button>¡Conoce más!</button>
      </footer>
    </div>
  )
}