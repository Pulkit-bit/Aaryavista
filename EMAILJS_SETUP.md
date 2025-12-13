# EmailJS Setup Instructions

The contact form is currently set up to simulate email sending. To enable actual email delivery to aaryavista@gmail.com, follow these steps:

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (aaryavista@gmail.com)
5. Note down the **Service ID**

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission - Aaryavista

Hello,

You have received a new contact form submission from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from the Aaryavista website contact form.
```

4. Note down the **Template ID**

## 4. Get Public Key

1. Go to "Account" > "General"
2. Find your **Public Key**

## 5. Update the Code

1. Open `src/services/emailService.ts`
2. Replace the commented section with your EmailJS credentials:

```typescript
import emailjs from '@emailjs/browser';

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    message: formData.message,
    to_email: 'aaryavista@gmail.com'
  };

  await emailjs.send(
    'YOUR_SERVICE_ID',      // Replace with your Service ID
    'YOUR_TEMPLATE_ID',     // Replace with your Template ID
    templateParams,
    'YOUR_PUBLIC_KEY'       // Replace with your Public Key
  );
};
```

## 6. Test the Form

1. Build and deploy your website
2. Fill out the contact form
3. Check aaryavista@gmail.com for the email

## Alternative: Netlify Forms

If you deploy to Netlify, you can also use Netlify Forms (simpler setup):

1. Add `netlify` attribute to the form in `Contact.tsx`
2. Add a hidden input with `name="form-name" value="contact"`
3. Netlify will automatically handle form submissions

## Current Status

- ✅ Contact form UI is complete
- ✅ Form validation is working
- ✅ Success/error messages are implemented
- ⏳ Email delivery needs EmailJS configuration (instructions above)

The form currently logs submissions to the browser console for testing purposes.