import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/header/SocialMedia.module.css'

function SocialMediaIcon({symbol, link, variant}) {
  const variantClass = `icon-link__symbol--${variant}`

  return (
    <a href={link} className={styles['icon-link']}>
      <FontAwesomeIcon
        className={`${styles['icon-link__symbol']} ${styles[variantClass]}`}
        icon={symbol}
      />
    </a>
  )
}

export function SocialMedia() {
  return (
    <section className={styles['social-media']}>
      <SocialMediaIcon symbol={faWhatsapp} link='#' variant='whatsapp' />
      <SocialMediaIcon symbol={faLinkedin} link='#' variant='linkedin' />
    </section>
  )
}