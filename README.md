# Book Management Dashboard

A web application for managing and tracking books, built with **Next.js**, **Prisma**, **PostgreSQL**, and **Zustand**.

## Features

- **Authentication**: Secure login via Google and GitHub using Next Auth.
- **Personalized Recommendations**: Based on your favorite books.
- **Favorites**: Add and view your favorite books.
- **Reading Tracking**: Track total books read and pages read.
- **Advanced Search**: Search by author, genre, title, or subject.
- **Book Details**: View detailed book information, including purchase and download links.

## Technologies

- **Front-end**: Next.js
- **Back-end**: Prisma - PostgreSQL
- **State Management**: Zustand
- **Data Validation**: Zod
- **API**: Google Books API
- **Deployment**: Vercel - Render.com

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
Install dependencies:
```

```bash
npm install
Set up environment variables in .env.local:
```

```bash
DATABASE_URL=your_database_url
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret
```

Run Prisma migrations:

```bash
npx prisma migrate dev
Start the development server:
```

```bash
npm run dev
The app will be available at http://localhost:3000.
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
