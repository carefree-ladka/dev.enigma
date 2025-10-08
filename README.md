# DevEnigma - Fullstack Developer Preparation Hub

This comprehensive learning resource for fullstack developers is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## About DevEnigma

DevEnigma is a complete fullstack development preparation platform covering everything you need to excel in fullstack roles. The platform includes comprehensive guides, tutorials, and interview preparation materials for:

**Frontend Technologies:**
- HTML5 & CSS3
- JavaScript & TypeScript
- React.js

**Backend Technologies:**
- Java
- Spring Boot
- RESTful APIs

**Database & Data Management:**
- SQL
- Database Design

**Computer Science Fundamentals:**
- Data Structures & Algorithms (DSA)
- System Design
- Problem Solving

**Interview Preparation:**
- Technical Interview Questions
- Coding Challenges
- Fullstack Role Preparation

Visit the live documentation at: https://carefree-ladka.github.io/dev.enigma/docs/intro

## Development Setup

### Installation

```bash
$ yarn
```

### Local Development

```bash
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The documentation is automatically deployed to GitHub Pages. For manual deployment:

Using SSH:

```bash
$ USE_SSH=true yarn deploy
```

Not using SSH:

```bash
$ GIT_USER=carefree-ladka yarn deploy
```

This command builds the website and pushes to the `gh-pages` branch, which is then served at https://carefree-ladka.github.io/dev.enigma/

## Features

- **Comprehensive Coverage**: End-to-end fullstack development topics
- **Interview Ready**: Curated interview questions and preparation materials
- **Hands-on Examples**: Practical code examples and implementations
- **DSA Practice**: Data structures and algorithms with solutions
- **Technology Deep Dives**: In-depth coverage of each technology stack
- **Career Focused**: Specifically designed for fullstack role preparation

## Contributing

We welcome contributions to help make JS Enigma an even better resource for fullstack developers!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/add-react-hooks-guide`)
3. Add your content (tutorials, interview questions, code examples)
4. Commit your changes (`git commit -m 'Add React Hooks comprehensive guide'`)
5. Push to the branch (`git push origin feature/add-react-hooks-guide`)
6. Open a Pull Request

### Content Guidelines
- Keep explanations clear and beginner-friendly
- Include practical code examples
- Add interview questions where relevant
- Ensure content is up-to-date with current industry standards

## Links

- **Live Platform**: https://carefree-ladka.github.io/dev.enigma/docs/intro
- **GitHub Repository**: https://github.com/carefree-ladka/dev.enigma
- **Docusaurus Documentation**: https://docusaurus.io/

## License

This project is open source and available under the [MIT License](LICENSE).
