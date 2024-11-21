import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from '@styles/header/SocialMedia.module.css'

function SocialMediaIcon({ symbol, link, variant }) {
  const variantClass = `icon-link__symbol--${variant}`

  return (
    <a href={link} className={`${styles['icon-link']}`} target='_blank'>
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
      <SocialMediaIcon symbol={faInstagram} link='https://www.instagram.com/oochux/' variant='instagram' />
      <SocialMediaIcon symbol={faLinkedin} link='https://www.linkedin.com/in/ochuxx/' variant='linkedin' />
      <SocialMediaIcon symbol={faGithub} link='https://github.com/ochuxx' variant='github' />
    </section>
  )
}