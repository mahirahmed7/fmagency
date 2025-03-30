This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Setting Up EmailJS for the Contact Form

The contact form on this site uses EmailJS to handle form submissions. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service (e.g., Gmail, Outlook, etc.) in your EmailJS dashboard
3. Create an email template with the following template parameters:
   - `from_name` - The name of the person submitting the form
   - `from_email` - The email of the person submitting the form
   - `to_name` - Set to "FM Agency" (or your organization name)
   - `to_email` - Set to your receiving email address
   - `subject` - The subject of the message
   - `message` - The message content

4. In the `app/contact/page.tsx` file, replace the placeholder values with your actual EmailJS credentials:
   ```javascript
   const serviceId = 'service_xxxxxx'; // Replace with your service ID
   const templateId = 'template_xxxxxx'; // Replace with your template ID
   const publicKey = 'xxxxxxxxxxxxx'; // Replace with your public key
   ```

5. Test the form to ensure emails are being delivered properly

For more information, refer to the [EmailJS documentation](https://www.emailjs.com/docs/).
