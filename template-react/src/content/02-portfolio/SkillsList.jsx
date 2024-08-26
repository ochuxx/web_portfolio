import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartColumn, faCode } from '@fortawesome/free-solid-svg-icons'
import dataSkills from '@skills-json'
import styles from '@styles/content/02-portfolio/SkillsList.module.css'

function SkillCards({children}) {
  return (
    <ul className={styles['cards-container']}>
      {children.map(data => (
        <li key={data.id} className={styles.card}>
          <img 
            src={data.icon}
            alt='icon'
            className={styles['card__icon']}
          />
          <span className={styles['card__name']}>{data.name}</span>
        </li>
      ))}
    </ul>
  )
}

function SkillsBox({title, headerIcon, dataList, profession = 'data_dev'}) {
  return (
    <div className={`${styles.box} ${styles[`box--${profession}`]}`}>
      <header className={styles['box__header']}>
        <FontAwesomeIcon icon={headerIcon} className={styles['box__header__icon']} />
        <h3 className={styles['box__header__title']}>{title}</h3>
      </header>
      <SkillCards>
        {dataList}
      </SkillCards>
    </div>
  )
}

export function SkillsList() {
  const dataAnalyst = dataSkills.filter(data => data.profession == 'data')
  const dataDevelopment = dataSkills.filter(data => data.profession == 'development')
  const dataBoth = dataSkills.filter(data => data.profession == 'data_developmet')

  return (
    <section className={styles['title-box-container']}>
      <h2 className={styles['skill-title']}>Habilidades</h2>
      <div className={styles['boxes-container']}>
        <SkillsBox headerIcon={faChartColumn} title='Análisis de datos' dataList={dataAnalyst} profession='data' />
        <SkillsBox headerIcon={faCode} title='' dataList={dataBoth} />
        <SkillsBox headerIcon={faCode} title='Desarrollo web' dataList={dataDevelopment} profession='dev' />
      </div>
    </section>
  )
}