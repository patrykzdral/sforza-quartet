# Email Configuration (Contact Form)

The contact form sends real emails via Gmail SMTP. Create a `.env.local` file in the project root:

```
GMAIL_USER=sforzaquartet@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
```

## How to Get Gmail App Password:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** if not already enabled
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Generate a new App Password for "Mail"
5. Copy the 16-character code (no spaces) to `.env.local`
