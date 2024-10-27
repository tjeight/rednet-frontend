# Next Essential

Next Essential - An Essential Template to get started with Next.js application with all the essentials included...

## Features

- ✨ Framework: [Next.js](https://nextjs.org/) - React-based framework for building web applications
- 🚀 Styling: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- 💻 Language: [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- 🧹 Linting and Formatting: [Biome.js](https://biomejs.dev/) - Fast and customizable linter and formatter
- 🎨 Themes: [Next Themes](https://github.com/pacocoursey/next-themes) - Easy theme management for Next.js
- 💄 Icons: [Lucide-React](https://lucide.dev/) - Beautiful open-source icons
- ⚙️ Build: Github Actions - Automated workflows for CI/CD
- 🛠 Commit: [Husky](https://typicode.github.io/husky/) - Git hooks made easy
- 📦 Package: [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

## Project Structure

- `ui/`: Contains all reusable components and primitives
- `app/`: Houses all routes and pages
- `lib/`: Includes helpers, utilities, and configuration files
- `public/`: Static assets and images
- `styles/`: Global styles and theme configuration and independent styles for layout.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install` or `pnpm install` or `yarn install`
3. Run the development server: `npm run dev` or `pnpm run dev` or `yarn run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Guidelines

- Keep components and primitives in the `ui/` folder
- Place all routes and pages in the `app/` folder
- Store helpers, utilities, and configs in the `lib/` folder
- Follow the TypeScript and Biome.js linting rules
- Use Husky pre-commit hooks to ensure code quality

## Customization

- Modify the theme in `tailwind.config.js`
- Adjust global styles in `app/globals.css`
- Configure Next.js settings in `next.config.js`

## Contributing

Contributions are always welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

For major changes, please open an issue first to discuss what you would like to change.
