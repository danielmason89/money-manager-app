import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form className={styles.form}>
        <label>
          <span>Your Email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your Message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
