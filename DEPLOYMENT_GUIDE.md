# Deployment Guide - Aaryavista Landing Page

## Quick Deploy to Netlify (Recommended - Emails will work automatically!)

### Step 1: Build the Project
```bash
npm run build
```

### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Drag and drop the `dist` folder to Netlify
3. Your site will be live immediately!

### Step 3: Configure Email Notifications
1. In your Netlify dashboard, go to **Site Settings** > **Forms**
2. Set up **Form Notifications** to send emails to `aaryavista@gmail.com`
3. Add this email address in the notification settings

**That's it! Emails will now be sent to aaryavista@gmail.com automatically.**

---

## Alternative: Deploy to Vercel

### Step 1: Build the Project
```bash
npm run build
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Import your project or drag the `dist` folder
3. Deploy!

**Note:** For Vercel, you'll need to set up a backend service for emails (like Formspree or EmailJS).

---

## Email Setup Options

### Option 1: Netlify Forms (Easiest - Already configured!)
- ✅ **Already set up in the code**
- ✅ **Works automatically when deployed to Netlify**
- ✅ **Free tier includes 100 submissions/month**
- ✅ **Emails sent directly to aaryavista@gmail.com**

### Option 2: Formspree (Works on any platform)
1. Go to [formspree.io](https://formspree.io)
2. Create account and get form endpoint
3. Update the form action in `Contact.tsx`

### Option 3: EmailJS (More complex setup)
1. Follow instructions in `EMAILJS_SETUP.md`
2. Requires EmailJS account configuration

---

## Current Status

✅ **Contact form is ready**  
✅ **Netlify Forms integration complete**  
✅ **Success/error messages working**  
⏳ **Needs deployment to Netlify for emails to work**

## Test the Form

1. Deploy to Netlify
2. Fill out the contact form on your live site
3. Check aaryavista@gmail.com for the email
4. Also check Netlify dashboard > Forms for submissions

## Custom Domain (Optional)

After deployment, you can:
1. Buy a domain (like aaryavista.com)
2. Connect it in Netlify settings
3. Get free SSL certificate automatically

---

**The form is configured and ready - it just needs to be deployed to Netlify for the emails to start working!** 🚀