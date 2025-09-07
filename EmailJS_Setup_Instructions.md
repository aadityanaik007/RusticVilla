# EmailJS Setup Instructions for Rustic Farm Villa

## 🔧 Follow these steps to enable email functionality:

### Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com
2. Sign up for a free account using aadityasnaik007@gmail.com
3. Verify your email address

### Step 2: Create Email Service

1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email provider
4. Connect your Gmail account (aadityasnaik007@gmail.com)
5. **Copy the Service ID** (it will look like: service_xyz123)

### Step 3: Create Email Template

1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Set Template Name: "Booking Request"
4. Copy and paste this template content:

```
Subject: New Booking Request - Rustic Farm Villa

Hello,

You have received a new booking request from your website:

Guest Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}

Booking Details:
- Check-in Date: {{check_in}}
- Check-out Date: {{check_out}}
- Number of Guests: {{guests}}

Special Requests/Message:
{{message}}

Please respond to the guest as soon as possible at {{from_email}}

Best regards,
Rustic Farm Villa Website
```

5. **Copy the Template ID** (it will look like: template_abc456)

### Step 4: Get Public Key

1. Go to "Account" → "General" in EmailJS dashboard
2. **Copy your Public Key** (it will look like: your_public_key)

### Step 5: Update the Code

1. Open: `src/components/ContactUs/ContactUs.jsx`
2. Find this section around line 35:

```javascript
await emailjs.send(
  "service_xyz123", // Replace with your Service ID
  "template_abc456", // Replace with your Template ID
  templateParams,
  "your_public_key" // Replace with your Public Key
);
```

3. Replace the placeholder values:
   - Replace `'service_xyz123'` with your actual Service ID
   - Replace `'template_abc456'` with your actual Template ID
   - Replace `'your_public_key'` with your actual Public Key

### Example:

```javascript
await emailjs.send(
  "service_1a2b3c4",
  "template_5d6e7f8",
  templateParams,
  "user_9g8h7i6j5k4l3m2"
);
```

## ✅ Testing

1. Save the file after making changes
2. Go to your contact page
3. Fill out the form and submit
4. Check your email (aadityasnaik007@gmail.com) for the booking request

## 📧 Free Tier Limits

- EmailJS free plan includes 200 emails per month
- Perfect for a villa booking website
- No credit card required for free tier

## 🆘 Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- If you encounter issues, check the browser console for error messages

---

**Note:** Keep your EmailJS keys secure and never share them publicly!
