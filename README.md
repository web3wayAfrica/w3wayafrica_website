# 🌍 Web3WayAfrica

Web3WayAfrica is a modern, production-ready website built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). It features a fast, SEO-friendly blog, image optimization, dark mode, and easy customization. This project aims to provide a robust platform for sharing content and resources about Web3 in Africa.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

---

## Features

- 🚀 Fast and SEO-friendly website
- 🌓 Dark mode and RTL support
- 📝 Blog with categories, tags, and RSS feed
- 📷 Image optimization
- 🗺️ Sitemap and Open Graph tags
- 📊 Analytics integration
- 🛠️ Easy customization with Astro and Tailwind CSS

---

## Project Structure

```
/
├── public/
│   ├── _headers
│   ├── robots.txt
│   ├── decapcms/
│   │   ├── config.yml
│   │   └── index.html
│   └── videos/
│       └── Ethiopia_summary.mp4
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   ├── images/
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/
│   │   ├── blog/
│   │   ├── common/
│   │   ├── ui/
│   │   ├── widgets/
│   │   ├── CustomStyles.astro
│   │   ├── Favicons.astro
│   │   └── Logo.astro
│   ├── content/
│   │   └── config.ts
│   ├── layouts/
│   │   ├── LandingLayout.astro
│   │   ├── Layout.astro
│   │   ├── MarkdownLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── pricing.astro
│   │   └── services.astro
│   ├── utils/
│   │   ├── blog.ts
│   │   ├── directories.ts
│   │   ├── frontmatter.ts
│   │   ├── images-optimization.ts
│   │   ├── images.ts
│   │   ├── permalinks.ts
│   │   └── utils.ts
│   ├── config.yaml
│   ├── env.d.ts
│   ├── navigation.ts
│   └── types.d.ts
├── vendor/
│   ├── README.md
│   └── integration/
│       ├── index.ts
│       ├── types.d.ts
│       └── utils/
│           ├── configBuilder.ts
│           └── loadConfig.ts
├── nginx/
│   └── nginx.conf
├── package.json
├── package-lock.json
├── astro.config.ts
├── tailwind.config.js
├── tsconfig.json
├── Dockerfile
├── docker-compose.yml
├── netlify.toml
├── vercel.json
├── sandbox.config.json
├── LICENSE.md
├── .gitignore
└── vscode.tailwind.json
```

---

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. **Build for production:**
   ```sh
   npm run build
   ```
4. **Preview the build:**
   ```sh
   npm run preview
   ```

---

## Configuration

Main configuration is in `src/config.yaml`.  
Update site name, URL, SEO metadata, theme, and blog settings as needed.

---

## Customization

- **Styles:** Edit `src/assets/styles/tailwind.css` for custom styles.
- **Components:** Modify or add Astro components in `src/components/`.
- **Content:** Add blog posts and pages in `src/content/` and `src/pages/`.

---

## Deployment

- **Manual:**  
  Build the site and deploy the `dist` folder to your preferred hosting.

- **Netlify:**  
  Use `netlify.toml` for configuration.

- **Vercel:**  
  Use `vercel.json` for configuration.

- **Docker:**  
  Use `Dockerfile` and `docker-compose.yml
