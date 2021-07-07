### React Coding Challenge

## Overview 

This code challenge will test your skills in react.js, CSS, testing and modular design.

### The challenge

The purpose of the application is to create a simple page with a navigation bar
and a table that will display a list of properties 

## Tasks

1. Create a simple navigation bar on the top of the page, it will have one tab `Properties`
2. Create a table (`Properties` page) with these columns (`ID`, `Name`, `Location`, `Price`, `Status`, `Date`, `Actions`)
3. The column `Action` will have 2 buttons `edit`, `delete`
   * When we click on the `edit` button we must be able to change the values (`Name`, `Location`, `Price`, `Status`)
   * When we click on the `delete` button we must be able to delete the row selected
4. Add a new button called `Add a new property` on the top of the table
   * When we click on the button `Add a new property` it will redirect us to a new page with a form and we should be able to add a new property (`Name`, `Location`, `Price`, `Status`)
   
   * `Location` it would be great when writing a location autocomplete with a city list (You are free to use any library)
   * `Price` would be a field that accepts only digits with the symbol `£` at the end
   * `Status` will be of type dropdown with these values (`sold`, `unsold`)
   * `Date` The Date field will be generated automatically during creation and edition
5. All fields must be of type required
6. When submitting the form if there is no error it should redirect the user to the property list table with a success message, 
   otherwise an error message will appear
7. We should be able to sort all columns except `Actions` in the table

## Rules and assessment 

1. Write clean code and well explained commit messages. 
2. You are free to use any library
3. Test your application to the degree that you feel comfortable with. No specific testing frameworks are required.
4. A README.md file must be created to know the process to run the project.

## Installation and running  

Use Brew to install Node and node package manager (NPM).  

```bash
brew install node
```
Then install the dependencies. 

```bash
npm install
```

```bash
npm run start 
```

## Finally 

Thank you for the time spent for technical testing. 
