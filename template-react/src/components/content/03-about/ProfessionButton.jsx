<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import styles from '@styles/content/03-about/ProfessionSelector.module.css'

export function ProfessionButton({ extension, children, extensionActive, handleClick }) {
  return (
    <section className={styles['profession-container']} >
      <header className={styles['profession-container__header']}>
        <FontAwesomeIcon className={styles['profession-container__header__icon']} icon={faFile} />
        <h3 className={styles['profession-container__header__title']}>{extension}</h3>
      </header>
      <aside className={styles['profession-container__aside']}>
        <button
          className={styles['profession-container__aside__button']}
          onClick={() => handleClick(extension)}
        >
          Acerca de:<br/>{children}
        </button>
        <span 
          className={`
            ${styles['profession-container__aside__reference-line']}
            ${extensionActive === extension ? styles['profession-container__aside__reference-line--active'] : ''}
          `}
        >
        </span>
      </aside>
    </section>
  )
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import styles from '@styles/content/03-about/ProfessionSelector.module.css'

export function ProfessionButton({ extension, children, extensionActive, handleClick }) {
  return (
    <section className={styles['profession-container']} >
      <header className={styles['profession-container__header']}>
        <FontAwesomeIcon className={styles['profession-container__header__icon']} icon={faFile} />
        <h3 className={styles['profession-container__header__title']}>{extension}</h3>
      </header>
      <aside className={styles['profession-container__aside']}>
        <button
          className={styles['profession-container__aside__button']}
          onClick={() => handleClick(extension)}
        >
          Acerca de:<br/>{children}
        </button>
        <span 
          className={`
            ${styles['profession-container__aside__reference-line']}
            ${extensionActive === extension ? styles['profession-container__aside__reference-line--active'] : ''}
          `}
        >
        </span>
      </aside>
    </section>
  )
>>>>>>> 2847d45 (.gitignore añadido)
}