## App Component Documentation 

### Table of Contents

- [Introduction](#introduction)
- [Imports](#imports)
- [App Component](#app-component)
  - [Props](#props)
  - [Logic](#logic)
  - [Render](#render)

### Introduction

This component defines the primary application structure using React Router DOM for navigation and handles user authentication to determine which routes are accessible.

### Imports

| Import | Description |
|---|---|
| `React` |  The fundamental React library. |
| `BrowserRouter as Router, Routes, Route, Navigate` |  Components from React Router DOM for routing and navigation. |
| `Home, Browse, SignIn, SignUp` |  Components representing different pages within the application. |
| `ROUTES` |  Constants defining route paths. |
| `useAuthListener` | A custom hook for managing user authentication state. |

### App Component

#### Props

None.

#### Logic

1.  **User Authentication:** The `useAuthListener` hook is invoked to retrieve the current user object (`user`).

#### Render

The component renders a `Router` component that provides routing functionality:

| Route Path | Element | Description |
|---|---|---|
| `ROUTES.SIGN_IN` | `!user ? <SignIn /> : <Navigate to={ROUTES.BROWSE} />` |  Displays the `SignIn` component if the user is not authenticated, otherwise redirects to the `BROWSE` route. |
| `ROUTES.SIGN_UP` | `!user ? <SignUp /> : <Navigate to={ROUTES.BROWSE} />` | Displays the `SignUp` component if the user is not authenticated, otherwise redirects to the `BROWSE` route. |
| `ROUTES.BROWSE` | `user ? <Browse /> : <Navigate to={ROUTES.SIGN_IN} />` | Displays the `Browse` component if the user is authenticated, otherwise redirects to the `SIGN_IN` route. |
| `ROUTES.HOME` | `!user ? <Home /> : <Navigate to={ROUTES.BROWSE} />` | Displays the `Home` component if the user is not authenticated, otherwise redirects to the `BROWSE` route. | 

**Note:** The `Navigate` component is used to redirect the user to a different route based on their authentication status.
