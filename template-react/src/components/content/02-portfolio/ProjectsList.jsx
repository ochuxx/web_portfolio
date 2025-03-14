import { useContext, useRef, useState } from 'react'
import { scrollActiveContext } from '@/context/ScrollActiveComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faFolder, faFile } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import styles from '@styles/content/02-portfolio/ProjectsList.module.css'

function ProjectFile({ title, childIndex, link='#' }) {
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

function ProjectFolder({ children, title, childIndex }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleClickFolder = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.folder}>
      <span
        className={
          `
          ${styles['folder__reference-line']}
          ${isOpen ? styles['folder__reference-line--open'] : ''}
          `
        }
        style={{ marginLeft: `calc((${childIndex} * 1.25rem) + 1rem)` }}
      >
      </span>
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
        <figure className={styles['folder__header__folder-icon-container']}>
          <FontAwesomeIcon
          className={styles['folder__header__folder-icon-container__folder-icon']}
          icon={isOpen ? faFolderOpen : faFolder}
          />
        </figure>
        <h3 className={styles['folder__header__title']}>{title}</h3>
      </header>

      <aside 
        className={
          `
          ${styles['folder__children-container']}
          ${isOpen ? styles['folder__children-container--open'] : ''}
          `
        }
      >
        {children}
      </aside>
    </div>
  )
}

export function ProjectsList() {
  const { activateScroll } = useContext(scrollActiveContext)
  const folderContainerRef = useRef(null)

  const handleMouseEnter = () => {
    const element = folderContainerRef.current
    const hasScroll =
      element.scrollHeight > element.clientHeight &&
      (element.scrollTop > 0 || element.scrollTop + element.clientHeight < element.scrollHeight)
    activateScroll(hasScroll)
  }

  const handleMouseLeave = () => {
    activateScroll(false)
  }

  return (
    <section className={styles['title-list-container']} >
      <h2 className={styles['project-title']}>Proyectos</h2>
      <div
        className={styles['folders-container']}
        onClick={() => {
          setTimeout(() => {
            handleMouseEnter()
          }, 5) // Se retrasa el tiempo de función para actualizar las propiedades de la ref
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={folderContainerRef}
      >
        <ProjectFolder title='Análisis de datos' childIndex={0}>
          <ProjectFolder title='Proyecto 1' childIndex={1}>
            <ProjectFolder title='Proyecto 2' childIndex={2}>
              <ProjectFile title='Archivo' childIndex={3} />
              <ProjectFile title='Archivo 2' childIndex={3} />
            </ProjectFolder>
            <ProjectFolder title='Proyecto 2' childIndex={2}>
              <ProjectFile title='Archivo' childIndex={3} />
              <ProjectFile title='Archivo 2' childIndex={3} />
            </ProjectFolder>
          </ProjectFolder>
        </ProjectFolder>
        <ProjectFolder title='Análisis de datos' childIndex={0}>
          <ProjectFolder title='Proyecto 1' childIndex={1}>
            <ProjectFolder title='Proyecto 2' childIndex={2}>
              <ProjectFile title='Archivo' childIndex={3} />
              <ProjectFile title='Archivo 2' childIndex={3} />
            </ProjectFolder>
            <ProjectFolder title='Proyecto 2' childIndex={2}>
              <ProjectFile title='Archivo' childIndex={3} />
              <ProjectFile title='Archivo 2' childIndex={3} />
            </ProjectFolder>
          </ProjectFolder>
        </ProjectFolder>
      </div>
    </section>
  )
}