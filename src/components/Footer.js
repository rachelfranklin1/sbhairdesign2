import React from "react"
import Anilink from "gatsby-plugin-transition-link/AniLink"
import links from "../constants/links"
import styles from "../css/footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        14 Scotney Way, Thrapston, Kettering NN14 4SA
      </div>
      <div className={styles.copyright}>07397878064</div>
    </footer>
  )
}

export default Footer
