
## Key Decisions 

- The app is comprised of different components that define the building blocks of this application - Navbar, Header, Book, BookList, BookDetails.

- The index.js acts as the entry point for the app the renders React components into the DOM and helps to navigate between different components using BrowserRouter which sets up the routing configuration for the application.
Inside the Routes component, there are multiple Route components that define the different paths and components to be rendered for those paths.

- The context.js file provides a context and context provider for the React application. It utilizes the Google Books API to fetch books based on a search term.

- This application utilizes different React hooks like useState, useEffect, useContext etc. to make it efficient. 

- This application uses simple functional component architecture to make the code modular and readable. 

- The application styling is done using CSS and is done in a component focused way to make is easier to edit and readable. 

- The unit tests were created and tested using React Testing library and Jest.

## Run instructions

In the project directory, you can run:
### `npm install react-scripts`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
