"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactState } from "./actions";

const initial: ContactState = {};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initial);

  if (state.ok) {
    return (
      <div className="form-success" role="status">
        <p>
          <strong>Message sent.</strong> Thank you—we have received your message. This demo does not
          email a mailbox; connect <code>sendContactMessage</code> in{" "}
          <code>app/contact/actions.ts</code> to your provider in production.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" action={formAction}>
      <div className="form-row">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          className="form-input"
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          disabled={pending}
        />
      </div>
      <div className="form-row">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          className="form-input"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          disabled={pending}
        />
      </div>
      <div className="form-row">
        <label className="form-label" htmlFor="subject">
          Subject
        </label>
        <input
          className="form-input"
          id="subject"
          name="subject"
          type="text"
          required
          minLength={3}
          disabled={pending}
        />
      </div>
      <div className="form-row">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea
          className="form-textarea"
          id="message"
          name="message"
          rows={6}
          required
          minLength={20}
          disabled={pending}
        />
      </div>
      {state.error ? (
        <p className="form-error" role="alert">
          {state.error}
        </p>
      ) : null}
      <button type="submit" className="btn btn-primary" disabled={pending}>
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
