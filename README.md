# Node Hex Boilerplate

A powerful boilerplate for quickly setting up RESTful APIs using Node.js, Express, Prisma ORM, and TypeScript. This project adheres to clean architecture, clean code principles, and SOLID design principles.

## Features

- 🚀 Fast setup for RESTful APIs
- 🧱 Clean Architecture
- 🧼 Clean Code principles
- 🔧 SOLID design principles
- 🔒 TypeScript for type safety
- 🚂 Express.js for routing
- 🗄️ Prisma ORM for database operations
- 🔄 Easy to extend and maintain

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or later)
- npm (v6 or later)
- Git

## Quick Start

To create a new project using this boilerplate, run the following command:

```bash
npx create-node-hex my-api
```

Replace `my-api` with your desired project name.

## Project Structure

The generated project follows a clean architecture structure:

```
my-api/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── application/
│   │   └── use-cases/
│   ├── config/
│   ├── domain/
│   │   ├── entities/
│   │   └── repositories/
│   ├── infrastructure/
│   │   ├── DI/
│   │   ├── filters/
│   │   ├── http/
│   │   │   ├── controllers/
│   │   │   └── routes/
│   │   ├── middlewares/
│   │   └── repositories/
├── .env
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── Dockerfile
├── .dockerignore
├── .prettierrc
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express.js](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)

## Support

If you have any questions or need help, please open an issue in the GitHub repository.

Happy coding! 🚀

```

This updated README incorporates the new project structure and includes the additional files like Dockerfile, .dockerignore, and .prettierrc. It also updates the default port to 4000 and keeps all the other relevant information from the original README.
```
