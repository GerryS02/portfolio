## Plan: Wire up contact form with EmailJS

**Install package**
- `bun add @emailjs/browser`

**Update `src/components/portfolio/Contact.tsx`**
- Convert the form into a controlled React component with `useState` for `name`, `email`, `message`, and a `sending` status.
- Add an `onSubmit` handler that calls `emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY })` with template params `from_name`, `from_email`, `message`, `reply_to`.
- Constants at the top of the file:
  - `SERVICE_ID = "service_tptggv3"`
  - `TEMPLATE_ID = "template_jjut80t"`
  - `PUBLIC_KEY = "8u2nfM-MHxfJP4fJr"`
  (EmailJS public key is safe to expose client-side.)
- Wire inputs to state, add `required` attributes, change the button to `type="submit"` and disable it while sending. Show "Sending…" / "Send Message" label.
- On success: toast success via `sonner`, reset the form. On error: toast error.

**Template variable note for the user**
- Their EmailJS template must reference `{{from_name}}`, `{{from_email}}`, and `{{message}}`, and the "To Email" should be set to their Outlook address in the EmailJS dashboard.

No other files are touched.
