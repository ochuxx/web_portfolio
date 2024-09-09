// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFile } from '@fortawesome/free-regular-svg-icons'
import styles from '@styles/content/03-about/ProfessionSelector.module.css'

function ProfessionButton({ title, children, isOn=true }) {
  return (
    <section className={styles['profession-container']} >
      <header className={styles['profession-container__header']}>
        <img className={styles['profession-container__header__icon']} src='/assets/about/file.svg' />
        <h3 className={styles['profession-container__header__title']}>{title}</h3>
      </header>
      <aside className={styles['profession-container__aside']}>
        <button className={styles['profession-container__aside__button']}>
          Acerca de:<br/>{children}
        </button>
        <span 
          className={`
            ${styles['profession-container__aside__reference-line']}
            ${isOn ? styles['profession-container__aside__reference-line--active'] : ''}
          `}
        >
        </span>
      </aside>
    </section>
  )
}

export function ProfessionSelector() {
  return (
    <div className={styles['main-container']}>
      <ProfessionButton title='.dev'>Análisis de datos</ProfessionButton>
      {/*<ProfessionButton title='.data' isOn={false}>Desarrollo web</ProfessionButton>*/}
    </div>
  )
}