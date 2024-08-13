import React from 'react'
import styles from '@styles/content/01-home/PersonalImage.module.css'

function ThematicVideo({videoRoute}) {
  return (
    <video
      autoPlay
      muted
      loop
      className={styles['profession-video']} 
    >
      <source src={videoRoute} type='video/mp4' />
    </video>
  )
}

export function PersonalImage() {
  return (
    <div className={styles['images-container']}>
      <figure 
        className={
          `
          ${styles['images-container__video-container']} 
          ${styles['images-container__video-container--video1']}
          `
        }
      >
        <ThematicVideo videoRoute='/assets/home/programming.mp4' />
      </figure>

      <figure 
        className={
          `
          ${styles['images-container__img-container']} 
          `
        }
      >
        <img
          src='/assets/home/cara3.png'
          alt='Personal Image'
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
        <ThematicVideo videoRoute='/assets/home/analyst2.mp4' />
      </figure>
    </div>
  )
}