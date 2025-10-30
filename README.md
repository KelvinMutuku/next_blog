# Full-Stack Next.js Blog

A complete blog application built with Next.js 15 (App Router), Server Actions, and MongoDB. This project includes full user authentication, session management, and complete CRUD (Create, Read, Update, Delete) functionality for posts.

**Live Demo:** [**https://next-blog-ten-alpha.vercel.app/**](https://next-blog-ten-alpha.vercel.app/)

## Features

  * **User Authentication**: Secure user registration and login.
  * **Session Management**: Uses encrypted, httpOnly JWTs (via `jose`) stored in cookies.
  * **Protected Routes**: Middleware (`src/middleware.js`) protects user-specific pages like the dashboard and post creation pages.
  * **Blog Post CRUD**: Logged-in users can create, read, update, and delete their own posts.
  * **Personal Dashboard**: A user dashboard (`/dashboard`) lists all posts created by the logged-in user with quick links to edit or delete them.
  * **Server-Side Validation**: Uses `zod` to validate all form submissions (register, login, post) on the server.
  * **Modern Form Handling**: Uses the React `useActionState` hook for handling form state and validation errors.
  * **Server-First**: Built almost entirely with Server Components and Server Actions, minimizing client-side JavaScript.

## Tech Stack

  * **Framework**: [Next.js 15](https://nextjs.org/) (using the App Router)
  * **Database**: [MongoDB](https://www.mongodb.com/) (connected directly via the `mongodb` driver)
  * **Authentication**: [jose](https://github.com/panva/jose) (for JWTs) and [bcrypt](https://www.google.com/search?q=https://github.com/kelektiv/node.bcrypt.js) (for password hashing)
  * **Validation**: [Zod](https://zod.dev/)
  * **Styling**: [Tailwind CSS](https://tailwindcss.com/)
  * **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

To run this project locally, you will need to have Node.js and a MongoDB database (a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster is perfect for this).

### 1\. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2\. Install dependencies

```bash
npm install
```

### 3\. Set up environment variables

Create a file named `.env.local` in the root of your project and add the following variables.

```
# Get this connection string from your MongoDB Atlas cluster
DB_URI="mongodb+srv://..."

# A strong, 32-character random string for signing JWTs
# You can generate one at: https://www.lastpass.com/features/password-generator
SESSION_SECRET="your_strong_random_secret_here"
```

### 4\. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

## Deployment

This project is built to be deployed on [Vercel](https://vercel.com/new).

When deploying, make sure to set the **Root Directory** to point to the folder containing your `package.json` file and add the `DB_URI` and `SESSION_SECRET` as Environment Variables in the Vercel project settings.

## Author

  * **Kelvin Mutuku**
