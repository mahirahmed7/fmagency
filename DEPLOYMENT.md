# Deploying FM Agency Website to Hostinger

This guide provides step-by-step instructions for deploying your Next.js website to Hostinger.

## Prerequisites

- A Hostinger account with a purchased hosting plan
- Domain name configured (fm-agency.net)
- Node.js installed on your local machine
- Access to your project repository

## Build Your Next.js Application

Before deploying to Hostinger, you need to build your Next.js application:

1. Open your terminal and navigate to your project directory:
   ```bash
   cd /path/to/fmagency_site
   ```

2. Install dependencies (if not already done):
   ```bash
   npm install
   ```

3. Build your project:
   ```bash
   npm run build
   ```

This will create an optimized production build in the `.next` directory.

## Deploy to Hostinger

Hostinger supports Node.js applications. Here's how to deploy your Next.js site:

### Method 1: Using Hostinger Git Integration

1. Log in to your Hostinger control panel
2. Navigate to "Website" > "Hosting" > "Your Hosting Plan"
3. Go to "Auto Installer" > "Git" and set up the integration with your repository
4. Configure the deployment settings:
   - Repository URL: Your GitHub/GitLab repository URL
   - Branch: main (or your preferred branch)
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Root Directory: Leave empty if your code is in the root

### Method 2: Manual Deployment

1. Set up an FTP connection to your Hostinger account:
   - Get FTP credentials from Hostinger control panel
   - Use an FTP client like FileZilla to connect

2. Prepare your project for production:
   ```bash
   # Create a production-ready package
   npm run build
   ```

3. Upload the following files/directories to your Hostinger server:
   - `.next` directory
   - `public` directory
   - `package.json`
   - `package-lock.json` (or `yarn.lock`)
   - `next.config.mjs`

4. Connect to your Hostinger server via SSH (if available on your plan)

5. Navigate to your website directory and install dependencies:
   ```bash
   npm install --production
   ```

6. Set up environment variables on Hostinger:
   - Go to your Hostinger control panel
   - Navigate to the "Website" section
   - Find "Environment Variables" or ".env" configuration
   - Add necessary environment variables (same as in your .env.local file)

7. Configure the server to run Node.js:
   - In Hostinger control panel, go to "Website" > "Node.js"
   - Enable Node.js support
   - Set entry point to: `node_modules/.bin/next start`
   - Set Node.js version to 18.x or higher

## Important Next.js Production Considerations

1. **Environment Variables**: Make sure all required environment variables are set in Hostinger's environment configuration.

2. **EmailJS Configuration**: Your EmailJS settings are already client-side and will work in production. Make sure the service IDs and templates are properly set up.

3. **Static Assets**: All assets in the `public` directory will be served correctly.

4. **Images**: Next.js Image Optimization works in production. Your configuration for image sizes in `next.config.mjs` is already set up properly.

## Custom Domain Configuration

1. In your Hostinger control panel, go to "Domains" > "Your Domain"
2. Make sure DNS settings point to your Hostinger hosting
3. Set up SSL certificate (FREE with Hostinger):
   - Go to "SSL" section in your hosting control panel
   - Enable "SSL" for your domain

## After Deployment

1. Test your live website thoroughly
2. Verify all forms and functionality work correctly
3. Check mobile responsiveness on various devices
4. Monitor for any errors in Hostinger's logs

## Troubleshooting

If you encounter issues:

1. Check Hostinger's Node.js logs for errors
2. Verify all environment variables are set correctly
3. Ensure your Node.js version is compatible (Next.js 15 needs Node.js 18.17 or later)
4. Contact Hostinger support if you encounter hosting-specific issues 