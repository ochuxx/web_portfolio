import { useContext, useRef, useState } from 'react'
import { scrollActiveContext } from '@/context/ScrollActiveComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faFolder, faFile, faImages } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen, faWindowMaximize } from '@fortawesome/free-regular-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import styles from '@styles/content/02-portfolio/ProjectsList.module.css'
import projectsData from '@/projects.json'

const filesIcons = {
  'GitHub': faGithubAlt,
  'Sitio web': faWindowMaximize,
  'Imágenes': faImages,
  'any': faFile
}

function ProjectFile({ title, childIndex, link='#' }) {
  const iconTitle = Object.hasOwn(filesIcons, title) ? title : 'any'

  return (
    <a className={styles.file} href={link} target='_blank'>
        <FontAwesomeIcon
          style={{ marginLeft: `calc((${childIndex} * 1.6rem) + .5rem)` }}
          className={styles['file__file-icon']}
          icon={filesIcons[iconTitle]}
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
          className={
            `
            ${styles['folder__header__caret-icon']}
            ${isOpen ? styles['folder__header__caret-icon--open'] : ''}
            `
          }
          style={{ marginLeft: `calc((${childIndex} * 1.25rem) + .5rem)` }}
          icon={faCaretRight}
        />
        <figure className={styles['folder__header__folder-icon-container']}>
          <FontAwesomeIcon
          className={styles['folder__header__folder-icon-container__folder-icon']}
          style={{
            color: title == 'Desarrollo web'
              ? 'var(--blue-color)'
              : title == 'Análisis de datos'
                ? 'var(--green-secondary-color)'
                : ''
          }}
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

// Componente recursivo para añadir el árbol de carpetas y archivos mediante projects.json
const FoldersAndFiles = ({ projectData, Component }) => {
  if (projectData.type == 'folder') {
    return (
      <Component title={projectData.name} childIndex={projectData.level - 1}>
        {
          projectData.children.map((newProjectData, i) => (
              <FoldersAndFiles
                key={i}
                projectData={newProjectData}
                Component={newProjectData.type == 'folder' ? ProjectFolder : ProjectFile}
              />
          ))
        }
      </Component>
    )
  }

  return (
    <Component title={projectData.name} childIndex={projectData.level - 1} link={projectData.link}/>
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
    <section className={styles['title-list-container']}>
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
        {
          projectsData.map((newProjectData, i) => (
            <FoldersAndFiles
              key={i}
              projectData={newProjectData}
              Component={newProjectData.type == 'folder' ? ProjectFolder : ProjectFile}
            />
          ))
        }
      </div>
    </section>
  )
}