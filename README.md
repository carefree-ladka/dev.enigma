# DevEnigma 🚀

[![Live Site](https://img.shields.io/badge/Live-Site-blue)](https://carefree-ladka.github.io/dev.enigma/)
[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-green.svg)](https://docusaurus.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A comprehensive developer platform featuring technical documentation, interview experiences, blog posts, and portfolio — all in one place.

**🌐 Live Platform:** [https://carefree-ladka.github.io/dev.enigma/](https://carefree-ladka.github.io/dev.enigma/)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Content Areas](#content-areas)
- [Contributing](#contributing)
- [Deployment](#deployment)
- [License](#license)
- [Connect](#connect)

---

## 🎯 About

**DevEnigma** is a modern developer platform built with Docusaurus that serves as a comprehensive resource for software engineers. Whether you're preparing for technical interviews, looking for in-depth tutorials, or want to learn from real interview experiences, DevEnigma has you covered.

The platform combines:
- 📚 **Technical Documentation** - Deep dives into frontend, backend, and CS fundamentals
- 💼 **Portfolio** - Showcase of projects and professional work
- ✍️ **Technical Blog** - Articles on React, JavaScript, system design, and more
- 🎤 **Interview Experiences** - Real interview experiences from top tech companies
- 🧩 **DSA Resources** - Data structures, algorithms, and problem-solving guides

---

## ✨ Features

### 📖 Learning Resources
- **Comprehensive Documentation**: Structured guides covering fullstack development
- **Hands-on Examples**: Practical code snippets and implementations
- **Interview Prep**: Curated questions for technical interviews
- **DSA Practice**: Data structures and algorithms with detailed explanations

### 💻 Content Hub
- **Technical Blog**: In-depth articles on modern web technologies
- **Interview Experiences**: First-hand accounts of interview processes at major companies
- **Portfolio Showcase**: Projects, skills, and professional experience
- **Code Examples**: Real-world implementations and best practices

### 🎨 Modern Experience
- **Dark/Light Mode**: Seamless theme switching
- **Responsive Design**: Perfect experience on all devices
- **Fast Performance**: Optimized static site generation
- **Search Functionality**: Quick access to any content
- **Syntax Highlighting**: Beautiful code presentation

---

## 🛠️ Tech Stack

### Core
- **[Docusaurus 3.6.3](https://docusaurus.io/)** - Modern static site generator
- **[React 18.3.1](https://react.dev/)** - UI framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI
- **CSS Modules** - Scoped styling
- **MDX** - Enhanced Markdown with React components
- **Prism** - Syntax highlighting

### Deployment
- **GitHub Pages** - Hosting platform
- **GitHub Actions** - CI/CD pipeline

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **Yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/carefree-ladka/dev.enigma.git
   cd dev.enigma
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn start
   ```

   The site will open at `http://localhost:3000`. Most changes reflect live without restarting the server.

### Available Commands

| Command | Description |
|---------|-------------|
| `yarn start` | Start development server |
| `yarn build` | Build production-ready static files |
| `yarn serve` | Serve the production build locally |
| `yarn clear` | Clear Docusaurus cache |
| `yarn deploy` | Deploy to GitHub Pages |
| `yarn typecheck` | Run TypeScript type checking |

---

## 📁 Project Structure

```
dev.enigma/
├── blog/                      # Blog posts (MDX)
│   ├── authors.yml           # Blog authors configuration
│   └── *.mdx                 # Individual blog posts
├── docs/                      # Documentation (MDX)
│   ├── frontend/             # Frontend guides
│   ├── backend/              # Backend guides
│   ├── dsa/                  # Data Structures & Algorithms
│   └── system-design/        # System design resources
├── interviews/                # Interview experiences (MDX)
│   └── salesforce/           # Company-specific interviews
├── src/
│   ├── components/           # React components
│   ├── css/                  # Global styles
│   └── pages/                # Custom pages (Portfolio, etc.)
├── static/
│   ├── img/                  # Images and assets
│   └── files/                # Downloadable files
├── docusaurus.config.ts      # Docusaurus configuration
├── sidebars.ts               # Sidebar configuration
└── package.json              # Dependencies and scripts
```

---

## 📚 Content Areas

### 1. **Technical Documentation** (`/docs`)

Comprehensive guides covering:

#### Frontend Development
- HTML5 & CSS3 fundamentals
- JavaScript ES6+ features
- TypeScript advanced patterns
- React.js (Hooks, Context, Performance)
- State management solutions

#### Backend Development
- Java programming
- Spring Boot framework
- RESTful API design
- Authentication & Authorization
- Database integration

#### Computer Science Fundamentals
- Data Structures (Arrays, Trees, Graphs, etc.)
- Algorithms (Sorting, Searching, Dynamic Programming)
- Time & Space Complexity Analysis
- Problem-solving strategies

#### System Design
- Scalability patterns
- Database design
- Microservices architecture
- Caching strategies
- Load balancing

### 2. **Technical Blog** (`/blog`)

Articles on:
- React Server Components deep dive
- Modern JavaScript patterns
- Performance optimization
- Web development best practices
- Career growth tips

### 3. **Interview Experiences** (`/interviews`)

Real interview experiences from companies like:
- Salesforce
- And more coming soon...

Each experience includes:
- Complete interview rounds breakdown
- Questions asked (DSA, System Design, Frontend)
- Difficulty ratings
- Tips and preparation advice
- Final outcomes

### 4. **Portfolio** (`/portfolio`)

Professional showcase featuring:
- Featured projects
- Technical skills
- Work experience
- Contact information

---

## 🤝 Contributing

Contributions are welcome! Help make DevEnigma better for everyone.

### How to Contribute

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/dev.enigma.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/add-new-content
   ```

3. **Make your changes**
   - Add new documentation
   - Write blog posts
   - Share interview experiences
   - Fix bugs or typos
   - Improve existing content

4. **Commit your changes**
   ```bash
   git commit -m "Add: Comprehensive guide on React Hooks"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/add-new-content
   ```

6. **Open a Pull Request**

### Content Guidelines

- ✅ **Clear & Concise**: Write for beginners and experts alike
- ✅ **Code Examples**: Include practical, working code snippets
- ✅ **Proper Formatting**: Use MDX features for better presentation
- ✅ **Attribution**: Credit sources and inspirations
- ✅ **Up-to-date**: Ensure content reflects current best practices
- ✅ **Proofread**: Check for grammar and technical accuracy

### Types of Contributions

- 📝 **Documentation**: Add or improve technical guides
- ✍️ **Blog Posts**: Share knowledge and experiences
- 🎤 **Interview Experiences**: Help others prepare better
- 🐛 **Bug Fixes**: Report or fix issues
- 💡 **Feature Requests**: Suggest improvements
- 🎨 **Design**: Enhance UI/UX

---

## 🚢 Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on every push to the `main` branch.

### Manual Deployment

#### Using SSH:
```bash
USE_SSH=true yarn deploy
```

#### Using HTTPS:
```bash
GIT_USER=carefree-ladka yarn deploy
```

The deployment process:
1. Builds the static site (`yarn build`)
2. Pushes to `gh-pages` branch
3. Automatically serves at `https://carefree-ladka.github.io/dev.enigma/`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

```
MIT License

Copyright (c) 2024 Pawan Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 🔗 Connect

**Pawan Kumar**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kumpawan/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/carefree-ladka)
[![Portfolio](https://img.shields.io/badge/Portfolio-255E63?style=for-the-badge&logo=About.me&logoColor=white)](https://carefree-ladka.github.io/dev.enigma/)

---

## 🙏 Acknowledgments

- Built with [Docusaurus](https://docusaurus.io/) by Meta Open Source
- Inspired by the developer community's spirit of sharing knowledge
- Thanks to all contributors who help make this platform better

---

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/carefree-ladka/dev.enigma?style=social)
![GitHub forks](https://img.shields.io/github/forks/carefree-ladka/dev.enigma?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/carefree-ladka/dev.enigma?style=social)

---

<div align="center">

**[Documentation](https://carefree-ladka.github.io/dev.enigma/docs/intro)** •
**[Blog](https://carefree-ladka.github.io/dev.enigma/blog)** •
**[Interview Experiences](https://carefree-ladka.github.io/dev.enigma/interviews)** •
**[Portfolio](https://carefree-ladka.github.io/dev.enigma/portfolio)**

Made with ❤️ by [Pawan Kumar](https://github.com/carefree-ladka)

</div>
