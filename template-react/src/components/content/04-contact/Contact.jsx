import { React } from 'react'
import { ContactForm } from './ContactForm'
import styles from '@styles/content/04-contact/Contact.module.css'

export function Contact() {
  return (
    <section className={styles['contact-container']}>
      <div>
        <aside>

        </aside>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}