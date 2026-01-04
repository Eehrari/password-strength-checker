# Password Strength Checker (Week 1 + Week 2)

This mini project is built to **practice and troubleshoot core React concepts** from **Week 1 and Week 2**.

It is intentionally simple, clean, and focused on **fundamentals** — no advanced hooks or external libraries.

---

## Learning Goals

By completing and understanding this project, you should be able to:

- Build React components
- Pass data using **props**
- Reuse components
- Use **composition** with `children`
- Manage state using **useState**
- Handle events (`onClick`, `onChange`)
- Use **controlled inputs**
- Render lists using `.map()`
- Use **keys** correctly
- Apply **conditional rendering**
- Calculate **derived state** (without storing it)
  
---

## What the App Does

- User types a password
- App analyzes password strength in real time
- Strength is shown as **Weak / Medium / Strong**
- A checklist shows which rules are satisfied
- Password can be **shown or hidden**
- All UI updates automatically when state changes

---

## Concepts Used (Where)

### 1. Components
- `App`
- `Card`
- `TextInput`
- `Badge`
- `RuleItem`

Each component has **one responsibility**.

---

### 2. Props
Data flows from parent → child:
- `App → Card`
- `App → TextInput`
- `App → Badge`
- `App → RuleItem`

Example:
```jsx
<Badge label={result.label} />
