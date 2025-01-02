import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import styles from '@styles/content/04-contact/ContactForm.module.css'

export function ContactForm() {
  const [isShowSendIcon, setIsShowSendIcon] = useState(false)
  const formRef = useRef(null)
  const currentInputIndexRef = useRef(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Los datos han sido enviados.')
  }

  const handleHoverSend = (e) => {
    e.type == 'mouseenter' || e.type == 'focus'
    ? setIsShowSendIcon(true)
    : setIsShowSendIcon(false) 
  }

  useEffect(() => {
    // Tab para interactuar entre inputs del form
    const handleKeyDown = (evt) => {
      const key = evt.key
      if (key != 'Tab') {return}

      const element = formRef.current
      let inputIndex = currentInputIndexRef.current

      if (element.contains(document.activeElement)) {
        inputIndex++
      } else {
        inputIndex = 1
      }

      inputIndex > element.children.length - 1 ? inputIndex = 1 : inputIndex

      element.children[inputIndex].focus()
      currentInputIndexRef.current = inputIndex
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      ref={formRef}
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
        onFocus={handleHoverSend}
        onBlur={handleHoverSend}
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