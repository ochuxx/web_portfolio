import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import styles from '@styles/content/03-about/ProfessionButton.module.css'

export function ProfessionButton({ extension, extensionActive, handleClick }) {
  const extensionWithoutDot = extension.replace('.', '')

  return (
    <section className={styles['profession-container']} >
      <header className={styles['profession-container__header']}>
        <FontAwesomeIcon className={styles['profession-container__header__icon']} icon={faFile} />
        <h3 className={styles['profession-container__header__title']}>{extension}</h3>
      </header>
      <aside className={styles['profession-container__aside']}>
        <div
          className={`
            ${styles['profession-container__aside__button-container']}
            ${styles[`profession-container__aside__button-container--${extensionWithoutDot}`]}
          `}
        >
          <button
            className={styles['profession-container__aside__button-container__button']}
            onClick={() => handleClick(extension)}
          >
            Abrir archvio
          </button>
        </div>
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
}