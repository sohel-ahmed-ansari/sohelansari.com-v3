# Sohel Ahmed Ansari - Portfolio Website

A modern, responsive portfolio website showcasing professional experience, skills, achievements, and personal projects. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations, SEO optimization, and a clean, professional design.

## 🚀 Tech Stack

### Core Technologies

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### Key Libraries

- **framer-motion** - Animation library
- **lucide-react** - Icon library

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript linting
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files

### Prettier Plugins

- **@trivago/prettier-plugin-sort-imports** - Automatic import sorting
- **prettier-plugin-tailwindcss** - Automatic Tailwind class sorting

## 🛠️ Development Setup

### Prerequisites

- **Node.js**
- **pnpm**

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd sohelansari.com-v3
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

The site will be available at `http://localhost:5173`

## 📜 Scripts

### `pnpm dev`

Starts the Vite development server with hot module replacement (HMR).

### `pnpm build`

Builds the production-ready application and outputs to the `dist/` directory

### `pnpm preview`

Preview the production build locally. Useful for testing the built application before deployment.

### `pnpm lint`

Runs ESLint to check for code quality issues and potential bugs.

### `pnpm format:fix`

Formats all files using Prettier with:

- Import sorting (third-party imports first, then local imports)
- Tailwind CSS class sorting (following recommended order)
- Code style consistency

### `pnpm format:check`

Checks if files are properly formatted without making changes. Useful for CI/CD pipelines.

### `pnpm typecheck`

Runs TypeScript compiler to check for type errors without emitting files. Helps catch type issues early.

### Husky & lint-staged

Git hooks are set up to automatically run linting and formatting:

**Pre-commit hook** (via Husky):

- Runs ESLint with auto-fix on staged files
- Runs Prettier formatting on staged files
- Prevents commits if there are linting errors that can't be auto-fixed

This ensures that:

- All committed code follows the project's style guidelines
- Tailwind classes are automatically sorted
- Imports are properly organized
- Code quality is maintained consistently

## 📝 Content Management

The portfolio content is managed through a single JSON file: `src/data/resume.json`

This file contains:

- Personal information
- Work experience
- Skills
- Education
- Achievements
- Personal projects
- Contact information

To update the portfolio, simply edit this JSON file and the changes will be reflected throughout the site.

## 🚀 Deployment

### GitHub Pages (Automatic)

The project is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
