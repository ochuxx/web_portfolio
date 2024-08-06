import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/header/SocialMedia.module.css'

function SocialMediaIcon({symbol, link}) {
  return (
    <div className={styles['icon-container']}>
      <a href={link} className={styles['icon-link']}>
        <FontAwesomeIcon className={styles['icon-symbol']} icon={symbol} />
      </a>
    </div>
  )
}

export function SocialMedia() {
  return (
    <section className={styles['social-media']}>
      <SocialMediaIcon symbol={faWhatsapp} link='#' />
      <SocialMediaIcon symbol={faLinkedin} link='#' />
    </section>
  )
}