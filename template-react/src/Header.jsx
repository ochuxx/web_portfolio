import AnimatedTitle from './headerExtra/AnimatedTitle.jsx'
import './Header.css'

function Masthead() {
  return (
    <section>
      <img
        src='/ochux_logo.png'
        alt='Logo'
        style={{width: '5rem'}}/>
      <aside>
        <h2>
          Ochux <AnimatedTitle />
        </h2>
      </aside>
    </section>
  )
}

function Header() {
  return (
    <>
      <Masthead />
    </>
  )
}

export default Header