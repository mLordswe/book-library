# Book Library 📚

A modern web application for searching, tracking, and managing your favorite books, built with React, TypeScript, and Vite.

---

## 🚀 Tech Stack

-   **React 19** – UI library
-   **TypeScript** – Type safety
-   **Vite** – Fast build tool and dev server
-   **React Router v7** – Routing
-   **@tanstack/react-query** – Data fetching and caching
-   **Sass** – Styling
-   **Open Library API** – Book data source

---

## 📦 Installation

1. **Clone the repository**

    ```sh
    git clone https://github.com/your-username/book-library.git
    cd book-library
    ```

2. **Install dependencies**

    ```sh
    npm install
    ```

3. **Start the development server**

    ```sh
    npm run dev
    ```

4. **Open your browser**
    - Visit [http://localhost:5173](http://localhost:5173)

---

## 📁 Folder Structure

```
src/
│
├── app.tsx                # App entry with providers
├── main.tsx               # ReactDOM render
├── index.scss             # Global styles
├── Routes.tsx             # App routes
│
├── components/            # All UI components
│   ├── BookCard/
│   ├── Booksearch/
│   ├── FavoriteButton/
│   ├── FavoritList/
│   ├── Header/
│   ├── LoadingIcon/
│   ├── Modal/
│   ├── NavBar/
│   └── SearchResult/
│
├── Layout/                # Layout components
│   └── RootLayout.tsx
│
├── Pages/                 # Page components
│   ├── HomePage/
│   ├── LibraryPage/
│   ├── NotFoundPage/
│   └── ProfilePage/
│
├── services/              # Business logic & data
│   ├── context/           # React context providers
│   ├── helper/            # Utility functions
│   ├── hooks/             # Custom React hooks
│   └── types.ts           # TypeScript types
│
└── vite-env.d.ts          # Vite environment types
```

---

## ℹ️ General Information

-   **Search for books** using the Open Library API.
-   **View book details** in a modal, including cover, description, and publisher.
-   **Track your reading progress** (pages read) and add personal notes for each book.
-   **Favorite books** and manage your personal library.
-   **Responsive design** for desktop and mobile.

---

## 📝 License

MIT License

---

**Happy reading!**
