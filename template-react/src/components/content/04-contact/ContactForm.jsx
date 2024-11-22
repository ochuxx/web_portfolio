import styles from '@styles/content/04-contact/ContactForm.module.css'

export function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Los datos han sido enviados.')
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
        className={styles['form__input']}
      />
      <input
        type='text'
        name='email'
        placeholder='Correo'
        className={styles['form__input']}
      />
      <textarea
        name='message'
        placeholder='Mensaje'
        className={`${styles['form__input']} ${styles['form__textarea']}`}
      ></textarea>

      <input
        type='submit'
        value='Enviar'
        className={`${styles['form__input']} ${styles['form__send']}`}
      />
    </form>
  )
}