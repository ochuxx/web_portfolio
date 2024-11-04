import styles from '@styles/content/03-about/DescriptionFile.module.css'
import React from 'react'

function HighlightSomeWords({ text, words }) {
  const textSeparate = text.split(/\s+/)
  return (
    <span>
      {textSeparate.map((value, index) => (
        <React.Fragment key={index}>
          {words.includes(value) ? <b>{value}</b> : value}{" "}
        </React.Fragment>
      ))}
    </span>
  )
}

export function DescriptionFile({ title, children, extension, imagePath }) {
  return (
    <section
      className={`
        ${styles['file-container']}
        ${styles[`file-container--${extension}`]}
      `}
    >
      <h1 className={styles['file-container__title']}>{title}</h1>
      <p className={styles['file-container__description']}>
        <HighlightSomeWords
          text={children}
          words={
            [
              'oportunidades',
              'crecimiento,',
              'decisiones',
              'solución.',
              'actualización',
              'crear',
              'nivel.'
            ]
          }
        />
      </p>
      <footer className={styles['file-container__footer']}>
        <img
        src={imagePath}
        className={styles['file-container__footer__reference-image']}
        />
        <span className={styles['file-container__footer__file-name']}>info.{extension}</span>
      </footer>
    </section>
  )
}