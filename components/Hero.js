import Image from 'next/image'
import styles from '../styles/Hero.module.css'

const Hero = ({
  header,
  content,
  buttonLink,
  buttonContent,
  src,
  height,
  width,
  alt,
  ...props
}) => (
  <>
    <div className={styles.heroContainer}>
      <div className={styles.image}>
        <Image {...props} src={src} height={height} width={width} alt={alt} />
      </div>
      <div className={styles.content}>
        <h1>{header}</h1>
        <p>{content}</p>

        <button>
          <a href={buttonLink} target="_blank">
            {buttonContent}
          </a>
        </button>
      </div>
    </div>
  </>
)

export default Hero