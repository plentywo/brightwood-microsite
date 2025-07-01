# Brightwood Health - Marketing Website

A modern, responsive single-page website for Brightwood Health built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional healthcare-focused design
- **Responsive**: Fully responsive across all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **Accessible**: WCAG compliant with proper semantic HTML
- **HubSpot Integration**: Ready for HubSpot form integration
- **SEO Optimized**: Meta tags and structured data included
- **Interactive Components**: Smooth testimonials slider with Swiper

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Forms**: HubSpot Forms integration
- **Sliders**: Swiper for interactive testimonials

## 📋 Prerequisites

- **Node.js**: 18.17 or later (Node 22 recommended)
- **npm**: 9.0 or later

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd brightwoodhealth-master
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### HubSpot Form Integration

To integrate your HubSpot form:

1. **Get your HubSpot credentials**:
   - Portal ID: Found in your HubSpot account settings
   - Form ID: Found in your HubSpot forms section

2. **Update the form component**:
   ```tsx
   // In app/page.tsx, update these values:
   <HubSpotForm
     portalId="YOUR_ACTUAL_PORTAL_ID"  // Replace with your portal ID
     formId="YOUR_ACTUAL_FORM_ID"      // Replace with your form ID
     className="w-full"
   />
   ```

3. **Alternative: Use custom form**:
   - Comment out the HubSpot form
   - Uncomment the custom form in the contact section

### Environment Variables

Create a `.env.local` file for any environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=info@brightwoodhealth.com
NEXT_PUBLIC_CONTACT_PHONE=(555) 123-4567
```

## 📁 Project Structure

```
brightwoodhealth-master/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── ui/               # UI components (Button, Card, etc.)
│   ├── landing/          # Landing page sections
│   └── HubSpotForm.tsx   # HubSpot form integration
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities
├── public/               # Static assets
├── netlify.toml          # Netlify deployment configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Colors and Branding

Update the color scheme in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      gold: '#C6A664',
      black: '#1B1B1B',
      navy: '#2C2F4A',
      lightgray: '#C8C6BA',
      offwhite: '#F8F5F0',
    }
  }
}
```

### Content Updates

- **Hero Section**: Update in `components/landing/HeroSection/HeroSection.tsx`
- **Services**: Modify the services arrays in respective section components
- **Contact Information**: Update in `components/landing/CallToActionSection/CallToActionSection.tsx`
- **Footer**: Update in `components/landing/FooterSection/FooterSection.tsx`

## 🚀 Deployment

### Netlify (Recommended)

1. **Push your code** to GitHub/GitLab/Bitbucket
2. **Connect to Netlify**:
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your repository
3. **Build settings** (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: `22`
4. **Deploy**: Click "Deploy site"

### Vercel

1. **Connect your repository** to Vercel
2. **Deploy automatically** on push to master branch
3. **Set environment variables** in Vercel dashboard

### Other Platforms

The site can be deployed to any platform that supports Next.js static export:

```bash
npm run build
# Serve the 'out' directory
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO

The site includes:
- Meta tags for title, description, and keywords
- Open Graph tags for social sharing
- Structured data markup
- Semantic HTML structure
- Fast loading times

## 🛡️ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators

## 📞 Support

For questions or support:
- Email: info@brightwoodhealth.com
- Phone: (555) 123-4567

## 📄 License

This project is proprietary to Brightwood Health.

---

**Built with ❤️ for better healthcare experiences**
