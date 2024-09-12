import { useState } from 'react'
import { ProfessionButton } from './ProfessionButton'
import { DescriptionFile } from './DescriptionFile'
import styles from '@styles/content/03-about/About.module.css'

const descriptionFileData = [
  {
    'title': 'Data Analysis',
    'extension': '.data',
    'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae, dolorem suscipit voluptas officiis ex. Impedit aperiam, maxime eligendi voluptates cum voluptatem sed. Animi, voluptatum. Maxime beatae quibusdam error sequi.'
  },
  {
    'title': 'Development',
    'extension': '.dev',
    'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae, dolorem suscipit voluptas officiis ex. Impedit aperiam, maxime eligendi voluptates cum voluptatem sed. Animi, voluptatum. Maxime beatae quibusdam error sequi.'
  }
]

export function About() {
  const [professionInfo, setProfessionInfo] = useState(descriptionFileData[0])
  const handleClickProfession = (currentExtension) => {
    if (currentExtension == professionInfo.extension) return
    if (currentExtension == '.data') {
      setProfessionInfo(descriptionFileData[1])
    } else {
      setProfessionInfo(descriptionFileData[0])
    }
  }

  return (
    <section className={styles['about-container']}>
      <div className={styles['about-container__prof-buttons-container']}>
        <ProfessionButton
          extension='.data'
          extensionActive={professionInfo.extension}
          handleClick={handleClickProfession}
        >
          Análisis de datos
        </ProfessionButton>
        <ProfessionButton
          extension='.dev'
          extensionActive={professionInfo.extension}
          handleClick={handleClickProfession}
        >
          Desarrollo Web
        </ProfessionButton>
      </div>

      <DescriptionFile
        title={professionInfo.title}
        extension={professionInfo.extension}
      >
        {professionInfo.description}
      </DescriptionFile>
    </section>
  )
}