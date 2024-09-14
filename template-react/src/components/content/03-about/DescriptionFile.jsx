<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

export function DescriptionFile({ title, children, extension }) {
  return (
    <section>
      <FontAwesomeIcon icon={faFile}/>
      <h1>{title}</h1>
      <p>{children}</p>
      <footer>
        <img src='/ochux_logo.png' height={200} />
        <span>info{extension}</span>
      </footer>
    </section>
  )
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

export function DescriptionFile({ title, children, extension }) {
  return (
    <section>
      <FontAwesomeIcon icon={faFile}/>
      <h1>{title}</h1>
      <p>{children}</p>
      <footer>
        <img src='/ochux_logo.png' height={200} />
        <span>info{extension}</span>
      </footer>
    </section>
  )
>>>>>>> 2847d45 (.gitignore añadido)
}