
# 📘 React `useEffect` Hook – Full Notes

---

## 🧠 What is `useEffect`?

`useEffect` is a **React Hook** that lets you run **side effects** in functional components.
Think of it as a way to tell React: “💬 After rendering this component, do this extra work!”

---

## ❓ Why Use `useEffect`?

### ✅ 1. Side Effects in Functional Components

React's function components don’t have lifecycle methods like:

* `componentDidMount`
* `componentDidUpdate`
* `componentWillUnmount`

So we use `useEffect` to do things like:

* 🛰 Fetch data from an API
* ⏲ Set intervals or timeouts
* 💾 Store or load from localStorage
* 🧹 Clean up resources (like listeners or timers)

---

### ✅ 2. **Control WHEN Code Runs**

The biggest reason to use `useEffect` is that it gives you **control over when a block of code runs** after rendering.

You can choose:

| 🎯 Condition     | ⚡ useEffect Behavior               |
| ---------------- | ---------------------------------- |
| No dependencies  | Runs after every render            |
| `[]` empty array | Runs only once (on mount)          |
| `[state, props]` | Runs when any of the values change |

➡️ **This gives you full control over performance and behavior.**

---

## 🧪 Example: Fetch only when button is clicked

```jsx
const [trigger, setTrigger] = useState(0);
const [data, setData] = useState(null);

useEffect(() => {
  if (trigger === 0) return;

  fetch("https://timeapi.io/api/time/current/zone?timeZone=Asia/Kolkata")
    .then(res => res.json())
    .then(json => setData(json));
}, [trigger]);

<button onClick={() => setTrigger(1)}>Get Time</button>
```

✅ The fetch code **only runs** when `trigger` becomes `1`
✅ `useEffect` gives us **complete control over re-runs**

---

## 📦 Syntax:

```js
useEffect(() => {
  // 🧠 Your logic here (side-effect)
  return () => {
    // 🧹 Optional cleanup logic
  }
}, [dependencies]);
```

---

## 🧹 Cleanup Example

```js
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick ⏱");
  }, 1000);

  return () => {
    clearInterval(timer); // 🧹 Cleanup when unmount or re-run
  };
}, []);
```

---

## ⚠️ Rules of `useEffect`

* ✅ Call at the **top level** of the component
* ✅ Only inside **React function components**
* ✅ You can use **multiple `useEffect`s** per component
* ⚠️ Don’t use `async` directly in `useEffect` (wrap with a function)

---

## 🔁 Can You Use Multiple `useEffect`s?

Yes! React will run them in the order you write them:

```js
useEffect(() => { console.log("Runs on mount") }, []);
useEffect(() => { console.log("Runs when count changes") }, [count]);
```

---

## 📝 Quick Summary Table

| 💡 Goal               | 🧾 Code Example                |
| --------------------- | ------------------------------ |
| Run once on mount     | `useEffect(() => {}, [])`      |
| Run on specific state | `useEffect(() => {}, [count])` |
| Run on every render   | `useEffect(() => {})`          |
| Cleanup on unmount    | `return () => { ... }`         |

---

## 💬 Final Words

`useEffect` is one of the **most powerful hooks** in React.

✅ It bridges the gap between **UI rendering** and **business logic**
✅ It gives you **full control** over **when code runs**
✅ It lets you **keep components clean, reactive, and side-effect safe**
