import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faFolder, faFile } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import styles from '@styles/content/02-portfolio/ProjectsList.module.css'

function ProjectFile({title, childIndex, link='#'}) {
  return (
    <a className={styles.file} href={link}>
        <FontAwesomeIcon
          style={{ marginLeft: `calc((${childIndex} * 1.6rem) + .5rem)` }}
          className={styles['file__file-icon']}
          icon={faFile}
        />
        <h3 className={styles['file__title']}>{title}</h3>
    </a>
  )
}

function ProjectFolder({children, title, childIndex}) {
  const [isOpen, setIsOpen] = useState(false)
  const handleClickFolder = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.folder}>
      <header className={styles['folder__header']} onClick={handleClickFolder}>
        <FontAwesomeIcon
          style={{ marginLeft: `calc((${childIndex} * 1.25rem) + .5rem)` }}
          className={
            `
            ${styles['folder__header__caret-icon']}
            ${isOpen ? styles['folder__header__caret-icon--open'] : ''}
            `
          }
          icon={faCaretRight}
        />
        <FontAwesomeIcon
         className={styles['folder__header__folder-icon']}
         icon={isOpen ? faFolderOpen : faFolder}
        />
        <h3 className={styles['folder__header__title']}>{title}</h3>
      </header>

      <aside 
        className={
          isOpen
          ? styles['folder__children-container--open']
          : styles['folder__children-container--closed']
        }
      >
        {children}
      </aside>
    </div>
  )
}

export function ProjectsList() {
  return (
    <section>
      <h2>Proyectos</h2>
      <div className={styles['folders-container']}>
        <ProjectFolder title='Análisis de datos' childIndex={0}>
          <ProjectFolder title='Proyecto 1' childIndex={1}>
            <ProjectFolder title='Proyecto 2' childIndex={2}>
              <ProjectFile title='Archivo' childIndex={3} />
            </ProjectFolder>
          </ProjectFolder>
        </ProjectFolder>
      </div>
    </section>
  )
}