
## 🧠 Complete Notes on React Components, JSX, Babel & Import/Export

---

## 🔹 1. What are Components?

* Components are **reusable parts** of your UI.
* Think of them like **functions** that return a piece of the screen (UI).
* Every React app is built using many components.

👉 **Types:**

* **Functional Component** (most used):

  ```js
  function Welcome() {
    return <h1>Hello!</h1>;
  }
  ```
* **Class Component** (older method):

  ```js
  class Welcome extends React.Component {
    render() {
      return <h1>Hello!</h1>;
    }
  }
  ```

---

## 🔹 2. What is JSX?

* JSX = **JavaScript + XML**
* It lets you write **HTML-like code inside JavaScript**.
* Example:

  ```jsx
  const element = <h1>Welcome!</h1>;
  ```
* **Browsers can’t understand JSX directly**, so we use Babel.

---

## 🔹 3. What is Babel?

* Babel is a **JavaScript compiler**.
* It converts:

  * JSX ➝ JavaScript (`React.createElement`)
  * New JavaScript ➝ Old JavaScript (browser-compatible)
* Helps developers write easy-to-read code without worrying about browser support.

✅ **Example**:

```jsx
const element = <h1>Hello</h1>;
```

⬇️ Babel converts it into:

```js
React.createElement('h1', null, 'Hello');
```

---

## 🔹 4. Import & Export in React

### ✅ Exporting Components

* To use a component in another file, you must export it.
* Two ways:

  * **Default Export** (only one allowed per file):

    ```js
    export default Welcome;
    ```
  * **Named Export** (can export multiple things):

    ```js
    export const Welcome = () => { return <h1>Hello</h1>; };
    ```

### ✅ Importing Components

* Import depends on how you exported:

  * For **default export**:

    ```js
    import Welcome from './Welcome';
    ```
  * For **named export**:

    ```js
    import { Welcome } from './Welcome';
    ```

✅ Always check the path:

* `'./Welcome'` means the file `Welcome.js` is in the **same folder**.

---

## 🔹 5. Folder Structure Tip

Usually, a component is saved in a file with **same name**:

```
/components
  └── Welcome.js
```

Inside `Welcome.js`:

```js
import React from 'react';
function Welcome() {
  return <h1>Hello!</h1>;
}
export default Welcome;
```

Then you can import it into `App.js`:

```js
import Welcome from './components/Welcome';
```

---

## 🔹 6. Recap:

| Concept       | Purpose                                                 |
| ------------- | ------------------------------------------------------- |
| **Component** | Reusable UI block written as a function/class           |
| **JSX**       | HTML inside JavaScript, looks nice but needs conversion |
| **Babel**     | Converts JSX + new JS ➝ browser-understandable code     |
| **Export**    | Makes a component available to other files              |
| **Import**    | Brings a component from another file into current one   |

---

Let me know if you want **practice questions**, **diagrams**, or **examples for nested components** too!
