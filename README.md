Project Name: ### Dev Stack

## 📝 Description

Dev Stack is a modern React and TypeScript web application that helps developers explore, compare, and build their ideal technology stack.


## 🛠️ Technologies Used

- **React.js**
- **TypeScript**
- **Tailwind CSS**
- **Vite**
- **React Icons**
- **JSON**
- **Git & GitHub**


## ✨ Features

- 🔍 Explore and discover popular technologies
- 🧩 Build your own personalized tech stack
- 📱 Responsive and modern user interface

  

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript.  
It makes React components easier to write and understand.

---

### 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.  
**State** is data managed inside a component that can change over time.

---

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets us create and update state in a React component.  
I used it to manage the selected technologies in the user's stack.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders.  
I used it to load the technology JSON data when the page loads.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.  
It helps React efficiently update the correct item when the list changes.

---

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it in the stack panel:

```tsx
{selectedTechnologies.length > 0 ? (
    <SelectedStack />
) : (
    <p>No Technologies Selected Yet</p>
)}
```

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using **props**. The child can send data back to the parent by calling a **callback function** passed through props.

```tsx
<TechnologyCard
    technology={technology}
    handleAddToStack={handleAddToStack}
/>

