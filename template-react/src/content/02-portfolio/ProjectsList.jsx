import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faFolder } from '@fortawesome/free-solid-svg-icons'
import styles from '@styles/content/02-portfolio/ProjectsList.module.css'

function ProjectFolder({children, title, childIndex}) {

  const [isOpen, setIsOpen] = useState(false)

  const handleClickFolder = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.folder}>
      <header className={styles['folder__header']} onClick={handleClickFolder}>
        <FontAwesomeIcon
          style={{ marginLeft: `calc(${childIndex} * .8rem` }}
          className={styles['folder__header__caret-icon']}
          icon={faCaretDown}
        />
        <FontAwesomeIcon
         className={styles['folder__header__folder-icon']}
         icon={faFolder}
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
        <ProjectFolder title='Análisis de datos' childIndex={1}>
          <ProjectFolder title='Proyecto 1' childIndex={2}>
            <ProjectFolder title='Proyecto 2' childIndex={3}>
            </ProjectFolder>
          </ProjectFolder>
        </ProjectFolder>
      </div>
    </section>
  )
}