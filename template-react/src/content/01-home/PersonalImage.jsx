import React from 'react'

function ThematicVideo({videoRoute}) {
  return (
    <video autoplay muted playsinline loop style={{height: '2rem'}}>
      <source src={videoRoute} type='video/mp4' />
    </video>
  )
}

export function PersonalImage() {
  return (
    <div>
      <figure>
        <ThematicVideo videoRoute='/assets/home/programming.mp4' />
      </figure>

      <figure>
        <img
          src='/assets/home/cara4.png'
          alt='Personal Image'
          style={{height: '2rem'}}
        />
      </figure>

      <figure>
        <ThematicVideo videoRoute='/assets/home/analyst2.mp4' />
      </figure>
    </div>
  )
}