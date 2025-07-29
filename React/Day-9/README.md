
# ⚛️ React Routing – All-in-One Guide 🧭

Routing helps us switch between pages/components **without refreshing the page** in a React App. It's how we build Single Page Applications (SPA).

---

## 🧱 1. Installing `react-router-dom`

```bash
npm install react-router-dom
```

---

## 🧩 2. Basic Components in React Router

| 🧩 Component      | 🧠 Purpose                             |
| ----------------- | -------------------------------------- |
| `<BrowserRouter>` | Wraps the app and enables routing      |
| `<Routes>`        | Container for all `<Route>`s           |
| `<Route>`         | Defines a path and its component       |
| `<Link>`          | Navigates to other routes (like `<a>`) |

---

## 🏗️ 3. Basic Routing Example

### 🧾 `index.js`

```jsx
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

### 🧾 `App.jsx`

```jsx
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Welcome from './Welcome'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
```

✅ Now navigating to `/Home`, `/About`, `/Contact` will show respective components.

---

## 🔁 4. Programmatic Navigation with `useNavigate()`

### 🧠 What is `useNavigate()`?

A hook that lets you change the route using a function (great for button clicks, form submits, etc.)

### 💻 Example:

```jsx
import { useNavigate } from 'react-router-dom'

function Welcome() {
  const navigate = useNavigate()

  return <button onClick={() => navigate('/Home')}>Go to Home 🏠</button>
}
```

### 🛠️ Extra Options

| 🚀 Action           | 🔍 Code                                            |
| ------------------- | -------------------------------------------------- |
| Navigate to `/Home` | `navigate('/Home')`                                |
| Replace history     | `navigate('/Home', { replace: true })`             |
| Go back             | `navigate(-1)`                                     |
| Pass state          | `navigate('/Home', { state: { name: 'Shivam' } })` |

To read the passed state:

```jsx
import { useLocation } from 'react-router-dom'
const location = useLocation()
console.log(location.state.name)
```

---

## 🧠 5. Other Ways to Structure Routes

### ✅ A. Modular Routing

Create a separate `routes.jsx`:

```jsx
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Welcome from './Welcome'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
```

Then in `App.jsx`:

```jsx
import AppRoutes from './routes'
function App() {
  return <AppRoutes />
}
```

---

### ✅ B. Config-Based Routing with `useRoutes()`

```jsx
import { useRoutes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Welcome from './Welcome'

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Welcome />,
      children: [
        { path: 'Home', element: <Home /> },
        { path: 'About', element: <About /> },
        { path: 'Contact', element: <Contact /> },
      ],
    },
  ])
  return routes
}
```

---

### ✅ C. Lazy Loading Routes (Performance Boost ⚡)

```jsx
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const Contact = lazy(() => import('./Contact'))
const Welcome = lazy(() => import('./Welcome'))

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Welcome />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
```

---

### ✅ D. Protected Routes (Login Required 🔐)

```jsx
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
  const isLoggedIn = true; // your auth logic here
  return isLoggedIn ? children : <Navigate to="/login" />
}

<Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
```

---

## 📚 Summary Table

| 📌 Feature       | ✅ Use When                      |
| ---------------- | ------------------------------- |
| Basic Routing    | For simple apps                 |
| Modular Routes   | Clean code separation           |
| `useRoutes()`    | When using config-based routing |
| Lazy Loading     | Speed up initial load           |
| Protected Routes | Secure pages (like dashboards)  |
| `useNavigate()`  | Navigate via buttons/functions  |

---

✅ You now know:

* 🛣️ How to define routes
* 🎯 How to navigate programmatically
* 🧱 Different routing structures
* ⚡ Advanced techniques like lazy loading and protection
