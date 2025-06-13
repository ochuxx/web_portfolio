import React from 'react'
import styles from '@styles/content/01-home/PersonalImage.module.css'

export function PersonalImage() {
  return (
    <div className={styles['images-container']}>
      <figure 
        className={
          `
          ${styles['images-container__img-container']} 
          `
        }
      >
        <img
          src='/assets/home/cara4.png'
          alt='Personal Image'
          loading='lazy'
          className={styles['personal-image']}
        />
      </figure>

      <figure 
        className={
          `
          ${styles['images-container__video-container']} 
          ${styles['images-container__video-container--video2']}
          `
        }
      >
        <img
          src='/assets/home/chart.webp'
          alt='Data'
          loading='lazy'
          className={styles['profession-video']}
        />
      </figure>
    </div>
  )
}