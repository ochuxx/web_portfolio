import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

export function DescriptionFile() {
  return (
    <>
      <section>
        <FontAwesomeIcon icon={faFile}/>
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa adipisci quod exercitationem nobis recusandae unde pariatur nemo maxime. Expedita autem, quo molestiae quasi unde repudiandae dolor suscipit vel nihil?</p>
        <footer>
          <img src='/ochux_logo.png' height={200} />
          <span>info.something</span>
        </footer>
      </section>
    </>
  )
}