# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



Welcome to my Netflix Clone: FLICKZONE

This project's Dependencies:

        dependencies = {
                'firebase': '7.19.1',
                'fuse.js': '6.4.1',
                'normalize.css': '8.0.1',
                'react': '16.13.1'
                'react-dom': '16.13.1',
                'react-router-dom': '5.2.0',
                'react-scripts': '3.4.3',
                'styled-components': '5.1.1'
}

FIRST STEP:
Running the command:

        npm create react-app FLICKZONE

The command npm create react-app flickzone is used to create a new React application named FLICKZONE.

Here’s a breakdown of what it does:

        npm: This is the Node Package Manager, which is used to manage JavaScript packages.

        create react-app: This is a command provided by the Create React App tool, which sets up a new React project
with a sensible default configuration.

        FLICKZONE: This is the name of the new React application you are creating.

When you run this command, it does the following:
                                     Sets Up Project Structure: It creates a new directory named FLICKZONE
and sets up the initial project structure inside it.

        Installs Dependencies: It installs all the necessary dependencies for a React application,
such as React, ReactDOM, and other build tools.

        Configures Development Environment: It configures the development environment with tools like Webpack and Babel,
so you don’t have to worry about setting them up manually.

        Creates Starter Files: It generates starter files like index.html, App.js, index.js, and others to get you started quickly.

After running the command, you can navigate to the new project directory and start the development server
with the following commands:

        cd FLICKZONE

        npm start



SECOND STEP:

        Cleaning up the files.


THIRD STEP:
        Add dependencies: styled-components, react-router-dom, firebase, normalize.css, fuse.js


                npm add styled-components
                npm add firebase

                npm add react-router-dom

                npm add fuse.js

                npm add normalize.css

WHY I NEED STYLED COMPONENTS AND FIREBASE:

Styled-Components

        This is a popular library for React that allows you to write CSS directly within your JavaScript or TypeScript code.

        Instead of writing traditional CSS in separate `.css` files,
        you can use styled-components to create "styled" React components.

        Key Benefits:
        - Scoped Styles:Styles are scoped to the component, avoiding the risk of global CSS conflicts.

        - Dynamic Styling: You can apply styles conditionally based on component props.

        - Cleaner Code: Keeps your styling and logic in the same place, making it easier to manage and maintain.

        
        Example:

        import styled from 'styled-components';

        const Button = styled.button`
                background-color: blue;
                color: white;
                font-size: 16px;
                padding: 10px;
                border: none;
                border-radius: 5px;
        `;

        export default Button;


        In the above example, `Button` is a React component with styles defined directly within it.

Why Its Needed:

        Styled-components are ideal for creating a polished, consistent design across your application.
        For a project like FlickZone, which involves a user interface with various components
        (like buttons, cards, navigation bars), styled-components can help maintain a cohesive design system.


FIREBASE
        This is a platform developed by Google that provides various tools for building and managing web and mobile applications.
        It includes a wide range of services, but the most relevant ones for FlickZone project include :

        - Firebase Authentication:Provides an easy way to implement user authentication, including email/password, Google, Facebook,
        and other OAuth providers.
        - Firebase Firestore: A NoSQL database that allows you to store and sync data in real-time.
        - Firebase Hosting: A fast, secure, and free hosting service for your web app.
        - Firebase Storage: For storing user-generated content, such as images and videos.

        Why It Is Needed:

        For FlickZone, Firebase can be very useful, especially for including features like user registration,
        content management, and real-time updates.
        Firebase Authentication can handle user sign-ups and logins, while Firestore can manage user data and app content.
        Firebase Hosting and Storage can help deploy and manage your app’s static assets and media files.

        Using Firebase significantly speeds up development, as it handles many backend tasks
        that would otherwise require building a custom server.

WHY I NEEDED FUSE.JS

        Fuse.js is a lightweight JavaScript library for fuzzy searching.
        Fuzzy search is a technique used to find strings that are approximately equal to a given pattern,
        even if they don't match exactly.
        This is particularly useful when implementing search functionality in an application
        where you want to provide users with results that are relevant even if they make typos or use slightly different terms.

        Key Features of Fuse.js:
        - Fuzzy Matching: It finds results that match the search query even if there are typos or partial matches.
        - Weighting: You can assign different weights to different fields in your data,
        making certain fields more important in the search results.
        - Search Across Multiple Keys: You can search through an array of objects based on
        multiple keys (properties) of the objects.
        - Customizable: Fuse.js is highly customizable, allowing you to tweak how it searches and what kind of results it returns.

Example Use Case:
        Building a search feature for FlickZone where users can search for movies, shows, or actors,
        so with Fuse.js, I can ensure that even if users misspell a title or only remember part of a name,
        they still get relevant search results.

        import Fuse from 'fuse.js';

        const movies = [
        { title: "The Matrix", director: "Wachowski" },
        { title: "Inception", director: "Nolan" },
        { title: "Interstellar", director: "Nolan" }
        ];

        const options = {
        keys: ['title', 'director']
        };

        const fuse = new Fuse(movies, options);

        So searching  for a movie:

        const result = fuse.search("Nolan");


console.log(result);


        In this example, searching for "Nolan" will return both "Inception" and "Interstellar"
        because both movies are directed by Christopher Nolan.

        Fuse.js is perfect for implementing a flexible, user-friendly search experience in FlickZone.
        Since it allows users to search for content, Fuse.js can enhance the search experience by handling misspellings,
        partial matches, and providing relevant results quickly.

