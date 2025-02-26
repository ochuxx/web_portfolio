import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import styles from '@styles/content/03-about/ProfessionButton.module.css'

export function ProfessionButton({ extension, extensionActive, handleClick }) {
  return (
    <section className={styles['profession-container']} >
      <header className={styles['profession-container__header']}>
        <FontAwesomeIcon className={styles['profession-container__header__icon']} icon={faFile} />
        <h3 className={styles['profession-container__header__title']}>.{extension}</h3>
      </header>
      <aside className={styles['profession-container__aside']}>
        <div
          className={`
            ${styles['profession-container__aside__button-container']}
            ${styles[`profession-container__aside__button-container--${extension}`]}
          `}
        >
          <button
            className={`
              ${extensionActive === extension
                ? styles['button--active']
                : ''
              }
            `}
            onClick={() => handleClick(extension)}
          >
            Abrir archivo
          </button>
        </div>
        <span 
          className={`
            ${styles['profession-container__aside__reference-line']}
            ${extensionActive === extension
              ? styles['profession-container__aside__reference-line--active']
              : ''
            }
            ${styles[`profession-container__aside__reference-line--${extension}`]}
          `}
        >
        </span>
      </aside>
    </section>
  )
}