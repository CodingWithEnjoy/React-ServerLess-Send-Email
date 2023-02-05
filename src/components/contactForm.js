import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3608ixj",
        "send-email-react",
        form.current,
        "fjHPoIswlgJ3TY9ai"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div class="form__group field">
        <input
          required
          placeholder="Subject"
          class="form__field"
          type="input"
          name="subject"
        />
        <label class="form__label" for="Subject">
          Subject
        </label>
      </div>
      <div class="form__group field">
        <input
          required
          placeholder="Name"
          class="form__field"
          type="input"
          name="name"
        />
        <label class="form__label" for="Name">
          Name
        </label>
      </div>
      <div class="form__group field">
        <input
          required
          placeholder="Email"
          class="form__field"
          type="email"
          name="email"
        />
        <label class="form__label" for="Email">
          Email
        </label>
      </div>
      <div class="form__group field">
        <textarea
          required
          placeholder="Subject"
          class="form__field"
          type="input"
          name="message"
        />
        <label class="form__label" for="Message">
          Message
        </label>
      </div>
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;