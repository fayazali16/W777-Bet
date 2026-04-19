"use server";

export type ContactState = {
  ok?: boolean;
  error?: string;
};

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (name.length < 2) {
    return { error: "Please enter your name (at least 2 characters)." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }
  if (subject.length < 3) {
    return { error: "Please enter a short subject." };
  }
  if (message.length < 20) {
    return { error: "Please enter a message (at least 20 characters)." };
  }

  // Hook for production: Resend, SendGrid, CRM, or ticketing API.
  void { name, email, subject, message };

  return { ok: true };
}
