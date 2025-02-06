# modulo-3-Evaluacion Final - Gabriella Calvano (Nymesia47)
## React Harry Potter Characters App

Final project of the Adalab bootcamp, third module. The goal was to create a web application using React. The application displays a list of Harry Potter characters, allowing users to filter them by name, house or gender and view character details.

## Basic Requirements

### 1. Character List
- Fetch character data from the API: [HP API](https://hp-api.onrender.com/).
- Display the following information:
  - Image
  - Name
  - Species
- If a character has no image, use a placeholder image.

### 2. Search by Name
- Implement a text input field to filter characters by name.
- The search should be case-insensitive.

### 3. Filter by House
- Add a dropdown menu to filter characters by house.
- By default, the page should display characters from **Gryffindor**.

### 4. Minimum required components
- **Filters**
- **Character list**
  - **Character card**
- **Character detail**

### 5. Character Detail View
- Clicking on a character opens a detailed view.
- Implemented using **React Router DOM**.
- Display:
  - Image
  - Name
  - House
  - Status (alive or deceased)
  - Gender
  - Species

### 6. Additional Features
- The search field should be inside a `<form />` element.
- Prevent the page from reloading when pressing "Enter" in the search field.
- If no characters match the search, display a message like: "No characters match the search term XXX."
- When navigating back from the detail view, the search field should retain the previous input value.

## Bonus Features

### 7. Visual Enhancements
- Show an icon indicating if a character is alive or deceased.
- Ensure responsive design for mobile devices.

### 8. Shareable URL
- If a user navigates to a non-existent detail page (e.g., `/detail/12345`), show an error message.
- Ensure that character detail pages can be accessed directly via URL.
- Refreshing the page on a character detail view should retain the displayed data.

### 9. Sorting
- Implement alphabetical sorting of characters by name.

### 10. Additional Filters
- Add extra filters, such as filtering by gender.

### 11. Reset Button
- Implement a reset button that restores the initial state, clearing filters and resetting the character list.

## Technologies Used
- React
- React Router DOM
- CSS for styling and responsiveness


## License
This project is licensed under the MIT License.

## Contact
For any questions or suggestions, feel free to reach out:

Maintainer: Gabriella Calvano
Email: gabcalvano@gmail.com
GitHub: Nymesia47


