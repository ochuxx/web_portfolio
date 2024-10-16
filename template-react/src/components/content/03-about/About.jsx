import { useState } from 'react'
import { ProfessionButton } from './ProfessionButton'
import { DescriptionFile } from './DescriptionFile'
import { CurriculumSection } from './CurriculumSection'
import styles from '@styles/content/03-about/About.module.css'

const professionData = [
  {
    'title': 'Data Analysis',
    'extension': 'data',
    'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae, dolorem suscipit voluptas officiis ex. Impedit aperiam, maxime eligendi voluptates cum voluptatem sed. Animi, voluptatum. Maxime beatae quibusdam error sequi.',
    'imagePath': '/assets/about/data_reference.png'
  },
  {
    'title': 'Development',
    'extension': 'dev',
    'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae, dolorem suscipit voluptas officiis ex. Impedit aperiam, maxime eligendi voluptates cum voluptatem sed. Animi, voluptatum. Maxime beatae quibusdam error sequi.',
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