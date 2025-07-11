## 🎬 YOUTUBE CLONE

### 📦 Installation

1. Clone from GitHub  
2. Run the following command:

    ```bash
    npm start
    ```

---

### 🐞 Bugs I Faced and Solutions

#### 1. TailwindCSS Not Supported

- **Issue:** Tailwind wasn't working as expected.
- **Cause:** We're using `create-react-app`, which does **not support Tailwind v4+** well.
- **Solution:** Downgrade to **Tailwind v3.4.1**.
- **Alternative:** Migrate the project to **Vite**, which fully supports Tailwind v4+.

#### 2. Redux `useReducer` Problem

- **Issue:** Error when using `useReducer` with Redux store configuration.
- **Cause:** Exported the default slice and destructured it in `configureStore`, causing incorrect usage.
- **Solution:** Import the slice normally **without destructuring**.

---

### 📌 Project Overview

#### `Header.js`

- **Layout:** Uses `CSS Grid`.
- **Search Feature:**
  - **Debouncing** implemented for better UX and optimized API calls.
  - Debounce delay: `200ms`
  - **Explanation:** Every time the input changes, the previous timeout is cleared. After 200ms of no typing, the search function runs.
- **Caching:** 
  - Search results are cached to avoid redundant API calls and improve performance.
