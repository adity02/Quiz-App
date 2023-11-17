# Quiz App

This is a simple quiz application built using React.js. It allows users to take quizzes and view their results. The application uses React Router DOM for navigation, Material UI for styling, and consists of three main pages - the home page, create quiz page, and result page.

## Prerequisites

To run this application, you need to have the following installed on your machine:

- Node.js
- React.js

## Installation

1. Clone the repository:

   ```shell
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```shell
   cd quiz-app
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

## Usage

To start the application, run the following command:

```shell
npm start
```

This will start the development server and the application will be accessible on `http://localhost:3000`.

## Features

### Home Page

The home page serves as the landing page for the application. It provides a create page and a my quizzes pages with options to play a quiz.

### Create Quiz Page

The create quiz page allows users to create a new quiz. Users can enter a quiz title and add multiple questions with options. They can specify the correct answer for each question and add or remove questions as needed. On submitting the question, the user will be redirected to the play quiz page.

### Result Page

The result page displays the overall result of the quiz taken by the user. It shows the total number of questions, the number of questions answered correctly.

## Project Structure

The project structure is organized as follows:

```
quiz-app/
  |-- public/
  |-- src/
    |-- components/
        |-- Home.js
        |-- CreateQuiz.js
        |-- Result.js
    |-- App.js
    |-- index.js
```

## Dependencies

The application relies on the following dependencies:

- `react`: JavaScript library for building user interfaces.
- `react-router-dom`: Routing library for React applications.
- `material-ui/core`: UI library for styling components.

## Notes

- The application uses React Router DOM for navigation between pages. The routes are defined in the `App.js` file.
- Material UI components are used for creating an aesthetically pleasing user interface.
- The application state is managed using React's built-in state management system.

## Deployment link
https://extraordinary-kangaroo-1ca737.netlify.app/play-quiz


## Contributions

Contributions to this project are welcome. Feel free to submit any bug fixes or enhancements via pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for using the quiz app! 
