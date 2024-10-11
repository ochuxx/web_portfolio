import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import styles from '@styles/content/03-about/CurriculumSection.module.css'

function DecorationLine({ widthClass, extensionActive, hasCurriculumButton=false }) {
  return (
    <div className={styles['line-container']}>
      <span
        className={`
          ${styles['line-container__line']}
          ${styles[`line-container__line--${widthClass}`]}
        `}>
      </span>
      <aside className={`
        ${styles['line-container__line-head']}
        ${hasCurriculumButton ? styles['line-container__line-head--has-button-child'] : ''}
        ${extensionActive == 'dev' ? styles['line-container__line-head--is-square'] : ''}
      `}>
        {hasCurriculumButton
          ? <button className={styles['line-container__line-head__button']}>
              <FontAwesomeIcon 
                icon={faFilePdf}
                className={styles['line-container__line-head__button__icon']}
              />Descargar CV
            </button>
          : ''
        }
      </aside>
    </div>
  )
}

export function CurriculumSection({ extensionActive }) {
  return (
    <div
      className={`
        ${styles['curriculum-section-container']}
        ${styles[`curriculum-section-container--${extensionActive}`]}
      `}
    >
      <DecorationLine widthClass='very-small' extensionActive={extensionActive} />
      <DecorationLine widthClass='small' extensionActive={extensionActive} />
      <DecorationLine widthClass='medium' extensionActive={extensionActive} />
      <DecorationLine widthClass='large' hasCurriculumButton />
      <DecorationLine widthClass='medium' extensionActive={extensionActive} />
      <DecorationLine widthClass='small' extensionActive={extensionActive} />
      <DecorationLine widthClass='very-small' extensionActive={extensionActive} />
    </div>
  )
}