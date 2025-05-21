# FM Agency Website

A modern, high-performance website built for FM Agency, a Sydney-based creative and digital agency. This project showcases both professional web development capabilities and academic software engineering principles.

## About

This website serves as the digital presence for FM Agency while also demonstrating modern web development practices and software engineering concepts learned during my Computer Science studies at UNSW.

### Key Features

- 🚀 Built with Next.js 13+ (App Router)
- 🎨 Modern UI/UX with Tailwind CSS
- ⚡ Optimized performance with 90+ Lighthouse score
- 📱 Fully responsive design
- 🔒 SEO optimized with Next.js metadata
- 📧 Integrated contact form with EmailJS
- 📅 Calendly integration for booking
- 🔄 Smooth animations and transitions
- 🌐 Social media meta tags

### Technologies Used

- **Framework**: Next.js 13+ (React)
- **Styling**: Tailwind CSS
- **Animations**: CSS Animations & Transitions
- **Form Handling**: EmailJS
- **Analytics**: Vercel Analytics
- **Deployment**: Hostinger

## Development

This project was developed as part of my Computer Science journey at UNSW, incorporating software engineering best practices and modern web development techniques.

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fmagency_site.git
   cd fmagency_site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with necessary environment variables:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Project Structure

```
fmagency_site/
├── app/                # Next.js 13 app directory
├── components/         # Reusable React components
├── public/            # Static assets
└── styles/           # Global styles and Tailwind config
```

## EmailJS Integration

The contact form uses EmailJS for handling submissions. To set up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service in your dashboard
3. Set up a template with these parameters:
   - `from_name`: Sender's name
   - `from_email`: Sender's email
   - `subject`: Message subject
   - `message`: Message content

## Academic Context

This project is part of my Computer Science portfolio at UNSW, demonstrating:

- Modern web development practices
- Software architecture principles
- UI/UX design implementation
- Performance optimization
- SEO best practices
- API integration
- Responsive design techniques

## Business Implementation

This website serves as the digital storefront for FM Agency, featuring:

- Professional service offerings
- Portfolio showcase
- Client booking system
- Contact form
- About section
- Service details

## License

This project is part of both my academic portfolio at UNSW and FM Agency's business operations. All rights reserved.

## Contact

For any queries regarding this project:
- 🎓 Academic: [Contact via LinkedIn](https://linkedin.com/in/mahir-ahmedd)
- 💼 Business: hello@fm-agency.net

---
Built with ❤️ by Mahir Ahmed | UNSW Computer Science Student & Co-Founder of FM Agency
