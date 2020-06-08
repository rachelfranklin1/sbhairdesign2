import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"
import { emailStrings } from "./ContactStrings"

const EmailContact = () => {
  return (
    <section>
      <Title title="Contact the salon" />
      <div>
        <div>Sarah Bavaro Hair Design</div>
        <div>14 Scotney Way, Thrapston, Kettering, NN14 4SA</div>
        <div>sbhairdesign1@gmail.com</div>
        <div>0739878064</div>
        <div>Follow me!!</div>
        <div>
          <a
            target="_blank"
            title="follow me on facebook"
            href="https://www.facebook.com/sbhairdesignandbeauty/"
          >
            <img
              alt="follow me on facebook"
              src="https://c866088.ssl.cf3.rackcdn.com/assets/facebook30x30.png"
              border={0}
            />
          </a>
          <a
            target="_blank"
            title="follow me on instagram"
            href="https://www.instagram.com/sbhairdesignn/"
          >
            <img
              alt="follow me on instagram"
              src="https://c866088.ssl.cf3.rackcdn.com/assets/instagram30x30.png"
              border={0}
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default EmailContact
