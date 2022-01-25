# Build a Formik Form

## Using Formik

_Note: This lesson takes a long time to load because it has to download the dependencies and then start the React development server._

**Formik** is a small library that helps you with the three most annoying aspects of creating forms in React:

- Getting values in and out of the form state
- Validation and error messages
- Handling form submission

By collocating all of the above in one place, **Formik** will keep things organized, thereby, making testing, refactoring, and reasoning about your forms a breeze.

**Before you get started with this activity, you need to:**

Download the project starter files. These files include: 
* public/index.html (this is where your React app will be loaded inside the root element)
* src/App.js (this is the main component of your React application. This is where most of your code will go)
* Open a command line on your computer and run the command cd path/to/project/root, which allows you to point to the root folder of the starter files (note that path/to/project/root should be replaced with the actual path to the starter files)
* Within the same command-line window, run npm install to install all dependencies
* Once the command completes successfully, run npm start to start the application in your browser.

**In this activity, your task is to create a login form with validation using Formik.**

Your form should include the following:

- An Email field
- A Password field
- A Submit Button

Your form should implement the following input validation rules:

- If the username or password inputs are empty, display the message "field required" under the text input.
- If the username is not in an email format, display the message "username should be an email" under the text input.
- If the username and password pass the validation above, then display the message "Login Successful" in an `alert` box.

Your form should implement the following specific details:

- The email input field should have an id of `emailField`
- The email error message should be within a `div` element that has an id of `emailError`
- The password input field should have an id of `pswField`
- The password error message should be within a `div` element that has an id of `pswError`
- The submit button should have an id of `submitBtn`

The starter code can be found inside `src/App.js`.
