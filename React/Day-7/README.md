* Controlled vs Uncontrolled Components
* Code examples
* Advantages
* Use cases

---

````markdown
# 📘 React Form Handling – Notes

## 📋 What Are Forms in React?

Forms are used to collect user input in React just like in HTML.
But instead of directly accessing form values, React provides **two ways** to handle input:

---

## 🔹 Controlled Components

### ✅ Definition:
- Inputs are **controlled by React state** using `useState`.
- The `value` of the input is set using state.
- Input changes are handled using `onChange`.

### 🧠 Code Example:
```jsx
import React, { useState } from 'react';

function ControlledForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
````

### ✅ Features:

* Full control over input.
* Can validate or transform data in real time.
* State updates on each keystroke.

---

## 🔸 Uncontrolled Components

### ✅ Definition:

* Inputs are **not controlled by state**.
* Use `useRef()` to get the value when needed.
* React doesn’t track input changes.

### 🧠 Code Example:

```jsx
import React, { useRef } from 'react';

function UncontrolledForm() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Enter Email" ref={emailRef} />
      <input type="password" placeholder="Enter Password" ref={passwordRef} />
      <button type="submit">Login</button>
    </form>
  );
}
```

### ✅ Features:

* Simple and fast for small forms.
* Fewer re-renders.
* Suitable when you only need input values once (e.g. on submit).

---

## 🔄 Controlled vs Uncontrolled

| Feature                | Controlled               | Uncontrolled             |
| ---------------------- | ------------------------ | ------------------------ |
| Input Managed By       | React state (`useState`) | DOM (`useRef`)           |
| Real-Time Value Access | ✅ Yes                    | ❌ No (only on submit)    |
| Ideal For              | Validations, large forms | Simple quick input reads |
| Re-renders on Typing   | ✅ Yes                    | ❌ No                     |

---

## 📝 Summary

* Use **controlled components** when you need real-time control and validation.
* Use **uncontrolled components** when you want quick access to input values without managing state.
* Both methods work well depending on your use case.
