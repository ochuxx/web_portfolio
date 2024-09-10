import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import styles from '@styles/content/03-about/ProfessionSelector.module.css'

function ProfessionButton({ title, children, professionActive, handleClick }) {
  return (
    <section className={styles['profession-container']} >
      <header className={styles['profession-container__header']}>
        <FontAwesomeIcon className={styles['profession-container__header__icon']} icon={faFile} />
        <h3 className={styles['profession-container__header__title']}>{title}</h3>
      </header>
      <aside className={styles['profession-container__aside']}>
        <button
          className={styles['profession-container__aside__button']}
          onClick={() => handleClick(title)}
        >
          Acerca de:<br/>{children}
        </button>
        <span 
          className={`
            ${styles['profession-container__aside__reference-line']}
            ${professionActive === title ? styles['profession-container__aside__reference-line--active'] : ''}
          `}
        >
        </span>
      </aside>
    </section>
  )
}

export function ProfessionSelector() {
  const [professionActive, setProfessionActive] = useState('.data')
  const handleClick = (profTitle) => {
    if (profTitle === professionActive) return
    setProfessionActive(profTitle)
  }

  return (
    <div className={styles['main-profession-selector-container']}>
      <ProfessionButton
        handleClick={handleClick}
        title='.data'
        professionActive={professionActive}
      >
        Análisis de datos
      </ProfessionButton>
      <ProfessionButton
        handleClick={handleClick}
        title='.dev'
        professionActive={professionActive}
      >
        Desarrollo web
      </ProfessionButton>
    </div>
  )
}