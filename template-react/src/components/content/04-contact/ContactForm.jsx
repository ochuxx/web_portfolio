import { useEffect, useRef, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faHourglassHalf } from '@fortawesome/free-solid-svg-icons'
import { scrollActiveContext } from '@/context/ScrollActiveComponent'
import styles from '@styles/content/04-contact/ContactForm.module.css'
import captchaKey from '@/captchakey.txt?raw' // Info de .txt
import apiUrl from '@/gasurl.txt?raw'
import ReCAPTCHA from 'react-google-recaptcha'
import Swal from 'sweetalert2'

const regexPatternsChange = {
  name: /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑüÜ]*$/,
  email: /^[a-zA-Z0-9@._\-+]*$/,
  message: /^[\p{L}\p{N}\s.,!?¿¡():;"'@#&%\-_/\\[\]{}]*$/u
}
const regexPatternsSubmit = {
  name: /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑüÜ]*$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Ejemplo: user@domain.com
  message: /^[\p{L}\p{N}\s.,!?¿¡():;"'@#&%\-_/\\[\]{}]*$/u
}

export function ContactForm() {
  const { isScrollActive } = useContext(scrollActiveContext) // Evitar mover entre páginas al activar información de términos
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  // Guardar valores anteriores para hacer cambios en tiempo real en validación de campos
  const [formDataBackup, setFormDataBackup] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isShowSendIcon, setIsShowSendIcon] = useState(false)
  const [isShowLoadIcon, setIsShowLoadIcon] = useState(false)
  const formRef = useRef(null)
  const reCaptchaRef = useRef(null)
  const currentInputIndexRef = useRef(6)
  const textareaMessageRef = useRef(null)
  const termsContent = useRef(null)
  const [isTermsChecked, setIsTermsChecked] = useState(false)

  // Enviar data al backend
  const postDataToGAS = (data) => {
    const dataToSend = {...data, terms: isTermsChecked}

    const response = fetch(apiUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: import.meta.env.VITE_SECRET_KEY,
        origin: window.location.origin,
        data: dataToSend
      })
    })
    .then(res => res.text())
    .then(text => {
      setIsShowLoadIcon(false)
      try {
        const resJson = JSON.parse(text)
        console.log("Respuesta parsed.", resJson)
        // En caso de vulnerabilidad
        if ('error' in resJson) {
          Swal.fire({
            title: 'Ha ocurrido un error en el envío de datos',
            text: resJson.error,
            icon: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#cb4335'
          })
          return
        }

        Swal.fire({
          title: 'Los datos han sido enviados',
          icon: 'success',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#27ae60'
        })
        formRef.current.reset()
      } catch (err) {
        Swal.fire({
          title: 'Ha ocurrido un error en el envío de datos',
          icon: 'error',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#cb4335'
        })
        console.log("Error parsing.", err)
      }
    })
    .catch(() => {
      setIsShowLoadIcon(false)
      Swal.fire({
        title: 'Ha ocurrido un error en el servidor',
        icon: 'error',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#cb4335'
      })
    })
    
    setIsShowLoadIcon(true)
    console.log(response)
    return response
  }

  // Evento al enviar formulario
  const handleSubmit = (evt) => {
    evt.preventDefault()
    let isDataValid = true

    Object.keys(formData).forEach(key => {
      if (!regexPatternsSubmit[key].test(formData[key])) {
        Swal.fire({
          title: 'Datos no válidos ❌',
          text: 'Quizás el correo o demás campos están mal escritos.',
          confirmButtonText: 'Entendido',
          confirmButtonColor: '#101010'
        })
        isDataValid = false
        return
      }
    })
    if (!isDataValid) return

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

    postDataToGAS(formData)
    reCaptchaRef.current.reset()
  }

  const handleChange = (e) => {
    const inputName = e.target.name
    const inputValue = e.target.value
    const newData = {...formData, [inputName]: inputValue}

    if (!regexPatternsChange[inputName].test(inputValue)) {
      e.target.value = formDataBackup[inputName]
      return
    }

    setFormData(newData)
    setFormDataBackup(newData)
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
        maxLength={40}
        minLength={2}
        required
        className={styles['form__input']}
        onClick={() => {handleInputClick(1)}}
        onChange={handleChange}
      />
      <input
        type='text'
        name='email'
        placeholder='Correo'
        maxLength={80}
        minLength={4}
        required
        className={styles['form__input']}
        onClick={() => {handleInputClick(2)}}
        onChange={handleChange}
      />
      <textarea
        name='message'
        placeholder='Mensaje'
        maxLength={100}
        minLength={10}
        required
        ref={textareaMessageRef}
        className={`${styles['form__input']} ${styles['form__textarea']}`}
        onClick={() => {handleInputClick(3)}}
        onMouseEnter={handleTextareaMouseEnter}
        onMouseLeave={handleTextareaMouseLeave}
        onChange={handleChange}
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
          onChange={(e) => setIsTermsChecked(e.target.checked)}
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
          sitekey={captchaKey}
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
        disabled={isShowLoadIcon ? true : false}
      >
        {
          isShowSendIcon
          ? <FontAwesomeIcon icon={faPaperPlane} bounce />
          : isShowLoadIcon
            ? <FontAwesomeIcon icon={faHourglassHalf} spin />
            : 'Enviar'
        }
      </button>
    </form>
  )
}