import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <Link to="/">
          <StaticImage src="../../images/shared/logo.svg" alt="Logo" />
        </Link>
        <Link className={styles.header__navButton} to="/">
          Pre-Order Now
        </Link>
      </nav>
      <div className={styles.header__hero}>
        <div className={styles.header__heroContent}>
          <h1 className={styles.header__heroContentHeading}>
            Typemaster Keyboard
          </h1>
          <p className={styles.header__heroContentParagraph}>
            Improve your productivity and gaming without breaking the bank.
            Upgrade to a high quality mechanical typing experience.
          </p>
          <div className={styles.header__heroContentCta}>
            <Link className={styles.header__heroContentCtaButton} to="/">
              Pre-Order Now
            </Link>
            <p className={styles.header__heroContentCtaText}>Release on 5/27</p>
          </div>
        </div>
        <div className={styles.header__heroImage}>
          <StaticImage
            src="../../images/mobile/image-keyboard.jpg"
            alt="Typemaster keyboard"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
