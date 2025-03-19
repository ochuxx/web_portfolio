import { useEffect, useRef, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { scrollActiveContext } from '@/context/ScrollActiveComponent'
import styles from '@styles/content/04-contact/ContactForm.module.css'
import ReCAPTCHA from 'react-google-recaptcha'
import Swal from 'sweetalert2'

export function ContactForm() {
  const { isScrollActive } = useContext(scrollActiveContext) // Evitar mover entre páginas al activar términos
  const [isShowSendIcon, setIsShowSendIcon] = useState(false)
  const formRef = useRef(null)
  const reCaptchaRef = useRef(null)
  const currentInputIndexRef = useRef(6)
  const textareaMessageRef = useRef(null)
  const termsContent = useRef(null)

  // Evento al enviar formulario
  const handleSubmit = (evt) => {
    evt.preventDefault()

    // Verificación de recaptcha
    const token = reCaptchaRef.current.getValue()
    if (!token) {
      Swal.fire({
        title: 'El CAPTCHA es obligatorio.',
        text: 'Por favor, vuelve a intentarlo.',
        icon: 'warning',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#0d727a'
      })
      return
    }

    formRef.current.reset()
    reCaptchaRef.current.reset()
    alert('Los datos han sido enviados.')
  }

  // Evento de animación para el botón "Enviar"
  const handleHoverSend = (evt) => {
    evt.type == 'mouseenter' || evt.type == 'focus'
    ? setIsShowSendIcon(true)
    : setIsShowSendIcon(false)
  }

  // Evento para cambiar de formRef en click
  const handleInputClick = (newInputRef) => {
    currentInputIndexRef.current = newInputRef
  }

  // Evento de visualización de términos y condiciones
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

  // Evento para scroll de textarea
  const handleTextareaMouseEnter = () => {
    const element = textareaMessageRef.current
    const hasScroll =
      element.scrollHeight > element.clientHeight &&
      (element.scrollTop > 0 || element.scrollTop + element.clientHeight < element.scrollHeight)
    isScrollActive.current = hasScroll
  }

  // Evento para salir del scroll de textarea
  const handleTextareaMouseLeave = () => {
    isScrollActive.current = false
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
      let isCombinationActive = evt.shiftKey

      // Condiciones para verificar hacia que input del form desplazar
      if (isCombinationActive && element.contains(document.activeElement)) {
        inputIndex == 6 ? inputIndex = 4 : inputIndex --

      } else if (!isCombinationActive && element.contains(document.activeElement)) {
        inputIndex == 4 ? inputIndex = 6 : inputIndex ++

      } else if (!element.contains(document.activeElement)) {
        inputIndex = 1
      }

      inputIndex > element.children.length - 1 ? inputIndex = 1 : inputIndex
      inputIndex < 1 ? inputIndex = 6 : inputIndex
      element.children[inputIndex].focus()

      if (inputIndex == 4) {
        element.children[inputIndex].firstChild.focus()
      }

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
        onClick={() => {handleInputClick(1)}}
      />
      <input
        type='text'
        name='email'
        placeholder='Correo'
        required
        className={styles['form__input']}
        onClick={() => {handleInputClick(2)}}
      />
      <textarea
        name='message'
        placeholder='Mensaje'
        maxLength={100}
        required
        ref={textareaMessageRef}
        className={`${styles['form__input']} ${styles['form__textarea']}`}
        onClick={() => {handleInputClick(3)}}
        onMouseEnter={handleTextareaMouseEnter}
        onMouseLeave={handleTextareaMouseLeave}
        ></textarea>
      
      <div
        className={`${styles['form__input']} ${styles['form__checkbox']}`}
      >
        <input
          type='checkbox'
          name='terms'
          required
          className={`${styles['form__checkbox__input']}`}
          onClick={() => {handleInputClick(4)}}
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

      <div
        className={`${styles['form__input']} ${styles['form__captcha']}`}
      >
        <ReCAPTCHA
          className={`${styles['form__captcha__input']}`}
          sitekey='6LchHe0qAAAAAGxMVPww7-TaeUMV022hTMy_T-b0'
          ref={reCaptchaRef}
        />
      </div>

      <button
        type='submit'
        onClick={() => {handleInputClick(5)}}
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