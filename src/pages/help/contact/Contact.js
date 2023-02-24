import { Form, redirect, useActionData } from "react-router-dom";
import styles from "./contact.module.css";

export const contactAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };

  if (submission.message.length < 10) {
    return { error: "Message is not long enough." };
  }

  return redirect("/");
};

export default function Contact() {
  const data = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact" className={styles.form}>
        <label>
          <span>Your Email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your Message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
}
