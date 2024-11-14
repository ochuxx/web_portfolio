export function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Los datos han sido enviados.')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contáctame</h2>

      <input
        type='text'
        name='name'
        placeholder='Nombre / Empresa'
      />
      <input
        type='text'
        name='email'
        placeholder='Correo'
      />
      <textarea
        name='message'
        placeholder='Mensaje'
      ></textarea>

      <input type='submit' value='Enviar'/>
    </form>
  )
}