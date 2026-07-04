"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const business = String(formData.get("business") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email and message." };
  }

  if (!emailPattern.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // TODO: wire this up to a real email/CRM provider (e.g. Resend, Formspree)
  // before going live. For now this validates input and confirms receipt.
  console.log("New Elevate Marketing enquiry:", { name, email, business, message });

  return {
    status: "success",
    message: "Thanks, your message is in. We'll be in touch within one business day.",
  };
}
