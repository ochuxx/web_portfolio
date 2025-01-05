import React from 'react'
import styles from '@styles/content/01-home/PersonalImage.module.css'

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
        <img
          src='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExejg3azF6Z2pmYjFscm1nNjJ3bDgyeGt0NTRmZXQwZjNsdnU2M3dkMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/KJmbSTSyIzetubNgJ5/giphy.gif'
          alt='Data'
          loading='lazy'
          className={styles['profession-video']}
        />
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
        {/* GIF SOURCES
        1. https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTU1YnJuOG5ld2IwNjVmcXdsbHVqdmUzZjhiNjZvdzF5YXB3aWs3ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bmQBu3aSF0DxadphkG/giphy.gif'
        */}
        <img
          src='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2Q3cjNzeHVhcGhia2ZzaTFrb3RkZTJhaDR2NGNvMHp1aGE4enUwNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/c8knYYZ5vzC8V6tpMI/giphy.gif'
          alt='Data'
          loading='lazy'
          className={styles['profession-video']}
        />
      </figure>
    </div>
  )
}