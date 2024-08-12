import { useState, useEffect } from 'react'
import styles from '@styles/header/AnimatedTitle.module.css'

const titles = ['Web', 'Dev', 'Analyst']
let isDeleting, iTitle = 0

export function AnimatedTitle() {
  let selectedTitle = titles[iTitle]
  let titleDuration = 230
  const [title, setTitle] = useState(selectedTitle)

  // Cuando esté todo el título, debe mostrarse un rato
  if (title.length == selectedTitle.length) {titleDuration = 2000}
  if (title.length == 0) {titleDuration = 400}

  useEffect(() => {
    const textAnimation = () => {
      if (title.length == selectedTitle.length) {
        isDeleting = true
      }

      if (title.length == 0) {
        isDeleting = false
        iTitle = (iTitle + 1) % titles.length // Formula para acceder a un array varias veces sin condición
        selectedTitle = titles[iTitle] // Añade el nuevo título para animar
      }

      return setTitle(
        isDeleting
        ? title.slice(0, title.length - 1)
        : `${title}${selectedTitle[title.length]}`
      );
    }

    const textAnimationTimeout = setTimeout(() => {
      textAnimation()
    }, titleDuration)

    return () => clearTimeout(textAnimationTimeout)
  }, [title])

  return (
    <h2 className={styles['text-container']}>
      <span>Ochux</span>
      <span className={styles['text-container__titles']}>
        {title}<span className={styles.blink}></span>
      </span>
    </h2>
  )
}