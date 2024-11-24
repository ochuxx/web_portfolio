import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import styles from '@styles/content/04-contact/ContactForm.module.css'

export function ContactForm() {
  const [isShowSendIcon, setIsShowSendIcon] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Los datos han sido enviados.')
  }

  const handleHoverSend = (e) => {
    e.type == 'mouseenter'
    ? setIsShowSendIcon(true)
    : setIsShowSendIcon(false) 
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <h2 className={styles['form__title']}>Contáctame</h2>
      
      <input
        type='text'
        name='name'
        placeholder='Nombre / Empresa'
        required
        className={styles['form__input']}
      />
      <input
        type='text'
        name='email'
        placeholder='Correo'
        required
        className={styles['form__input']}
      />
      <textarea
        name='message'
        placeholder='Mensaje'
        maxLength={100}
        required
        className={`${styles['form__input']} ${styles['form__textarea']}`}
      ></textarea>

      <button
        type='submit'
        onMouseEnter={handleHoverSend}
        onMouseLeave={handleHoverSend}
        className={`${styles['form__input']} ${styles['form__send-button']}`}
      >
        {
          isShowSendIcon
          ? <FontAwesomeIcon icon={faPaperPlane} bounce />
          : 'Enviar'
        }
      </button>

    </form>
  )
}

//Enviar
//<FontAwesomeIcon icon={faPaperPlane} bounce />