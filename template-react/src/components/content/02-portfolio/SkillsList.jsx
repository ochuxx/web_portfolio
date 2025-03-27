import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartColumn, faCode } from '@fortawesome/free-solid-svg-icons'
import skillsData from '@skills-json'
import styles from '@styles/content/02-portfolio/SkillsList.module.css'

const dataAnalyst = skillsData.filter(data => data.profession === 'data')
const dataDevelopment = skillsData.filter(data => data.profession === 'development')
const dataBoth = skillsData.filter(data => data.profession === 'data_developmet')

function SkillCards({ children, hideCardName }) {
  return (
    <ul className={styles['cards-container']}>
      {children.map(data => (
        <li key={data.id} className={styles.card}>
          <img 
            src={data.icon}
            alt='icon'
            className={styles['card__icon']}
          />
          <span className={styles['card__name']}>
            {hideCardName ? '' : data.name /* Ocultar en caso de responsive pequeño */}
          </span>
        </li>
      ))}
    </ul>
  )
}

function SkillsBox({ title, headerIcon, dataList, hideCardName, profession, eventMouseOnBox, eventMouseOffBox, className }) {
  const separateTitle = title.split(' ')
  const lastTitleWord = separateTitle[separateTitle.length - 1]

  const handleMouseEnter = () => {
    eventMouseOnBox(profession)
  }

  const handleMouseLeave = () => {
    eventMouseOffBox()
  }

  return (
    <div
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <header className={styles['box__header']}>
        <FontAwesomeIcon icon={headerIcon} className={styles['box__header__icon']} />
        <h3 className={styles['box__header__title']}>
          {
          hideCardName && lastTitleWord[0] != undefined
            ? `${lastTitleWord[0].toUpperCase()}${lastTitleWord.slice(1)}`
            : title
          }
        </h3>
      </header>
      <SkillCards hideCardName={hideCardName}>
        {dataList}
      </SkillCards>
    </div>
  )
}

export function SkillsList() {
  const [boxHoverReference, setBoxHoverReference] = useState(null)
  const [isCardNameHide, setIsCardNameHide] = useState(false)

  const eventMouseOnBox = (profession) => {
    setBoxHoverReference(profession)
  }

  const eventMouseOffBox = () => {
    setBoxHoverReference(null)
  }
  
  const professions = [
    {
      name: 'data',
      title: 'Análisis de datos',
      icon: faChartColumn,
      hover_condition: `${boxHoverReference === 'data' || boxHoverReference === 'data_dev' ? styles['box--data--hover'] : ''}`,
      data_list: dataAnalyst
    },
    {
      name: 'data_dev',
      title: '',
      icon: faCode,
      hover_condition: `${boxHoverReference != null ? styles['box--data_dev--hover'] : ''}`,
      data_list: dataBoth
    },
    {
      name: 'dev',
      title: 'Desarrollo web',
      icon: faCode,
      hover_condition: `${boxHoverReference === 'dev' || boxHoverReference === 'data_dev' ? styles['box--dev--hover'] : ''}`,
      data_list: dataDevelopment
    },
  ]

  useEffect(() => {
    const handleResizeWindowSkillsList = () => {
      const windowWidth = window.innerWidth
      setIsCardNameHide(windowWidth <= 660)
    }

    window.addEventListener('resize', handleResizeWindowSkillsList)
    window.addEventListener('load', handleResizeWindowSkillsList)

    return () => {
      window.removeEventListener('resize', handleResizeWindowSkillsList)
      window.removeEventListener('load', handleResizeWindowSkillsList)
  }
  }, [])

  return (
    <section className={styles['title-box-container']}>
      <h2 className={styles['skill-title']}>Habilidades</h2>
      <div
        className={`
          ${styles['boxes-container']} 
          ${boxHoverReference != null ? styles[`boxes-container--hover-on-${boxHoverReference}`] : ''}
        `}
      >
        {
          professions.map(data => (
            <SkillsBox
              key={data.name}
              profession={data.name}
              title={data.title}
              headerIcon={data.icon}
              dataList={data.data_list}
              hideCardName={isCardNameHide}
              className={`
                ${styles.box} 
                ${styles[`box--${data.name}`]} 
                ${data.hover_condition}
              `}
              eventMouseOnBox={eventMouseOnBox}
              eventMouseOffBox={eventMouseOffBox}
            />
          ))
        }
      </div>
    </section>
  )
}