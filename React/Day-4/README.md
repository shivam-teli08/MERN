# 📘 **React Hooks – Detailed Notes**

---

## 🔹 What are React Hooks? 🧩

* **Hooks** are special functions in React that let you **"hook into" React features** in functional components.
* Before Hooks, features like state and lifecycle were only possible in **class components**.
* Introduced in **React 16.8**.

✅ **With Hooks**, you can now:

* Use **state**
* Handle **side effects**
* Manage **refs**
* And more... inside **functional components**!

---

## 🧠 Why Hooks?

* Makes code **shorter**, **cleaner**, and **easier to manage**
* Avoids complexity of classes (`this`, constructor, etc.)
* Promotes **reusable logic** via custom hooks

---

## 🔧 Commonly Used Hooks

| Hook           | Purpose                                  |
| -------------- | ---------------------------------------- |
| `useState()`   | To create and manage state               |
| `useEffect()`  | To handle side effects (like API calls)  |
| `useContext()` | To access context data                   |
| `useRef()`     | To refer to DOM elements or store values |
| `useReducer()` | For complex state logic                  |

---

# 🌟 `useState` Hook – In Depth

---

## 💡 What is `useState`?

* `useState` lets you **add state to functional components**.
* Before this, only class components had state!

---

### 📦 Syntax:

```js
const [stateVariable, setStateFunction] = useState(initialValue);
```

| Term               | Description                                              |
| ------------------ | -------------------------------------------------------- |
| `stateVariable`    | A variable to store your state value (e.g., count, text) |
| `setStateFunction` | A function used to update the state                      |
| `initialValue`     | The starting value of the state                          |

---

### ✅ Example 1: Counter

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>➕ Increase</button>
    </div>
  );
}
```

🧠 **Explanation**:

* `useState(0)` sets `count = 0` initially.
* `setCount()` updates the value of `count`.
* Every time you click the button, `count` increases and the component **re-renders**!

---

## 🔁 How useState Works Internally

1. When the component runs first, `useState(0)` initializes `count` as `0`.
2. When `setCount()` is called:

   * React **updates the value**.
   * React **re-renders the component**.
   * New UI is shown with updated value.

🛠 **React remembers state** between renders.

---

## 💥 Updating State – Few Rules

1. **Do not update state directly** ❌

   ```js
   count = count + 1; // ❌ Wrong
   ```

   ✔️ Use:

   ```js
   setCount(count + 1);
   ```

2. **Every state update causes a re-render**

3. **You can use any data type as state**:

   * Numbers: `useState(0)`
   * Strings: `useState("Hello")`
   * Arrays: `useState([])`
   * Objects: `useState({ name: "", age: 0 })`

---

## ✨ Example 2: Text Input

```jsx
function NameForm() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name} 👋</p>
    </div>
  );
}
```

✅ As you type in the box:

* `onChange` captures new value
* `setName()` updates the state
* React re-renders with new name

---

## 🧠 Real Life Analogy

Imagine you're filling a form:

* Your current name in the form = `stateVariable`
* You edit your name = `setStateFunction`
* As you type, React keeps refreshing the form with updated info.

---

## ⚠️ Rules of Hooks

🚫 Hooks **must be called at the top level**, not inside loops, conditions, or nested functions.

✅ Correct:

```js
function App() {
  const [name, setName] = useState('');
}
```

❌ Wrong:

```js
if (condition) {
  const [name, setName] = useState(''); // ❌ not allowed
}
```

---

## 📌 Summary – useState Hook

| Feature            | Description                                           |
| ------------------ | ----------------------------------------------------- |
| ✅ Purpose          | Add state in functional components                    |
| 🔧 Syntax          | `[value, setValue] = useState(initialValue)`          |
| 🔄 Updates trigger | Component re-render                                   |
| 📥 Accepts         | Any data type (number, string, object, array)         |
| ⚠️ Rules           | Call at top level only, never inside conditions/loops |

---

## 🧪 Bonus: Updating Object State Safely

```js
const [user, setUser] = useState({ name: '', age: 0 });

// Update name only
setUser(prev => ({ ...prev, name: 'John' }));
```

✔️ Always use `...prev` to **preserve existing values** when updating part of an object!