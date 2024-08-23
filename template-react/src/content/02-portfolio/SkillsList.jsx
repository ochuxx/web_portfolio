import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import dataSkills from '@skills-json'

function SkillChart({title, headerIcon, profession}) {
  return (
    <div>
      <header>
        <FontAwesomeIcon icon={headerIcon} />
        <h3>{title}</h3>
      </header>
      <ul>
        {
          dataSkills.map(props => {
            if (props.profession == profession) {
              return (
                <li key={props.id}>
                  <img src={props.icon} />
                  <span>{props.name}</span>
                </li>
              )
            }
          })
        }
      </ul>
    </div>
  )
}

export function SkillsList() {
  return (
    <section>
      <h2>Habilidades</h2>
      <div>
        <SkillChart headerIcon={faChartSimple} title='Análisis de datos' profession='data' />
      </div>
    </section>
  )
}