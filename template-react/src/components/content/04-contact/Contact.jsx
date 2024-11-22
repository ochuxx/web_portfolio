import { React } from 'react'
import { ContactForm } from './ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import styles from '@styles/content/04-contact/Contact.module.css'

export function Contact() {
  return (
    <section className={styles['contact-container']}>
      <div className={styles['box']}>
        <aside className={styles['box__reference']}>
          <div className={styles['box__reference__background-image']}></div>
          <div className={styles['box__reference__info']}>
            <span className={styles['box__reference__info__element']}>
              ochux.project@gmail.com
            </span>
          </div>
        </aside>
        <div className={styles['box__form-container']}>
          <ContactForm />
          <FontAwesomeIcon
            className={styles['box__form-container__mail-icon']}
            icon={faEnvelope}
          />
        </div>
      </div>
    </section>
  )
}