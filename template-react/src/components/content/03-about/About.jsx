import { useState } from 'react'
import { ProfessionButton } from './ProfessionButton'
import { DescriptionFile } from './DescriptionFile'
import { CurriculumSection } from './CurriculumSection'
import styles from '@styles/content/03-about/About.module.css'

const professionData = [
  {
    'title': 'Análisis de datos',
    'extension': 'data',
    'description': 'Para mí, Los datos son oportunidades para impulsar el crecimiento, mejorar la toma de decisiones y facilitar el seguimiento.',
    'imagePath': '/assets/about/data_reference.png'
  },
  {
    'title': 'Desarrollo web',
    'extension': 'dev',
    'description': 'Ese sitio web que necesita una actualización o que tienes en mente crear puede tener una solución. Ofrezco mejoras e implementaciones para llevarlo al siguiente nivel.',
    'imagePath': '/assets/about/dev_reference.png'
  }
]

export function About() {
  const [professionDataCurrent, setProfessionDataCurrent] = useState(professionData[0])
  const handleClickProfession = (extensionClicked) => {
    if (extensionClicked == professionDataCurrent.extension) return
    if (extensionClicked == 'data') {
      setProfessionDataCurrent(professionData[0])
    } else {
      setProfessionDataCurrent(professionData[1])
    }
  }

  return (
    <section className={styles['about-container']}>
      <div className={styles['about-container__prof-buttons-container']}>
        <ProfessionButton
          extension='data'
          extensionActive={professionDataCurrent.extension}
          handleClick={handleClickProfession}
        />
        <ProfessionButton
          extension='dev'
          extensionActive={professionDataCurrent.extension}
          handleClick={handleClickProfession}
        />
      </div>

      <DescriptionFile
        title={professionDataCurrent.title}
        extension={professionDataCurrent.extension}
        imagePath={professionDataCurrent.imagePath}
      >
        {professionDataCurrent.description}
      </DescriptionFile>
      <CurriculumSection extensionActive={professionDataCurrent.extension} />
    </section>
  )
}