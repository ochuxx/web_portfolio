import { React } from 'react'
import { ContactForm } from './ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import styles from '@styles/content/04-contact/Contact.module.css'

export function Contact() {
  return (
    <section className={styles['contact-container']}>
      <div>
        <aside>
          <img src="" alt="" />
          <div>
            <span>ochux.project@gmail.com</span>
          </div>
        </aside>
        <div>
          <ContactForm />
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
    </section>
  )
}