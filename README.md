
# Book Finder

This is a react web application which uses Google Books API to fetch and show the books based on the simple search entry. 

<img width="1448" alt="Screenshot 2023-06-05 at 9 31 08 AM" src="https://github.com/tanvijain13/my-book-app/blob/master/Screenshot%202023-06-05%20at%209.58.21%20AM.png">

## Key Decisions Made

- The app is comprised of different components that define the building blocks of this application - Navbar, Header, Search, Book, BookList, BookDetails.

- The index.js acts as the entry point for the app that renders React components into the DOM and helps to navigate between different components using BrowserRouter which sets up the routing configuration for the application.
Inside the Routes component, there are multiple Route components that define the different paths and components to be rendered for those paths.

- The context.js file provides a context and context provider for the React application. It utilizes the Google Books API to fetch books based on a search term.

- This application utilizes different React hooks like useState, useEffect, useContext etc. to make it efficient. 

- This application uses simple functional component architecture to make the code modular and readable. 

- The application styling is done using CSS and is done in a component focused way to make is easier to edit and readable. 

- The unit tests were created and tested using React Testing library and Jest.

## Future Ideas

- I would add a login/register page and create a database to store the user information
- Recommendation system based on user search history and favorites
- Shuffle books feature to suggest books randomly
- chatGPT integration for searching books based on description for more specific search using AI models
- chatGPT book summary integration to show a book summary

## Run instructions

Clone the repository and navigate to the project directory.

You will require a Google API Key, once you have it, place the key in place of "YOUR-API-KEY" in Context.js file - 

### `const API_KEY = "YOUR-API-KEY"; `

Now in the project directory, you can run:
### `npm install react-scripts`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

### `npm test`or `npx jest` (make sure you have the Jest dependencies installed)

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
