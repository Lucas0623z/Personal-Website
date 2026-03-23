# Personal Portfolio Website

A minimal bilingual personal portfolio website inspired by macOS code editors, featuring dark/light theme support, language switching, and a refined editor-style interface.

## Features

- **Bilingual Support**: Full English and Chinese (Simplified) translations with browser language detection
- **Dark/Light Mode**: System theme detection with manual toggle
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Editor-Style UI**: macOS code editor aesthetics with window controls and monospace fonts
- **Security-First Contact**: Protected email with copy-to-clipboard, honeypot anti-bot field
- **Real Projects**: Showcase of actual projects with GitHub links
- **Smooth Animations**: Subtle transitions and hover effects throughout

## Tech Stack

- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Vite 6.3.5** - Build tool and dev server
- **CSS Modules** - Scoped component styling
- **PingFang SC / Noto Sans SC** - Primary fonts (cross-platform Chinese support)
- **JetBrains Mono** - Monospace font for code elements
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm, yarn, or pnpm

### Installation

1. Clone this repository:

```bash
git clone https://github.com/Lucas0623z/personal-website.git
cd personal-website
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Build the project:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
personal-website/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ui/                      # Utility components
│   │   │   ├── about-section.tsx
│   │   │   ├── about-section.module.css
│   │   │   ├── contact-section.tsx
│   │   │   ├── contact-section.module.css
│   │   │   ├── footer.tsx
│   │   │   ├── footer.module.css
│   │   │   ├── hero-section.tsx
│   │   │   ├── hero-section.module.css
│   │   │   ├── language-provider.tsx   # i18n translations
│   │   │   ├── navigation.tsx
│   │   │   ├── navigation.module.css
│   │   │   ├── projects-section.tsx
│   │   │   ├── projects-section.module.css
│   │   │   └── theme-provider.tsx      # Dark mode provider
│   │   └── App.tsx
│   ├── styles/
│   │   ├── fonts.css                    # Font imports
│   │   ├── globals.css                  # Global styles
│   │   ├── index.css                    # Main stylesheet
│   │   ├── tailwind.css                 # Tailwind directives
│   │   └── tokens.css                   # Design tokens (CSS variables)
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Customization

### Update Personal Information

All personal information is centralized in the language provider:

**File**: `src/app/components/language-provider.tsx`

Update the `translations` object for both English (`en`) and Chinese (`zh`):

- Name and title
- Bio and description
- Projects (titles, descriptions, tech stacks, links)
- Contact information
- Social media links

### Styling

- **Design Tokens**: `src/styles/tokens.css` - CSS custom properties for colors, spacing, fonts
- **Global Styles**: `src/styles/globals.css` - Base styles and typography
- **Component Styles**: Each component has a corresponding `.module.css` file

### Projects Section

Update your real projects in `src/app/components/projects-section.tsx`:

```typescript
const projects = [
  {
    title: t('project1.title'),
    description: t('project1.desc'),
    tech: ['JavaScript', 'MCP', 'Multi-Agent'],
    github: 'https://github.com/yourusername/project',
    demo: null, // or 'https://demo.com'
  },
  // Add more projects...
];
```

Don't forget to update the translations in `language-provider.tsx`.

## Features in Detail

### Bilingual Support

- Auto-detects browser language (English/Chinese)
- Manual language toggle in navigation
- Persists language preference to localStorage
- All UI text fully translated

### Security Features

- Email address obfuscated at runtime (not in HTML source)
- Copy-to-clipboard for email (no direct mailto: links)
- Honeypot anti-bot field in contact form
- Structure ready for Cloudflare Turnstile integration
- Server-side submission architecture documented

### Design System

- **8px grid system** for consistent spacing
- **CSS custom properties** for easy theme customization
- **macOS-style window controls** (red, yellow, green dots)
- **Editor-style decorators** (HTML tags, comments)
- **Monospace fonts** for code/technical elements

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

MIT License - feel free to use this template for your personal portfolio.

## Contact

- GitHub: [@Lucas0623z](https://github.com/Lucas0623z)
- LinkedIn: [Yuexuan Zhang](https://www.linkedin.com/in/yuexuan-zhang-075883381/)
