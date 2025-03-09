import { useEffect, useRef, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { scrollActiveContext } from '@/context/ScrollActiveComponent'
import styles from '@styles/content/04-contact/ContactForm.module.css'
import ReCAPTCHA from 'react-google-recaptcha'
import Swal from 'sweetalert2'

export function ContactForm() {
  const { isScrollActive } = useContext(scrollActiveContext) // Evitar mover entre páginas del sitio al activar la alerta Swal
  const [isShowSendIcon, setIsShowSendIcon] = useState(false)
  const formRef = useRef(null)
  const currentInputIndexRef = useRef(1)
  const reCaptchaValue = useRef(null)
  const termsContent = useRef(null)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(reCaptchaValue.current.getValue()) // Verificar que hacer con el empty string
    alert('Los datos han sido enviados.')
  }

  const handleHoverSend = (evt) => {
    evt.type == 'mouseenter' || evt.type == 'focus'
    ? setIsShowSendIcon(true)
    : setIsShowSendIcon(false)
  }

  const handleReCaptchaChange = () => {
    console.log(reCaptchaValue.current.getValue())
  }

  const watchTermsAndConditions = () => {
    Swal.fire({
      title: 'Términos y Condiciones',
      html: termsContent.current,
      icon: 'info',
      iconColor: '#0d727a',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#0d727a',
    })
    .then(() => {
      isScrollActive.current = false
    })

    isScrollActive.current = true
  }

  useEffect(() => {
    // Cargar mensaje del archivo con términos y condiciones
    fetch('/termsMessage.txt')
      .then(response => response.text())
      .then(text => {
        termsContent.current = text
      })

    // Tab para interactuar entre inputs del form
    const handleKeyDown = (evt) => {
      const key = evt.key
      if (key != 'Tab') {return}

      const element = formRef.current
      let inputIndex = currentInputIndexRef.current

      if (element.contains(document.activeElement)) {
        inputIndex == 3 ? inputIndex = 6 : inputIndex ++
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
      
      <div
        className={`${styles['form__input']} ${styles['form__checkbox']}`}
      >
        <input
          type='checkbox'
          className={`${styles['form__checkbox__input']}`}
        />
        <span
          className={`${styles['form__checkbox__description']}`}
        >
          Acepto los&nbsp;
          <b
            className={`${styles['form__checkbox__description__link']}`}
            onClick={watchTermsAndConditions}
          >
            términos y condiciones
          </b>
        </span>
      </div>

      <ReCAPTCHA
        className={`${styles['form__input']} ${styles['form__captcha']}`}
        sitekey='token'
        onChange={handleReCaptchaChange}
        ref={reCaptchaValue}
      />

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