import { useContext, useRef, useState } from 'react'
import Swal from 'sweetalert2'
import { scrollActiveContext } from '@/context/ScrollActiveComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faFolder } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import styles from '@styles/content/02-portfolio/ProjectsList.module.css'
import projectsData from '@/projects.json'
import { PROJECTS_FILES_ICONS } from '@/utils/projectsFilesIcons'
import { PROJECTS_IMAGES_EVIDENCES } from '@/utils/projectsImagesEvidences'

const filesIconsStack = PROJECTS_FILES_ICONS[1]
const allFilesIcons = PROJECTS_FILES_ICONS[2]

function ProjectFile({ title, childIndex, link='#', imagesReference=false }) {
  const { isScrollActive } = useContext(scrollActiveContext)
  
  const showImages = () => {
    // Guardar rutas de imagenes para posteriormente poner en HTML de Swal
    let imagesElements = ''
    PROJECTS_IMAGES_EVIDENCES[imagesReference].some(imagePath => {
      if (!imagePath.includes('.webm')) {
        imagesElements += `<img class="alert-images__container__image" src=${imagePath}>`
        return
      }
      imagesElements +=
        `<video controls autoplay muted class="alert-images__container__image"> 
          <source src=${imagePath} type='video/webm'>
          El navegador no soporta este video
        </video>`
    })

    Swal.fire({
      title: `Screenshots de ${imagesReference}`,
      html: `
        <div
          class="alert-images__container"
        >
          ${imagesElements}
        </div>
      `,
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        popup: 'alert-images',
        title: 'alert-images__title',
      }
    })
    .then(() => {
      isScrollActive.current = false
    })

    // Tiempo de espera para evitar interferencia con el activateScroll de abajo
    // y así mantener scroll inactivo cuando alerta con imágenes se está mostrando
    setTimeout(() => {
      isScrollActive.current = true 
    }, 100)
  }

  const iconTitle = Object.hasOwn(allFilesIcons, title) ? title : 'any'
  return (
    <a
      className={styles.file}
      href={iconTitle != 'Imágenes' ? link : undefined}
      target={iconTitle != 'Imágenes' ? '_blank' : undefined}
      onClick={iconTitle == 'Imágenes' ? showImages : undefined}
    >
        {
        !Object.keys(filesIconsStack).includes(title) // El título no existe en las claves de Stack
          ?
          <FontAwesomeIcon
            style={{ marginLeft: `calc((${childIndex} * 1.6rem) + .5rem)` }}
            className={styles['file__file-icon']}
            icon={allFilesIcons[iconTitle]}
          />
          :
          <img
            style={{ marginLeft: `calc((${childIndex} * 1.6rem) + .5rem)` }}
            className={styles['file__file-icon']}
            src={allFilesIcons[iconTitle]}
          />
        }
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
    <Component
      title={projectData.name}
      childIndex={projectData.level - 1}
      link={projectData.link}
      imagesReference={'imagesReference' in projectData ? projectData.imagesReference : false}
    />
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