# Restaurant Menu Web Application

## Overview

This project is a web-based application designed to dynamically render a restaurant's menu and allow users to select items from different categories. The application displays the restaurant's details, lists menu items by category, and shows the user's selections along with the total cost.

## Key Features

- **Dynamic Menu Rendering:** The menu is generated dynamically from a JSON file, allowing for easy updates and maintenance.
- **Item Selection:** Users can select one item from each menu category, with the application tracking their selections.
- **Cost Calculation:** The application calculates and displays the total cost of the selected items.
- **Responsive Layout:** While primarily designed for desktop, basic responsive design principles are applied for better mobile viewing.

## Technologies and Frameworks

- **React:** Chosen for its component-based architecture, which allows for efficient and organized code structure.
- **CSS Flexbox and Grid:** Utilized for layout design, providing a flexible and responsive interface.
- **JavaScript ES6:** Modern JavaScript features are used for concise and more readable code.

## Design and Implementation

- **Component Structure:** The application is broken down into several key components (`Header`, `MenuList`, `MenuType`, `MenuItem`, `SelectedItems`), each responsible for a specific part of the application.
- **State Management:** React's useState hook is used for managing the state of selected items and total cost.
- **Flexbox and Grid:** Flexbox is used for aligning menu items and ensuring a fluid layout, while CSS Grid offers a structured layout for menu items within each category.

## Future Enhancements

Given more time, the following enhancements would be considered:

- **Mobile-Friendly Layout:** Implementing a more advanced responsive design, particularly fixing the order overlay to the top of the screen on mobile devices for better accessibility and user experience.
- **Interactive Features:** Adding more interactive elements such as animations or transitions for a more engaging user interface.

## Setup and Installation

1. Clone the repository.
2. Navigate to the project directory and install dependencies:

`npm install`

3. Start the development server:

`npm start`

4. Open `http://localhost:3000` to view the application in the browser.
