# Anurup Bhowmick - Full-Stack Developer Portfolio

A modern, sleek portfolio website showcasing my expertise in full-stack web development with a focus on backend technologies, scalable systems, and performance optimization.

**Live Site**: [Visit Portfolio](https://github.com/aru-codess) (hosted on GitHub Pages)

---

## 👨‍💻 About Me

Full-stack developer with **3+ years of freelance experience** specializing in:
- **Backend Development**: Node.js, Express.js, Java, Python, Flask
- **Frontend Development**: React, TypeScript, Tailwind CSS
- **Mobile Development**: React Native with async storage & Redux
- **Performance**: Redis caching, RabbitMQ message queuing, database optimization
- **Databases**: MongoDB, MySQL with Mongoose & JWT authentication

Currently transitioning to corporate roles while building scalable web & mobile applications.

---

## ✨ Features

- **🎨 Dark/Light Mode**: Seamless theme switching with persistent storage
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Performance Optimized**: Static export for fast loading times
- **🎭 Smooth Animations**: Interactive UI with Framer Motion & Locomotive Scroll
- **3D Interactive Hero**: Spline 3D model showcase on the landing page
- **🔍 SEO Friendly**: Optimized meta tags and structured data
- **📈 Project Showcase**: Carousel display of featured projects
- **💬 Easy Contact**: Direct email integration

---

## 🛠️ Tech Stack

**Frontend:**
- Next.js 14 (React 18)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

**Development Tools:**
- ESLint & Prettier
- PostCSS
- Vanilla Tilt (3D effects)
- Locomotive Scroll (smooth scrolling)

**Deployment:**
- GitHub Pages
- GitHub Actions (CI/CD)

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (v18 or higher)
- pnpm (recommended) or npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/aru-codess/developer-portfolio.git
cd developer-portfolio

# Install dependencies
pnpm install
# or
npm install

# Start development server
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio in development mode.

---

## 📁 Project Structure

```
src/
├── pages/           # Next.js pages
│   ├── index.tsx   # Home page with hero, projects, services
│   └── _app.tsx    # App wrapper & layout
├── components/      # Reusable React components
│   ├── Container.tsx      # Layout wrapper with navigation
│   ├── Footer.tsx         # Footer with social links
│   ├── Preloader.tsx      # Loading animation
│   └── ui/               # UI components (buttons, cards, carousel)
├── styles/         # Global & module styles
│   ├── globals.css        # Theme & CSS variables
│   ├── Home.module.css    # Home page styles
│   └── Container.module.css
└── lib/            # Utilities
    └── utils.ts    # Helper functions

public/
├── assets/         # Images, videos, 3D models
└── fonts/         # Custom fonts
```

---

## 🎯 Customization

### Update Content
Edit `src/pages/index.tsx` to modify:
- About section statistics
- Featured projects
- Services offered
- Contact information

### Change Colors/Theme
Update CSS variables in `src/styles/globals.css`:
```css
:root {
  --primary: 237 99% 74%;      /* Main accent color */
  --secondary: 214.2 98.47% 74.31%;
  /* ... other variables */
}
```

### Modify Components
- **Navigation**: Update `src/components/Container.tsx`
- **Social Links**: Edit `src/components/Footer.tsx`
- **Hero Section**: Customize `src/pages/index.tsx`

---

## 🔨 Build & Deployment

### Build for Production
```bash
pnpm build
# or
npm run build
```
This generates static files in the `out/` directory for GitHub Pages.

### Deploy to GitHub Pages

1. **Configure repository:**
   - Go to Settings → Pages
   - Set Source to "GitHub Actions"

2. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

3. **GitHub Actions will automatically:**
   - Build the Next.js project
   - Export static files
   - Deploy to GitHub Pages
   - Site available at: `https://your-username.github.io/repository-name`

Monitor deployment progress in the **Actions** tab of your repository.

---

## 📝 Scripts

```bash
pnpm dev         # Start development server
pnpm build       # Build for production (static export)
pnpm start       # Start production server
pnpm lint        # Run ESLint
pnpm format      # Format code with Prettier
pnpm type-check  # Check TypeScript types
```

---

## 🔗 Connect With Me

- **Email**: [anurupbhowmick.official@gmail.com](mailto:anurupbhowmick.official@gmail.com)
- **GitHub**: [@aru-codess](https://github.com/aru-codess)
- **LinkedIn**: [Anurup Bhowmick](https://www.linkedin.com/in/anurup-bhowmick/)
- **Twitter**: [@aru_codes](https://x.com/aru_codes)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE.md).

---

**Built with ❤️ using Next.js, TypeScript & Tailwind CSS**
