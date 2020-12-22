import React from "react"
import styles from "../styles/Contact.module.css"



const Contact = () => {

  return (
 <div className={styles.background}>
    <form action="#" method="post" id={styles.contact_form}>
      <div className={styles.name}>
        <label for="name"></label>
        <input type="text" placeholder="My name is" name="name" id={styles.name_input} required />
      </div>
      <div className={styles.email}>
        <label for="email"></label>
        <input type="email" placeholder="My e-mail is" name="email" id={styles.email_input} required/>
      </div>
      <div className={styles.telephone}>
        <label for="name"></label>
        <input type="text" placeholder="My number is" name="telephone" id={styles.telephone_input} required/>
      </div>
      <div className={styles.message}>
        <label for="message"></label>
        <textarea name="message" placeholder="Message" id={styles.message_input} cols="30" rows="5" required></textarea>
      </div>
      <div className={styles.submit}>
        <input type="submit" value="Connect" id={styles.form_button} />
      </div>
    </form>
  </div>
  )
}

export default Contact