WHY I NEED REACT ROUTER DOM:
        React Router DOM is a popular library for routing in React applications.
        It allows developers to create dynamic and multi-page applications by mapping URLs to specific components.
        With React Router DOM, developers can create complex routing configurations
        that make it easy for users to navigate their applications.


STEP FOUR:

        Creating a jumbotron and faqs files: (json files)
                In FlickZone, a Jumbotron on the homepage serves as a visually striking introduction to the platform,
                instantly communicating the value proposition to new users and guiding them towards the next step,
                like signing up or exploring content.



        Our components file is index.js.
        How to access it:
                flickzone -> src -> components -> jumbotron -> index.js
                                                                                                                             

STEP FIVE: 
	Building footer

STEP SIX:
	Building accordion and opt in bar


STEP SEVEN:
	Building Header and Feature.

STEP EIGHT:
 	Linking App to Firebase

STEP NINE:
	Building the SignIn Page, Firebase authentication.

STEP TEN:
	Building the Sign Up Page and Adding a test user in Firebase database


NOTES ON FIREBASE:
===================
Firebase primarily functions as a backend-as-a-service (BaaS). It provides various backend services that developers can use without having to manage servers or write complex backend code. Some of the key services Firebase offers include:

1. Authentication: Firebase Authentication provides an easy way to authenticate users using email/password, social media accounts (like Google, Facebook, etc.), or custom authentication systems.

2. Realtime Database: A NoSQL cloud database that allows you to store and sync data between your users in real-time.

3. Firestore: A flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform. It supports real-time data syncing.

4. Cloud Storage: Firebase Cloud Storage is used to store and serve user-generated content, such as photos and videos.

5. Hosting: Firebase Hosting provides fast and secure static web hosting for your web app, static content, and more.

6. Cloud Functions: Firebase Cloud Functions allow you to write backend code that automatically runs in response to events triggered by Firebase features and HTTPS requests.

7. Analytics, Crashlytics, and Performance Monitoring: These tools help you understand your users, track crashes, and monitor the performance of your app.

Frontend and Backend Roles
- Frontend: Your frontend code (React, Angular, etc.) interacts with Firebase services directly through Firebase SDKs. For example, in a React app, you can use Firebase's JavaScript SDK to authenticate users, read/write data to the Firestore database, and more.
  
- Backend: Firebase handles all the server-side work for you. This includes database management, user authentication, serverless functions, file storage, etc. With Firebase, you often don't need to write traditional backend code or manage servers.

In summary, Firebase allows you to focus more on building the frontend of your application while it takes care of the backend services.


The purpose and functionality of the custom hook `useAuthListener` to help clarify what it achieves in the application:
---------------------------------------------------------
---------------------------------------------------------

What is `useAuthListener`?
`useAuthListener` is a custom React hook that manages the authentication state of your user. It listens to Firebase Authentication for any changes in the user's sign-in state (i.e., whether the user is logged in or logged out) and updates your React application accordingly.

How `useAuthListener` Works:

1. Initial User State:
   - The hook initializes a `user` state using `useState`, which holds the current user's authentication information.
   - It checks if there is a stored user in `localStorage` (from a previous session) and initializes the `user` state with this value if available.

   
   const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
   

2. Firebase Authentication Listener:
   - The hook sets up a listener using `auth.onAuthStateChanged`, a Firebase method that triggers a callback function whenever the user's authentication state changes.
   - If the user signs in, the listener callback receives an `authUser` object, which represents the authenticated user. This user object is stored both in the state and in `localStorage` to persist the user's session across page reloads.
   - If the user signs out, the listener clears the `authUser` from both state and `localStorage`.

   useEffect(() => {
     const listener = auth.onAuthStateChanged((authUser) => {
       if (authUser) {
         localStorage.setItem('authUser', JSON.stringify(authUser));
         setUser(authUser);
       } else {
         localStorage.removeItem('authUser');
         setUser(null);
       }
     });

     return () => listener(); // Cleanup listener on component unmount
   }, [auth]);

3. Return Value:
   - The hook returns the `user` object, which can be used in any component that needs to know whether the user is signed in or not.

   return { user };

Why Use a Custom Hook?

- Encapsulation of Logic: The `useAuthListener` hook encapsulates all the logic related to managing and listening to authentication state changes in one place. This keeps your components clean and focused on rendering UI, without being cluttered with authentication logic.
  
- Reusability: By placing the authentication logic in a custom hook, you can easily reuse it across different parts of your application wherever you need to know the user's authentication status.

- Centralized Authentication Handling: Using a hook allows you to centralize how your app deals with authentication state. For instance, if you ever need to change the way you handle authentication, you only need to update the logic in the hook rather than in multiple components.

How It's Used in the Application:

In app.js file, i used the `useAuthListener` hook to determine whether the user is logged in:

const { user } = useAuthListener();

- Routing Based on Authentication: You use the `user` state to conditionally render different routes. For example, if a user is logged in, they should be redirected to the `Browse` page. If not, they should see the `SignIn` or `SignUp` pages:

  <Route
    path={ROUTES.SIGN_IN}
    element={!user ? <SignIn /> : <Navigate to={ROUTES.BROWSE} />}
  />

This makes sure that your application responds dynamically to the user's authentication state, providing a seamless user experience.

The `useAuthListener` hook is designed to monitor and respond to changes in the user's authentication status, ensuring that your React application always knows whether the user is logged in or out and behaves accordingly. It helps manage user sessions by saving the user's state locally and making it accessible across your app.

STEP 11:
 Creating `useAuthListener` custom hook.
