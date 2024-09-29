import styles from '@styles/content/03-about/DescriptionFile.module.css'

export function DescriptionFile({ title, children, extension }) {
  return (
    <section className={styles['file-container']}>
      <h1 className={styles['file-container__title']}>{title}</h1>
      <p className={styles['file-container__description']}>{children}</p>
      <footer className={styles['file-container__footer']}>
        <img
        src='/ochux_logo.png'
        height={200}
        className={styles['file-container__footer__reference-image']}
        />
        <span className={styles['file-container__footer__file-name']}>info{extension}</span>
      </footer>
    </section>
  )
}